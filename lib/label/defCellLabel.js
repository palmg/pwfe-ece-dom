'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _defCellLabel = require('./defCellLabel.scss');

var _defCellLabel2 = _interopRequireDefault(_defCellLabel);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cn = _bind2.default.bind(_defCellLabel2.default);

/**
 * 默认Cell标签，用于包装基础Cell组件
 * @param props {{
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
 * @constructor
 */
/**
 * Created by ljc on 2017/5/16 10:35.
 */
var DefCelLabel = function DefCelLabel(props) {
    var noneMarginBottom = props.noneMarginBottom && 'margin-bottom';
    var noneBorderBottom = props.noneBorderBottom && 'border-bottom';
    var _className = cn('panel', 'align', noneMarginBottom, noneBorderBottom, props.className);

    return _react2.default.createElement(
        'div',
        { style: props.style, className: _className, onClick: props.onClick },
        props.children
    );
};

exports.default = DefCelLabel;