'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlideList = undefined;

var _slideList = require('./lib/slide/slideList');

var Slide = {

  /**
   * 轮播组件：
   * @param {object} props {{
   *  {object} set: 组件配置，不传则启用默认配置参数
   *  {array} img: 传递的图片及描述[{alt: '图片名称', src: '图片路径', url: '图片跳转'}]
   * }}
   */
  SlideList: _slideList.SlideList

}; /**
    * Created by dio on 2017/5/23.
    */

exports.SlideList = _slideList.SlideList;
exports.default = Slide;