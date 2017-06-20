'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LesStatus = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tag = require('pwfe-dom/tag');

var _tag2 = _interopRequireDefault(_tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 课程状态组件：
 * @param {object} props {{
 *  {object} style: 自定义图片样式
 *  {string} className： 修改css接口
 *  {string} status: 课程状态（share: 待分享、complete：课程完成、coming：未开始、overdue：课程结束）
 * }}
 */
/**
 * Created by dio on 2017/5/16.
 */

var LesStatus = exports.LesStatus = function LesStatus(props) {
    switch (props.status) {
        case 'share':
            return _react2.default.createElement(_tag2.default.Icon, { style: props.style, src: 'lessonLock', className: props.className });
        case 'complete':
            return _react2.default.createElement(_tag2.default.Icon, { style: props.style, src: 'lessonComplete', className: props.className });
        case 'coming':
            return _react2.default.createElement(_tag2.default.Icon, { style: props.style, src: 'lessonComing', className: props.className });
        case 'expire':
            return _react2.default.createElement(_tag2.default.Icon, { style: props.style, src: 'lessonExpire', className: props.className });
        case 'full':
            return _react2.default.createElement(_tag2.default.Icon, { style: props.style, src: 'lessonFull', className: props.className });
        case 'end':
            return _react2.default.createElement(_tag2.default.Icon, { style: props.style, src: 'lessonEnd', className: props.className });
        default:
            return _react2.default.createElement(_tag2.default.Icon, { style: props.style, className: props.className });
    }
};