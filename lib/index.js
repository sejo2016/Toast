"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _model = require("./model");

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var div = document.createElement("div"); /**
                                          * Created by Lzzzzzq on 2017/3/14.
                                          */

document.body.appendChild(div);
var container = (0, _reactDom.render)(_react2.default.createElement(_model2.default, null), div);

var Toast = function Toast(opt) {
    opt = opt || {};
    if (opt.msg) {
        container.show(opt);
    }
};

exports.default = Toast;