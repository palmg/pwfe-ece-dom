/**
 * Created by ljc on 2017/5/15 13:48.
 */
import BaseLabel from './lib/label/baseLabel'
import InfoLabel from './lib/label/infoLabel'
import TextLabel from './lib/label/textLabel'
import CellLabel from './lib/label/cellLabel'

//TODO chkui 5-16 请在对应组件上怎能家注释写明功能。参看../page/index.js
/**
 * 标签相关
 * @type {{BaseLabel: ((p1:Object)), InfoLabel: ((p1:Object)), TextLabel: ((p1:Object)), BaseCellLabel: ((p1:Object))}}
 */
const Label = {
    /**
     * 基础标签
     * 1）提供label属性文本输入
     * 2）提供name属性文本输入
     * 3）提供style属性自定义样式
     * 4）提供className属性指定样式
     * 5）提供icon属性指定图标
     * 6）提供noneBorderBottom属性设置是否带下边框
     */
    BaseLabel: BaseLabel,
    /**
     * 信息标签
     * 1）提供label属性文本输入
     * 2）提供name属性文本输入
     * 3）提供style属性自定义样式
     * 4）提供className属性指定样式
     * 5）提供noneBorderBottom属性设置是否带下边框
     */
    InfoLabel: InfoLabel,
    /**
     * 文本标签
     * 1）提供label属性文本输入
     * 2）提供name属性文本输入
     * 3）提供style属性自定义样式
     * 4）提供className属性指定样式
     */
    TextLabel: TextLabel,
    /**
     * Cell标签
     * 1）提供label属性文本输入
     * 2）提供name属性文本输入
     * 3）提供style属性自定义样式
     * 4）提供className属性指定样式
     * 5）提供noneMarginBottom属性设置是否指定下边距
     * 6）提供noneBorderBottom属性设置是否带下边框
     * 7）提供onClick属性设置点击事件
     */
    CellLabel: CellLabel
}

export {BaseLabel, InfoLabel, TextLabel, CellLabel}
export default Label