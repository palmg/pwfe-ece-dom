'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CornerIcon = exports.LesStatus = exports.UserHead = exports.HllipseIcon = exports.EllipseIcon = exports.HollowIcon = exports.SolidIcon = undefined;

var _baseIcon = require('./lib/icon/baseIcon');

var _lesStatus = require('./lib/icon/lesStatus');

var _userHead = require('./lib/icon/userHead');

var _cornerIcon = require('./lib/icon/cornerIcon');

/**
 * Created by dio on 2017/5/16.
 */

var Icon = {
  /**
   * 实心标签框：
   * @param {object} props {{
   *  {string} className： 修改css接口
   *  {string} text: 标签内容
   *  {string} color: 图标背景色
   *  {boolean} showIcon: 是否显示对勾图标(不传则不显示)
   * }}
   */
  SolidIcon: _baseIcon.SolidIcon,

  /**
   * 透明标签框：
   * @param {object} props {{
   *  {string} className： 修改css接口
   *  {string} text: 标签内容
   *  {string} color: 透明框色彩
   * }}
   */
  HollowIcon: _baseIcon.HollowIcon,

  /**
   * 椭圆标签框：
   * @param {object} props {{
   *  {string} className： 修改css接口
   *  {string} text: 标签内容
   *  {string} color: 文字颜色
   *  {string} bgColor: 背景色
   * }}
   */
  EllipseIcon: _baseIcon.EllipseIcon,

  /**
   * 椭圆带边框标签框：
   * @param {object} props {{
   *  {object} style: 自定义图标框样式
   *  {string} className： 修改css接口
   *  {string} text: 标签内容
   *  {string} color: 文字颜色及边框颜色
   * }}
   */
  HllipseIcon: _baseIcon.HllipseIcon,

  /**
   * 椭圆带图标标签框：
   * @param {object} props {{
   *  {string} className： 修改css接口
   *  {string} text: 标签内容
   *  {string} color: 背景色
   *  {boolean} status: 状态（true为对勾，false为 X，不传则默认为 X）
   * }}
   */
  StatusIcon: _baseIcon.StatusIcon,

  /**
  * 课程状态组件：
  * @param {object} props {{
  *  {object} style: 自定义图片样式
  *  {string} className： 修改css接口
  *  {string} status: 课程状态（complete：课程完成、noStart：未开始、overdue：课程结束）
  * }}
  */
  LesStatus: _lesStatus.LesStatus,

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
  UserHead: _userHead.UserHead,

  /**
   * 边角浮标组件：
   * @param {object} props {{
   *  {string} className：修改css接口
   *  {string} color: 文字颜色，默认白色
   *  {string} bgColor: 背景色彩
   *  {string} length: 边长
   *  {string} text: 文字内容
   *  {string} position: 所在位置，默认右下角（左上：l-t、左下： l-b、右上： r-t、右下： r-b）
   * }}
   */
  CornerIcon: _cornerIcon.CornerIcon

};

exports.SolidIcon = _baseIcon.SolidIcon;
exports.HollowIcon = _baseIcon.HollowIcon;
exports.EllipseIcon = _baseIcon.EllipseIcon;
exports.HllipseIcon = _baseIcon.HllipseIcon;
exports.UserHead = _userHead.UserHead;
exports.LesStatus = _lesStatus.LesStatus;
exports.CornerIcon = _cornerIcon.CornerIcon;
exports.default = Icon;