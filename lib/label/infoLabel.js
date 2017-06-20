'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _infoLabel = require('./infoLabel.scss');

var _infoLabel2 = _interopRequireDefault(_infoLabel);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cn = _bind2.default.bind(_infoLabel2.default);

/**
 * 信息标签
 * 1）提供label属性文本输入
 * 2）提供name属性文本输入
 * 3）提供style属性自定义样式
 * 4）提供className属性指定样式
 * 5）提供noneBorderBottom属性设置是否带下边框
 * @param {object} props {{
 * {string} label 标签 必需
 * {string} name 名字 非必需
 * {boolean} noneBorderBottom 下边框 非必需
 * {object} style 外部样式 非必需
 * {String} className 外部样式类名 非必需
 * }}
 * @returns {XML}
 */
/**
 * Created by ljc on 2017/5/15 15:28.
 */
var InfoLabel = function InfoLabel(props) {
    var noneBorderBottom = props.noneBorderBottom && _infoLabel2.default['panel-bottom'];
    var _className = cn('panel', 'panel-align', noneBorderBottom, props.className);
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

exports.default = InfoLabel;