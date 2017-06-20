'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PullDown = exports.scrollBottom = undefined;

var _scrollBottom = require('./lib/scroll/scrollBottom');

var _pullDown = require('./lib/scroll/pullDown');

var _pullDown2 = _interopRequireDefault(_pullDown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by dio on 2017/5/19.
 */

var Scroll = {

  /**
   * 滚动到底部判断高阶组件：
   * @param {object} props {{
   *  {boolean} loading: 标识已拉到底部，触发加载更多
   *  {function} loaded: 标识新数据获取完毕，通知包装组件获取新的高度同时关闭到底部的标识
   * }}
   */
  scrollBottom: _scrollBottom.scrollBottom,
  /**
   * 下拉加载控件：
   * @param {object} props {{
   *  {boolean} loading: 是否加载中
   *  {boolean} isEnd: 是否全部加载完毕(禁用下拉加载)
   *  {function} onReload: 触发加载回调函数
   *  {dom} children: 内容
   *  {string} pullHint: 下拉提示
   *  {string} dropHint: 释放提示
   *  {string} loadingHint: 加载中提示
   * }}
   */
  PullDown: _pullDown2.default

};

exports.scrollBottom = _scrollBottom.scrollBottom;
exports.PullDown = _pullDown2.default;
exports.default = Scroll;