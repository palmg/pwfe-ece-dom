'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImgPage = exports.DefPage = undefined;

var _defPage = require('./lib/page/defPage');

var _defPage2 = _interopRequireDefault(_defPage);

var _imgPage = require('./lib/page/imgPage');

var _imgPage2 = _interopRequireDefault(_imgPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by chkui on 2017/5/12.
 */

var Page = {
  /**
   * 默认页面。
   * 1）背景颜色默认为#F2F2F2
   * 2）通过children添加页面的组件或静态文本
   * 3）提供style参数修改样式
   * 4）提供className参数新增css样式
   */
  DefPage: _defPage2.default,
  /**
   * 携带背景图片的页面
   * 1）背景已经将图片实现分割。背景一共分4层(z-index:1~4)，从第一层到第三层都是背景图片。第四层是业务功能组件。
   * 2）通过children添加页面的组件或静态文本
   * 3）提供style参数修改样式
   * 4）提供className参数新增css样式
   */
  ImgPage: _imgPage2.default //带着背景图标的页面
};

exports.DefPage = _defPage2.default;
exports.ImgPage = _imgPage2.default;
exports.default = Page;