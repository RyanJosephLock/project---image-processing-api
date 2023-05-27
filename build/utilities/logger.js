"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//express middleware logging api use
var logger = function (req, res, 
// eslint-disable-next-line @typescript-eslint/ban-types
next) {
    var url = req.url;
    console.log("".concat(url, " URL was entered"));
    next();
};
exports.default = logger;
