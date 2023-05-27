"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// express server and routes config
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var app = (0, express_1.default)(); // global app object
app.use('/api', routes_1.default); // mount the main api route to the app
app.use(express_1.default.static(__dirname + '/assets')); // create static filepath to serve HTML images
exports.default = app;
