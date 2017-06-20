'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserHead = undefined;

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


var cx = _bind2.default.bind(require('./userHead.scss'));

/**
 * 用户头像组件：
 * @param {object} props {{
 *  {object} style: 自定义图标框样式
 *  {string} img: 用户头像url
 *  {string} className： 修改css接口
 *  {string} sex: 用户性别（男：male，女：female）
 *  {string} name: 用户姓名（不传递则不显示）
 *  {string} btn: 右上角删除图标（show为显示，不传不显示）
 *  {function} onClick: 点击头像的回调
 *  {function} onRemove: 点击删除图标的回调
 * }}
 */
var UserHead = exports.UserHead = function UserHead(props) {
    //TODO 如果这里重复被渲染会导致反复创建很多相同的方法，只有到用户不操作时才开始垃圾回收或内存泄漏
    var remove = function remove() {
        props.onRemove && props.onRemove();
    };

    var onclick = function onclick() {
        props.onClick && props.onClick();
    };

    var cn = cx(_defineProperty({
        'user-head-box': true
    }, props.className ? props.className : '', true));

    var style = props.style,
        img = props.img,
        sex = props.sex,
        name = props.name,
        btn = props.btn;


    return _react2.default.createElement(
        'div',
        { className: cn },
        _react2.default.createElement(
            'div',
            { className: cx('img-box'), style: style },
            img ? _react2.default.createElement(_tag2.default.Img, { className: cx('img'), src: img, onClick: onclick }) : _react2.default.createElement(_tag2.default.Icon, { className: cx('img'), src: 'defaultAvatar', onClick: onclick }),
            sex && (sex === 'male' ? _react2.default.createElement(_tag2.default.Icon, { className: cx('icon'), src: 'userMaleIcon' }) : _react2.default.createElement(_tag2.default.Icon, { className: cx('icon'), src: 'userFemaleIcon' })),
            btn && _react2.default.createElement('span', { className: cx('remove'), onClick: remove })
        ),
        name && _react2.default.createElement(
            'p',
            { className: cx('user-name') },
            name
        )
    );
};