'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwiperItem = exports.BaseSwiper = undefined;

var _baseSwiper = require('./lib/swiper/baseSwiper');

var _baseSwiper2 = _interopRequireDefault(_baseSwiper);

var _baseSwiperItem = require('./lib/swiper/baseSwiperItem');

var _baseSwiperItem2 = _interopRequireDefault(_baseSwiperItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by ljc on 2017/5/16 15:45.
 */
var Swiper = {
  /**
   *基础滑块视图容器(所有的滑块项均需要由BaseSwiper组件包装)
   */
  BaseSwiper: _baseSwiper2.default,

  /**
   * 滑块项，仅可放置在<BaseSwiper/>(所有放置于BaseSwiperItem放的外部组件均可左右滑动滚屏)
   * 1)提供className属性指定样式
   */
  SwiperItem: _baseSwiperItem2.default

};

exports.BaseSwiper = _baseSwiper2.default;
exports.SwiperItem = _baseSwiperItem2.default;
exports.default = Swiper;