'use strict';

import app from './app';

// start the Express server (http://localhost:3000/api)
const port = 3000;
app.listen(port, () => {
  console.log(`server listening on port ${port}: http://localhost:${port}`);
});
