'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _defPage = require('./defPage');

var _defPage2 = _interopRequireDefault(_defPage);

var _tag = require('pwfe-dom/tag');

var _tag2 = _interopRequireDefault(_tag);

var _imgPage = require('./imgPage.scss');

var _imgPage2 = _interopRequireDefault(_imgPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cn = _bind2.default.bind(_imgPage2.default);

/**
 * 携带背景图片的页面
 * 1）背景已经将图片实现分割。背景一共分4层(z-index:1~4)，从第一层到第三层都是背景图片。第四层是业务功能组件。
 * 2）通过children添加页面的组件或静态文本
 * 3）提供style参数修改样式
 * 4）提供className参数新增css样式
 * @param {object} props {
 *  {object} style 修改样式接口
 *  {string} className 修改css接口
 *  {string} name 页面的名称
 *  {Dom} children 子组件，页面之内的功能
 * }
 * @returns {XML}
 * @constructor
 */
/**
 * Created by chkui on 2017/5/12.
 */

var ImgPage = function ImgPage(props) {
    return _react2.default.createElement(
        _defPage2.default,
        { style: props.style, className: cn('img-page', props.className), name: props.name },
        _react2.default.createElement(
            'div',
            { className: cn('bg', 'left-bg') },
            _react2.default.createElement(_tag2.default.Icon, { src: 'pageBgLeft' })
        ),
        _react2.default.createElement(
            'div',
            { className: _imgPage2.default.bg + ' ' + _imgPage2.default['right-bg'] },
            _react2.default.createElement(_tag2.default.Icon, { src: 'pageBgRight' })
        ),
        _react2.default.createElement(
            'div',
            { className: _imgPage2.default.bg + ' ' + _imgPage2.default['bottom-bg'] },
            _react2.default.createElement(_tag2.default.Icon, { src: 'pageBgBottom' })
        ),
        _react2.default.createElement(
            'div',
            { className: _imgPage2.default.content },
            props.children
        )
    );
};

exports.default = ImgPage;