'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('./button');

var _button2 = _interopRequireDefault(_button);

var _tag = require('pwfe-dom/tag');

var _tag2 = _interopRequireDefault(_tag);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _iconButton = require('./iconButton.scss');

var _iconButton2 = _interopRequireDefault(_iconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * Created by luodh on 2017/5/15.
                                                                                                                                                                                                                   */

//样式


var cx = _bind2.default.bind(_iconButton2.default);

/**
 * 图标按钮 左方带有一个图标
 * @param {object} props {{
 *  {string} style 对应的样式
 *  {string} iconStyle icon对应的样式
 *  {string} className: css名称
 *  {string} sType: 按钮样式类型 green/gray
 *  {boolean} disabled: 是否禁用
 *  {boolean} fullWidth: 是否全屏宽
 *  {object} icon 按钮内的图标
 *  {string} children: 子组件
 *  {function} onClick:点击时的回调方法 (event)=>{}
 * }}
 */
var IconBtn = function IconBtn(props) {
    var cn = cx(_defineProperty({
        'column': props.column
    }, props.className ? props.className : "", true));

    return _react2.default.createElement(
        _button2.default,
        _extends({}, props, { className: cn }),
        _react2.default.createElement(_tag2.default.Icon, { className: _iconButton2.default['icon'], style: props.iconStyle, src: props.icon || "greenCirclePlus" }),
        props.children
    );
};

exports.default = IconBtn;