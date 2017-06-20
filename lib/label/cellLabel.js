'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _tag = require('pwfe-dom/tag');

var _tag2 = _interopRequireDefault(_tag);

var _defCellLabel = require('./defCellLabel');

var _defCellLabel2 = _interopRequireDefault(_defCellLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by ljc on 2017/5/15 13:42.
 */
var cn = _bind2.default.bind(require('./cellLabel.scss'));

/**
 * 基础Cell标签
 * 1）提供label属性文本输入
 * 2）提供name属性文本输入
 * 3）提供style属性自定义样式
 * 4）提供className属性指定样式
 * 5）提供noneMarginBottom属性设置是否指定下边距
 * 6）提供noneBorderBottom属性设置是否带下边框
 * 7）提供onClick属性设置点击事件
 * @param {object} props {{
 * {string} label 标签 必需
 * {string} name 名字 非必需
 * {boolean} noneMarginBottom 下边距 非必需
 * {boolean} noneBorderBottom 下边距 非必需
 * {boolean} noneNext 下探箭头 非必需
 * {object} style 外部样式 非必需
 * {String} className 外部样式类名 非必需
 * {function} onClick 设置点击事件 非必需
 * }}
 * @returns {XML}
 */
var CellLabel = function CellLabel(props) {
    var cnLabel = cn('label-span');
    var cnName = cn('name-span');
    var cnNext = cn('next-text');
    return _react2.default.createElement(
        _defCellLabel2.default,
        { style: props.style, onClick: props.onClick, noneMarginBottom: props.noneMarginBottom, noneBorderBottom: props.noneBorderBottom, className: props.className },
        _react2.default.createElement(
            'div',
            { className: cnLabel },
            _react2.default.createElement(
                'span',
                null,
                props.label
            )
        ),
        _react2.default.createElement(
            'div',
            { className: cnName },
            _react2.default.createElement(
                'span',
                { className: !props.noneNext && cnNext },
                props.name
            ),
            !props.noneNext && _react2.default.createElement(_tag2.default.Icon, { src: 'nextLabel' })
        )
    );
};

exports.default = CellLabel;