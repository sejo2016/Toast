"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

require("./css/index.css");

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Model = function (_Component) {
    _inherits(Model, _Component);

    function Model(props) {
        _classCallCheck(this, Model);

        var _this = _possibleConstructorReturn(this, (Model.__proto__ || Object.getPrototypeOf(Model)).call(this, props));

        _this.state = {
            type: "",
            msg: "",
            timer: 0,
            className: ""
        };
        _this.show = _this.show.bind(_this);
        return _this;
    }

    _createClass(Model, [{
        key: "show",
        value: function show(opt) {
            var _this2 = this;

            var type = opt.type,
                typeStatus = opt.typeStatus,
                msg = opt.msg,
                duration = opt.duration;

            var time = null;
            var timer = this.state.timer;

            clearTimeout(timer);
            duration = duration || 1500;

            var _self = this;
            if (type != "loading" || type == "loading" && typeStatus == 2) {
                time = setTimeout(function () {
                    _self.setState({
                        className: "toastEnter"
                    });
                    setTimeout(function () {
                        var cls = _this2.state.className;
                        if (cls.match("toastEnter")) {
                            _self.setState({
                                className: "toastEnter toastOut"
                            });
                        }
                    }, 500);
                }, type != "loading" ? duration : 1);
            }

            this.setState({
                type: type,
                msg: msg,
                timer: time,
                className: ""
            });
        }
    }, {
        key: "render",
        value: function render() {
            var toastContent = "";
            if (this.state.type == "msg") {
                toastContent = this.state.msg;
            } else if (this.state.type == "loading") {
                toastContent = _react2.default.createElement(
                    "div",
                    {className: "toastInnerBox"},
                    _react2.default.createElement("div", {className: "toastLoadingImg"}),
                    _react2.default.createElement(
                        "div",
                        {className: "toastInnerText"},
                        this.state.msg
                    )
                );
            } else if (this.state.type == "success") {
                var successIcon = require('./img/successToast.png');
                toastContent = _react2.default.createElement(
                    "div",
                    {className: "toastInnerBox"},
                    _react2.default.createElement(
                        "div",
                        {className: "toastInnerImg"},
                        _react2.default.createElement("img", {src: successIcon, alt: ""})
                    ),
                    _react2.default.createElement(
                        "div",
                        {className: "toastInnerText"},
                        this.state.msg
                    )
                );
            } else if (this.state.type == "fail") {
                var failIcon = require('./img/failToast.png');
                toastContent = _react2.default.createElement(
                    "div",
                    {className: "toastInnerBox"},
                    _react2.default.createElement(
                        "div",
                        {className: "toastInnerImg"},
                        _react2.default.createElement("img", {src: failIcon, alt: ""})
                    ),
                    _react2.default.createElement(
                        "div",
                        {className: "toastInnerText"},
                        this.state.msg
                    )
                );
            } else if (this.state.type == "offline") {
                var offlineIcon = require('./img/offlineToast.png');
                toastContent = _react2.default.createElement(
                    "div",
                    {className: "toastInnerBox"},
                    _react2.default.createElement(
                        "div",
                        {className: "toastInnerImg"},
                        _react2.default.createElement("img", {src: offlineIcon, alt: ""})
                    ),
                    _react2.default.createElement(
                        "div",
                        {className: "toastInnerText"},
                        this.state.msg
                    )
                );
            }
            return _react2.default.createElement(
                "div",
                {
                    className: (0, _classnames2.default)({
                        toastInit: this.state.msg == "",
                        toastBox: true,
                        toastOut: this.state.className.match("toastOut")
                    })
                },
                _react2.default.createElement(
                    "div",
                    {
                        className: (0, _classnames2.default)({
                            toastContent: true,
                            toastEnter: this.state.className.match("toastEnter")
                        }),
                        style: {
                            padding: this.state.msg != "" ? "10px" : "0"
                        }
                    },
                    toastContent
                )
            );
        }
    }]);

    return Model;
}(_react.Component);

exports.default = Model;