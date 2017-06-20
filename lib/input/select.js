'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _select = require('./select.scss');

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by luodh on 2017/5/16.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


//样式


var cx = _bind2.default.bind(_select2.default);

/**
 * 下拉框
 * @param {object} props {{
 *  {string} style 对应的样式
 *  {string} className: css名称
 *  {string} sType: 预设的样式类型 round:圆角
 *  {string} value: 默认选中项
 *  {array} options: 候选项
 *  {function} onChange:点击时的回调方法 (oldVal={value,text},newVal={value,text})=>{}
 * }}
 */

var Select = function (_React$Component) {
    _inherits(Select, _React$Component);

    function Select() {
        var _ref;

        _classCallCheck(this, Select);

        for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
            props[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = Select.__proto__ || Object.getPrototypeOf(Select)).call.apply(_ref, [this].concat(props)));

        _this.state = {
            value: _this.props.value || "",
            text: _this.props.text || ""
        };
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(Select, [{
        key: 'handleChange',
        value: function handleChange(e) {

            var text = "";

            var oldState = this.state,
                newState = {
                value: e.target.value,
                text: e.target.options[e.target.options.selectedIndex].text
            };
            this.setState({
                value: e.target.value,
                text: e.target.options[e.target.options.selectedIndex].text
            });
            this.props.onChange && this.props.onChange(oldState, newState);
        }
    }, {
        key: 'render',
        value: function render() {
            var _cx;

            var cn = cx((_cx = {}, _defineProperty(_cx, 'select', true), _defineProperty(_cx, 'round', this.props.sType === "round"), _defineProperty(_cx, 'simple', this.props.sType === "simple"), _defineProperty(_cx, this.props.className ? this.props.className : "", true), _cx));

            var options = this.props.options.map(function (option) {
                return _react2.default.createElement(
                    'option',
                    { key: option.value, value: option.value },
                    option.text
                );
            });
            return _react2.default.createElement(
                'div',
                { style: this.props.style, className: cn },
                _react2.default.createElement(
                    'select',
                    { value: this.state.value, onChange: this.handleChange },
                    options
                ),
                _react2.default.createElement(
                    'div',
                    { className: _select2.default['down-arrow'] },
                    _react2.default.createElement('span', null)
                )
            );
        }
    }]);

    return Select;
}(_react2.default.Component);

exports.default = Select;