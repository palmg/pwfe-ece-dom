/**
 * Created by dio on 2017/5/16.
 */

import { StarRMark, StarTMark, CloverMark } from './lib/bar/markShow'
import { MarkClick } from './lib/bar/markClick'
import { TabBar } from './lib/bar/tabBar'
import { TabIcon } from './lib/bar/tabIcon'
import { TabSlide } from './lib/bar/tabSlide'

const Bar = {
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
    StarRMark,
    StarTMark,
    CloverMark,

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
    MarkClick,

    /**
     * 选项卡组件：
     * @param {object} props {{
     *  {array} config: 支持一个name和id对象组成的数组，name为显示内容，id为传递参数
     *  {function} onClick: 点击激活当前选项卡，同时回调返回点击选项卡的id
     * }}
     */
    TabBar,

    TabIcon,

    TabSlide,
}

export { StarRMark, StarTMark, CloverMark, MarkClick, TabBar, TabIcon, TabSlide }
export default Bar