import { checkFileExists, generateThumb } from '../../utilities/return-thumb';

describe('-- Utilities --', () => {
  describe('sharp image generation unit test', async () => {
    it('expect valid test thumb file name to be true', async () => {
      await generateThumb('goldcoast1', 100, 100, 'test-gen');
      expect(checkFileExists('test-gen')).toBeTrue();
    });

    it('expect invalid test thumb file name to be false', async () => {
      await generateThumb('wrongfilename', 100, 100, 'test-wrong');
      expect(checkFileExists('test-wrong')).toBeFalse();
    });
  });
});
