'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _button = require('./button.scss');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * Created by luodh on 2017/5/15.
                                                                                                                                                                                                                   */

//样式


var cx = _bind2.default.bind(_button2.default);

/**
 * 基础按钮
 * @param {object} props {{
 *  {string} style 对应的样式
 *  {string} className: css名称
 *  {string} sType: 预设的样式类型 green绿地白字/gray白底灰字
 *  {boolean} fullWidth: 是否全屏宽
 *  {boolean} disabled: 是否禁用
 *  {string} children: 子组件
 *  {function} onClick:点击时的回调方法 (event)=>{}
 * }}
 */
var BaseBtn = function BaseBtn(props) {
    var cn = cx(_defineProperty({
        'btn-base': true,
        'btn-green': props.sType === "green",
        'btn-gray': props.sType === "gray",
        'btn-disabled': props.disabled,
        'btn-full': props.fullWidth
    }, props.className ? props.className : "", true));

    return _react2.default.createElement(
        'button',
        { disabled: props.disabled, style: props.style, className: cn, onClick: props.onClick },
        props.children
    );
};

exports.default = BaseBtn;