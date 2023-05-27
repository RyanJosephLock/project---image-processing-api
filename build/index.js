'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
// start the Express server (http://localhost:3000/api)
var port = 3000;
app_1.default.listen(port, function () {
    console.log("server listening on port ".concat(port, ": http://localhost:").concat(port));
});
