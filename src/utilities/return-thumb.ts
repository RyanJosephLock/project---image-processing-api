import sharp from 'sharp';
import fs from 'fs';

const checkFileExists = (thumbFileName: string): boolean => {
  const path = `${__dirname}/../assets/thumb/${thumbFileName}.jpg`;
  return fs.existsSync(path);
};

const generateThumb = async (
  inputFileName: string,
  inputWidth: number,
  inputHeight: number,
  thumbFileName: string
): Promise<string> => {
  try {
    await sharp(`${__dirname}/../assets/full/${inputFileName}.jpg`)
      .resize(inputWidth, inputHeight)
      .toFormat('jpeg', { mozjpeg: true })
      .toFile(`${__dirname}/../assets/thumb/${thumbFileName}.jpg`);
    return thumbFileName;
  } catch (err) {
    const errorInput = JSON.stringify(err, Object.getOwnPropertyNames(err));
    if (
      errorInput.includes(
        'Error: Processed image is too large for the JPEG format'
      )
    ) {
      return 'Error: Processed image is too large for the JPEG format';
    } else if (errorInput.includes('Error: Input file is missing')) {
      return 'Error: Input file is missing';
    } else {
      return 'Error: Unknown';
    }
  }
};

const returnThumb = (
  inputFileName: string,
  inputWidth: number,
  inputHeight: number
): Promise<string> | string => {
  const thumbFileName = `${inputFileName}-${inputWidth}x${inputHeight}`;
  if (!checkFileExists(thumbFileName)) {
    console.log('thumb generated');
    return generateThumb(inputFileName, inputWidth, inputHeight, thumbFileName);
  } else {
    console.log('thumb exists');
    return thumbFileName;
  }
};

export default returnThumb;
export { generateThumb, checkFileExists };
