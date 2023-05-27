import express from 'express';

//express middleware logging api use
const logger = (
  req: express.Request,
  res: express.Response,
  // eslint-disable-next-line @typescript-eslint/ban-types
  next: Function
): void => {
  const url = req.url;
  console.log(`${url} URL was entered`);
  next();
};

export default logger;
