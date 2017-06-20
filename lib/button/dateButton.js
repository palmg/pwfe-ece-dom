'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('./button');

var _button2 = _interopRequireDefault(_button);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _dateButton = require('./dateButton.scss');

var _dateButton2 = _interopRequireDefault(_dateButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by luodh on 2017/5/16.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

//样式


var cx = _bind2.default.bind(_dateButton2.default);

/**
 * 图标按钮 左方带有一个图标
 * @param {object} props {{
 *  {string} style 对应的样式
 *  {string} className: css名称
 *  {boolean} disabled: 是否禁用
 *  {boolean} fullWidth: 是否全屏宽
 *  {string} value: 日期
 *  {function} onChange:点击时的回调方法 (date)=>{}
 * }}
 */

var DateBtn = function (_React$Component) {
    _inherits(DateBtn, _React$Component);

    function DateBtn() {
        var _ref;

        _classCallCheck(this, DateBtn);

        for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
            props[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = DateBtn.__proto__ || Object.getPrototypeOf(DateBtn)).call.apply(_ref, [this].concat(props)));

        _this.state = {
            date: _this.props.value || ""
        };
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(DateBtn, [{
        key: 'handleChange',
        value: function handleChange(e) {
            this.setState({
                date: e.target.value || ""
            });
            this.props.onChange && this.props.onChange(e.target.value);
        }
    }, {
        key: 'render',
        value: function render() {
            var cn = cx(_defineProperty({
                'btn-date': true
            }, this.props.className ? this.props.className : "", true));
            return _react2.default.createElement(
                _button2.default,
                _extends({}, this.props, { className: cn, style: this.props.style }),
                _react2.default.createElement('input', { value: this.state.date, type: 'date', onChange: this.handleChange })
            );
        }
    }]);

    return DateBtn;
}(_react2.default.Component);

exports.default = DateBtn;