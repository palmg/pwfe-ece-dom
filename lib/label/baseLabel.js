'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _baseLabel = require('./baseLabel.scss');

var _baseLabel2 = _interopRequireDefault(_baseLabel);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cn = _bind2.default.bind(_baseLabel2.default);

/**
 * 基础标签
 * 1）提供label属性文本输入
 * 2）提供name属性文本输入
 * 3）提供style属性自定义样式
 * 4）提供className属性指定样式
 * 5）提供icon属性指定图标，这里使用的是站外图片
 * 6）提供noneBorderBottom属性设置是否带下边框
 * @param {object} props {{
 * {string} label 标签 必需
 * {string} name 名字 必需
 * {string} icon 站外图标 非必需
 * {boolean} noneBorderBottom 下边框 非必需
 * {object} style 外部样式 非必需
 * {String} className 外部样式类名 非必需
 * }}
 * @returns {XML}
 */
/**
 * Created by ljc on 2017/5/15 13:42.
 */
var BaseLabel = function BaseLabel(props) {
    var noneBorderBottom = props.noneBorderBottom && _baseLabel2.default['panel-bottom'];
    var _className = cn('panel', 'panel-align', noneBorderBottom, props.className);
    return _react2.default.createElement(
        'div',
        { style: props.style, className: _className },
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'span',
                null,
                props.label
            )
        ),
        _react2.default.createElement(
            'div',
            null,
            props.icon && _react2.default.createElement('img', { src: props.icon }),
            _react2.default.createElement(
                'span',
                null,
                props.name
            )
        )
    );
};

exports.default = BaseLabel;