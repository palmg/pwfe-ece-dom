'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _baseSwiperItem = require('./baseSwiperItem.scss');

var _baseSwiperItem2 = _interopRequireDefault(_baseSwiperItem);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cnBind = _bind2.default.bind(_baseSwiperItem2.default);

/**
 * 滑块项，仅可放置在<BaseSwiper/>(所有放置于BaseSwiperItem放的外部组件均可左右滑动滚屏)
 * @param {object} props {{
 * {String} className 外部样式类名 非必需
 * }}
 * @returns {XML}
 * @constructor
 */
/**
 * Created by ljc on 2017/5/16 15:43.
 */
var BaseSwiperItem = function BaseSwiperItem(props) {
  return _react2.default.createElement(
    'div',
    { className: cnBind('item', props.className) },
    props.children
  );
};

exports.default = BaseSwiperItem;