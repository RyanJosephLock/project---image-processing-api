## Image Processing API
A simple image processing API used to resize jpg image files.

---

## Usage
### App Endpoint
```
http://localhost:3000/api/images?filename={filename}&width={pixelwidth}&height={pixelheight}
```
The parameters can be edited as follows

+ **{filename}** can be the below 3 options by default (upload more jpg images to the build/assets/full/ directory to add more input files):
    + goldcoast1
    + goldcoast2
    + goldcoast3
+ **{pixelwidth}** is the width of the output file as a number.
+ **{pixelheight}** is the height of the output file as a number.

Output files are stored in the build/assets/thumb directory or can be right-click 'Save image as...' from the browser.

---

## Scripts

### Build and Test
```
npm run test
```

### Start Server (port 3000)
```
npm run start
```