'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StatusIcon = exports.HllipseIcon = exports.EllipseIcon = exports.HollowIcon = exports.SolidIcon = exports.BaseIcon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _tag = require('pwfe-dom/tag');

var _tag2 = _interopRequireDefault(_tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * Created by dio on 2017/5/15.
                                                                                                                                                                                                                   */

var cx = _bind2.default.bind(require("./baseIcon.scss"));

/**
 * 通用标签框：
 * @param {object} props {{
 *  {object} style: 自定义图标框样式
 *  {boolean} showIcon: 是否显示对勾图标
 *  {boolean} transparent: 是否为透明边框
 *  {string} className： 修改css接口
 *  {string} text: 标签内容
 * }}
 */
var BaseIcon = exports.BaseIcon = function BaseIcon(props) {

    var cn = cx(_defineProperty({
        'base-icon': true
    }, props.className ? props.className : '', true));

    var onClick = function onClick() {
        props.onClick && props.onClick();
    };

    return _react2.default.createElement(
        'div',
        { style: props.style, className: cn, onClick: onClick },
        props.showIcon && _react2.default.createElement(_tag2.default.Icon, { className: cx('yes'), src: 'yesIcon' }),
        props.showStatus && _react2.default.createElement(
            'div',
            { className: cx('status-icon') },
            props.comp
        ),
        props.text
    );
};

/**
 * 实心标签框：
 * @param {object} props {{
 *  {object} style: 自定义图标框样式
 *  {string} className： 修改css接口
 *  {string} text: 标签内容
 *  {string} color: 图标背景色
 *  {boolean} showIcon: 是否显示对勾图标
 * }}
 */
var SolidIcon = exports.SolidIcon = function SolidIcon(props) {

    var style = Object.assign({ backgroundColor: props.color }, props.style);

    return _react2.default.createElement(BaseIcon, { text: props.text, className: props.className, showIcon: props.showIcon, style: style });
};

/**
 * 透明标签框：
 * @param {object} props {{
 *  {object} style: 自定义图标框样式
 *  {string} className： 修改css接口
 *  {string} text: 标签内容
 *  {string} color: 透明框色彩
 * }}
 */
var HollowIcon = exports.HollowIcon = function HollowIcon(props) {

    var cn = cx(_defineProperty({
        'transparent': true
    }, props.className ? props.className : '', true));

    var style = Object.assign({ borderColor: props.color, color: props.color }, props.style);

    return _react2.default.createElement(BaseIcon, { text: props.text, className: cn, style: style });
};

/**
 * 椭圆标签框：
 * @param {object} props {{
 *  {object} style: 自定义图标框样式
 *  {string} className： 修改css接口
 *  {string} text: 标签内容
 *  {string} color: 文字颜色
 *  {string} bgColor: 背景色
 * }}
 */
var EllipseIcon = exports.EllipseIcon = function EllipseIcon(props) {

    var style = Object.assign({ backgroundColor: props.bgColor, color: props.color, borderRadius: '10px / 10px' }, props.style);

    return _react2.default.createElement(BaseIcon, { text: props.text, className: props.className, style: style, onClick: props.onClick });
};

/**
 * 椭圆带边框标签框：
 * @param {object} props {{
 *  {object} style: 自定义图标框样式
 *  {string} className： 修改css接口
 *  {string} text: 标签内容
 *  {string} color: 文字颜色及边框颜色
 * }}
 */
var HllipseIcon = exports.HllipseIcon = function HllipseIcon(props) {

    var style = Object.assign({ borderColor: props.color, color: props.color }, props.style);

    var cn = cx(_defineProperty({
        'hllipse-btn': true
    }, props.className ? props.className : '', true));

    return _react2.default.createElement(BaseIcon, { text: props.text, className: cn, style: style });
};

/**
 * 椭圆带图标标签框：
 * @param {object} props {{
 *  {object} style: 自定义图标框样式
 *  {string} className： 修改css接口
 *  {string} text: 标签内容
 *  {string} color: 背景色
 *  {boolean} status: 状态（true为对勾，false为 X，不传则默认为 X）
 * }}
 */
var StatusIcon = exports.StatusIcon = function StatusIcon(props) {
    var className = props.className,
        status = props.status,
        color = props.color,
        text = props.text;


    var style = Object.assign({ backgroundColor: color }, props.style);

    var cn = cx(_defineProperty({
        'status-btn': true
    }, className ? className : '', true));

    var comp = status ? _react2.default.createElement('div', { className: cx('status-yes'), style: { borderLeftColor: color, borderBottomColor: color } }) : _react2.default.createElement(
        'div',
        { className: cx('status-no'), style: { backgroundColor: color } },
        _react2.default.createElement('span', { style: { backgroundColor: color } })
    );

    return _react2.default.createElement(BaseIcon, { text: text, className: cn, showStatus: 'true', comp: comp, style: style });
};