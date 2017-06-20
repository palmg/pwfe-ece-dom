'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _numAdjust = require('./numAdjust.scss');

var _numAdjust2 = _interopRequireDefault(_numAdjust);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by luodh on 2017/5/17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

//样式


var cx = _bind2.default.bind(_numAdjust2.default);
/**
 * 数值调节器
 * @param {object} props {{
 *  {number}  value 当前数值
 *  {number}  min 最小值
 *  {number}  max 最大值
 *  {boolean} editable 是否可编辑
 *  {string} style 对应的样式
 *  {string} className: css名称
 *  {function} onChange:点击时的回调方法 (num)=>{}
 * }}
 */

var NumAdjust = function (_React$Component) {
    _inherits(NumAdjust, _React$Component);

    function NumAdjust() {
        var _ref;

        _classCallCheck(this, NumAdjust);

        for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
            props[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = NumAdjust.__proto__ || Object.getPrototypeOf(NumAdjust)).call.apply(_ref, [this].concat(props)));

        var value = _this.props.value || 0;
        _this.props.min && _this.props.min > value && (value = _this.props.min);
        _this.props.max && _this.props.max < value && (value = _this.props.max);
        _this.state = {
            value: value
        };
        _this.handleClick = _this.handleClick.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(NumAdjust, [{
        key: 'handleClick',
        value: function handleClick(opType) {

            var value = this.state.value;
            value += opType === "add" ? 1 : -1;
            this.props.min && this.props.min > value && (value = this.props.min);
            this.props.max && this.props.max < value && (value = this.props.max);

            this.setState({ value: value });
            this.props.onChange && this.props.onChange(value);
        }
    }, {
        key: 'handleChange',
        value: function handleChange(e) {
            var value = parseFloat(e.target.value || 0);
            this.props.min && this.props.min > value && (value = this.props.min);
            this.props.max && this.props.max < value && (value = this.props.max);

            this.setState({ value: value });
            this.props.onChange && this.props.onChange(value);
        }
    }, {
        key: 'render',
        value: function render() {

            var cn = cx(_defineProperty({
                'num-adjust': true
            }, this.props.className ? this.props.className : "", true));

            return _react2.default.createElement(
                'div',
                { className: cn, style: this.props.style },
                _react2.default.createElement(
                    'button',
                    { className: _numAdjust2.default['minus'], onClick: this.handleClick.bind(this, "minus") },
                    '-'
                ),
                _react2.default.createElement('input', { disabled: this.props.editable === false, onChange: this.handleChange, value: this.state.value,
                    type: 'number' }),
                _react2.default.createElement(
                    'button',
                    { className: _numAdjust2.default['add'], onClick: this.handleClick.bind(this, "add") },
                    '+'
                )
            );
        }
    }]);

    return NumAdjust;
}(_react2.default.Component);

exports.default = NumAdjust;