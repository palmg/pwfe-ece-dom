'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CornerIcon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * Created by dio on 2017/5/16.
                                                                                                                                                                                                                   */

var cx = _bind2.default.bind(require("./cornerIcon.scss"));

/**
 * 边角浮标组件：
 * 考虑到文字定位问题，结合实际需求考虑是否固定角标大小
 * @param {object} props {{
 *  {string} className：修改css接口
 *  {string} color: 文字颜色，默认白色
 *  {string} bgColor: 背景色彩
 *  {string} length: 边长
 *  {string} tLength: 边长去单位，用来对文字内容进行定位
 *  {string} text: 文字内容
 *  {string} position: 所在位置，默认右下角（左上：l-t、左下： l-b、右上： r-t、右下： r-b）
 * }}
 */
var CornerIcon = exports.CornerIcon = function CornerIcon(props) {
    var _cx;

    var position = props.position || 'r-b',
        bgColor = void 0,
        textPosition = void 0,
        length = props.length,
        tLength = length.replace('rem', '');


    switch (position) {
        case 'l-t':
            bgColor = { borderTopColor: props.bgColor };
            textPosition = { left: -.2 * tLength + 'rem', top: -.9 * tLength + 'rem' };break;
        case 'r-t':
            bgColor = { borderTopColor: props.bgColor };
            textPosition = { right: -.15 * tLength + 'rem', top: -.9 * tLength + 'rem' };break;
        case 'l-b':
            bgColor = { borderBottomColor: props.bgColor };
            textPosition = { left: -.2 * tLength + 'rem', bottom: -.95 * tLength + 'rem' };break;
        case 'r-b':
            bgColor = { borderBottomColor: props.bgColor };
            textPosition = { right: -.15 * tLength + 'rem', bottom: -.95 * tLength + 'rem' };break;
    }

    var textStyle = Object.assign({ width: props.length }, textPosition),
        style = Object.assign({ color: props.color, borderWidth: props.length }, bgColor);

    var cn = cx((_cx = {
        'corner-icon': true
    }, _defineProperty(_cx, props.className ? props.className : '', true), _defineProperty(_cx, position, true), _cx));

    return _react2.default.createElement(
        'div',
        { style: style, className: cn },
        _react2.default.createElement(
            'p',
            { style: textStyle },
            props.text
        )
    );
};