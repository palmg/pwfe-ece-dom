'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TabSlide = exports.TabIcon = exports.TabBar = exports.MarkClick = exports.CloverMark = exports.StarTMark = exports.StarRMark = undefined;

var _markShow = require('./lib/bar/markShow');

var _markClick = require('./lib/bar/markClick');

var _tabBar = require('./lib/bar/tabBar');

var _tabIcon = require('./lib/bar/tabIcon');

var _tabSlide = require('./lib/bar/tabSlide');

var Bar = {
    /**
     * 通用分数显示组件：
     * StaRMark（圆角星星） StarTMark（锐角星星） CloverMark（四叶草）
     * @param {object} props {{
     *  {string} className： 修改css接口
     *  {string} height: 图标大小
     *  {string} margin: 图标间距（默认.2rem）
     *  {number} point: 分数
     * }}
     */
    StarRMark: _markShow.StarRMark,
    StarTMark: _markShow.StarTMark,
    CloverMark: _markShow.CloverMark,

    /**
     * 通用分数选择组件：
     * @param {object} props {{
     *  {object} style: 自定义样式
     *  {string} className： 修改css接口
     *  {string} height: 图标大小 (默认1.5rem)
     *  {string} margin: 图标间距（默认.2rem）
     *  {string} src: 选择分数图标（建议使用实心图案，默认为圆角星星图标）
     *  {function} onClick: 点击事件，回调一个选择的分数值
     * }}
     */
    MarkClick: _markClick.MarkClick,

    /**
     * 选项卡组件：
     * @param {object} props {{
     *  {array} config: 支持一个name和id对象组成的数组，name为显示内容，id为传递参数
     *  {function} onClick: 点击激活当前选项卡，同时回调返回点击选项卡的id
     * }}
     */
    TabBar: _tabBar.TabBar,

    TabIcon: _tabIcon.TabIcon,

    TabSlide: _tabSlide.TabSlide
}; /**
    * Created by dio on 2017/5/16.
    */

exports.StarRMark = _markShow.StarRMark;
exports.StarTMark = _markShow.StarTMark;
exports.CloverMark = _markShow.CloverMark;
exports.MarkClick = _markClick.MarkClick;
exports.TabBar = _tabBar.TabBar;
exports.TabIcon = _tabIcon.TabIcon;
exports.TabSlide = _tabSlide.TabSlide;
exports.default = Bar;