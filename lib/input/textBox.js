'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SearchInput = exports.PhoneInput = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _search = require('./search.png');

var _search2 = _interopRequireDefault(_search);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _tag = require('pwfe-dom/tag');

var _tag2 = _interopRequireDefault(_tag);

var _textBox = require('./textBox.scss');

var _textBox2 = _interopRequireDefault(_textBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by luodh on 2017/5/18.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var cx = _bind2.default.bind(_textBox2.default);

/**
 * 基础按钮
 * @param {object} props {{
 *  扩展原生input控件的属性
 *  {string} type: 同input的type, 额外提供textbox
 *  {string} inType: 预设的输入过滤 name中文字和数字/number数字和点.
 *  {Regexp} reg: 自定义过滤正则
 *  {string} style 对应的样式
 *  {string} className: css名称
 *  {string} sType: 预设的样式   underline灰色下划线
 *  {boolean} fullWidth: 是否全屏宽
 *  {boolean} value: 初始值
 *  {function} onChange:点击时的回调方法 (val)=>{}
 * }}
 */

var TextBox = function (_React$Component) {
    _inherits(TextBox, _React$Component);

    function TextBox() {
        var _ref;

        _classCallCheck(this, TextBox);

        for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
            props[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = TextBox.__proto__ || Object.getPrototypeOf(TextBox)).call.apply(_ref, [this].concat(props)));

        _this.onChangeHandle = _this.onChangeHandle.bind(_this);
        _this.state = {
            value: '' + (_this.props.value || "")
        };
        return _this;
    }

    //提供非受控方式获取值的接口


    _createClass(TextBox, [{
        key: 'getValue',
        value: function getValue() {
            return this.state.value;
        }
    }, {
        key: 'onChangeHandle',
        value: function onChangeHandle(event) {
            var value = void 0,
                reg = void 0;

            switch (this.props.inType) {
                case "name":
                    reg = new RegExp(/[^0-9|\u4E00-\u9FA5]/g);
                    break;
                case "number":
                    reg = new RegExp(/[^0-9.]/g);
                    break;
                default:
                    this.props.reg && (reg = new RegExp(this.props.reg));
            }
            reg && (event.target.value = event.target.value.replace(reg, ''));
            value = event.target.value;
            this.setState({ value: value });
            this.props.onChange && this.props.onChange(value);
        }
    }, {
        key: 'render',
        value: function render() {
            var _cx;

            var cn = cx((_cx = {}, _defineProperty(_cx, 'input-base', true), _defineProperty(_cx, 'input-full', this.props.fullWidth), _defineProperty(_cx, 'input-underline', this.props.sType == "underline"), _defineProperty(_cx, this.props.className ? this.props.className : "", true), _cx));
            var props = Object.assign({}, this.props);
            delete props.inType;
            delete props.sType;
            delete props.reg;
            delete props.fullWidth;

            return _react2.default.createElement('input', _extends({}, props, { value: this.state.value, className: cn, type: this.props.type || "text",
                onChange: this.onChangeHandle }));
        }
    }]);

    return TextBox;
}(_react2.default.Component);

//特定控件: 1)手机输入框 2)搜索输入框

/**
 * 手机号码输入框
 * @param props
 * {function} onChange:点击时的回调方法 (val,isPhone)=>{}
 * @returns {XML}
 * @constructor
 */


var PhoneInput = exports.PhoneInput = function PhoneInput(props) {
    var onChange = function onChange(val) {
        var isPhone = false;
        if (val.toString().length == 11) {
            //todo 手机的判断
            isPhone = true;
        }
        props.onChange(val, isPhone);
    };
    var newProps = Object.assign({}, props, { reg: /[^0-9]/g, maxLength: 11, onChange: onChange });
    return _react2.default.createElement(TextBox, newProps);
};

/**
 * 搜索输入框
 * @param props
 * {function} onSearch:点击按钮时的回调方法 (val)=>{}
 * {array} list 搜索结果列表dom
 * @returns {XML}
 * @constructor
 */

var SearchInput = exports.SearchInput = function (_React$Component2) {
    _inherits(SearchInput, _React$Component2);

    function SearchInput() {
        var _ref2;

        _classCallCheck(this, SearchInput);

        for (var _len2 = arguments.length, props = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            props[_key2] = arguments[_key2];
        }

        var _this2 = _possibleConstructorReturn(this, (_ref2 = SearchInput.__proto__ || Object.getPrototypeOf(SearchInput)).call.apply(_ref2, [this].concat(props)));

        _this2.onSearchHandle = _this2.onSearchHandle.bind(_this2);
        _this2.onKeyPressHandle = _this2.onKeyPressHandle.bind(_this2);
        return _this2;
    }

    _createClass(SearchInput, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps, nextState) {
            if (nextProps.list !== this.props.list) {
                return true;
            }
        }
    }, {
        key: 'onSearchHandle',
        value: function onSearchHandle() {
            this.props.onSearch && this.props.onSearch(this.textBox.getValue());
        }
    }, {
        key: 'onKeyPressHandle',
        value: function onKeyPressHandle(e) {
            if (e.key == "Enter") {
                e.preventDefault();
                this.onSearchHandle();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var newProps = Object.assign({}, this.props, { type: "search" });
            delete newProps.onSearch;
            return _react2.default.createElement(
                'div',
                { className: cx("input-search") },
                _react2.default.createElement(
                    'div',
                    { className: cx("upper") },
                    _react2.default.createElement(TextBox, _extends({ ref: function ref(_ref3) {
                            _this3.textBox = _ref3;
                        } }, newProps, { onKeyPress: this.onKeyPressHandle, className: cx("textbox") })),
                    _react2.default.createElement(
                        'div',
                        { className: _textBox2.default['btn'], onClick: this.onSearchHandle },
                        _react2.default.createElement(_tag2.default.Icon, { src: 'search' })
                    )
                ),
                this.props.list && _react2.default.createElement(
                    'div',
                    { className: cx("list") },
                    this.props.list
                )
            );
        }
    }]);

    return SearchInput;
}(_react2.default.Component);

exports.default = TextBox;