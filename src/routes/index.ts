import express from 'express';
import logger from '../utilities/logger';
import returnThumb from '../utilities/return-thumb';

//create router object
const mainRoute = express.Router();

//main api route
mainRoute.get('/', (req, res) => {
  res.send('main api route');
  console.log(res.statusCode);
});

//api/images api route including logger
mainRoute.get('/images', logger, (req, res) => {
  // visit http://localhost:3000/api/images?filename=goldcoast1&width=200&height=200
  console.log(res.statusCode);
  console.log(req.originalUrl);
  const urlFileName = String(req.query.filename);
  const urlWidth = Number(req.query.width);
  const urlHeight = Number(req.query.height);
  (async () => {
    // invoke sharp utility async function inside of api response
    const getThumbResult = await returnThumb(urlFileName, urlWidth, urlHeight);
    if (getThumbResult.includes('Error')) {
      res.send(
        `<p style="font-weight:bold">
        ${getThumbResult}
        <hr>
        <br />Try using this URL format example: http://localhost:3000/api/images?filename=goldcoast1&width=200&height=200
        <br />Image filename choices: goldcoast1, goldcoast2, goldcoast3</p>`
      );
    } else {
      res.send(
        `<p>Resized image: ${urlFileName}<br /> Resized dimensions: ${urlWidth} x ${urlHeight}</p><img src="/thumb/${getThumbResult}.jpg">`
      );
    }
  })();
});

export default mainRoute;
