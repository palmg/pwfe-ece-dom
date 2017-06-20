'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _textLabel = require('./textLabel.scss');

var _textLabel2 = _interopRequireDefault(_textLabel);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cn = _bind2.default.bind(_textLabel2.default);

/**
 * 文本标签
 * 1）提供label属性文本输入
 * 2）提供name属性文本输入
 * 3）提供style属性自定义样式
 * 4）提供className属性指定样式
 * @param {object} props {{
 * {string} label 标签 必需
 * {string} name 名字 非必需
 * {object} style 外部样式 非必需
 * {String} className 外部样式类名 非必需
 * }}
 * @returns {XML}
 */
/**
 * Created by ljc on 2017/5/15 13:42.
 */
var cnBind = _bind2.default.bind(_textLabel2.default);

var TextLabel = function TextLabel(props) {
    var _className = cn('panel', 'panel-align', props.className);
    return _react2.default.createElement(
        'div',
        { style: props.style, className: _className },
        _react2.default.createElement(
            'span',
            null,
            props.label,
            ' ',
            props.name
        )
    );
};

exports.default = TextLabel;