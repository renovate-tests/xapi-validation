"use strict";
var describeOptionalProp_1 = require("../describeOptionalProp");
var factory_1 = require("../factory");
var validData = {
    scaled: 0,
    raw: 0,
    min: 0,
    max: 0,
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    describeOptionalProp_1.default('scaled', factory_1.scaledValue, validData, test);
    describeOptionalProp_1.default('raw', factory_1.numberValue, validData, test);
    describeOptionalProp_1.default('min', factory_1.numberValue, validData, test);
    describeOptionalProp_1.default('max', factory_1.numberValue, validData, test);
};