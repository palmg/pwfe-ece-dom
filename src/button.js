/**
 * Created by chkui on 2017/5/12.
 */

import BaseBtn from './lib/button/button'
import IconBtn from './lib/button/iconButton'
import RadioBtn from './lib/button/radioButton'
import DateBtn from './lib/button/dateButton'

const Button = {
    /**
     * 基础按钮。
     * 1）默认白底绿字
     * 2）通过sType参数使用预设样式 green绿地白字/gray白底灰字
     * 3）通过children添加按钮内的组件或静态文本
     * 4）提供style参数修改样式
     * 5）提供className参数新增css样式
     * 6）提供onClick事件
     * 7）提供fullWidth参数设置100%宽度
     */
    BaseBtn,
    /**
     * 带图标的按钮。
     * 1）扩展BaseBtn的参数
     * 2）提供icon参数设置图标
     * 3）提供column参数设置是否竖向排列
     * 3）提供iconStyle参数 设置图标的style
     */
    IconBtn,
    /**
     * 单选按钮组。
     * 1）通过buttonList设置候选项[{id,name,isActive}]
     * 2）{boolean}  canBeNull 是否可以为空值. 若false且没有选中项, 则选中第一个
     * 3）提供style参数修改样式
     * 4）提供className参数新增css样式
     * 5）提供onClick回调函数(id,name,event)=>{}
     */
    RadioBtn,
    /**
     * 日期选择按钮。
     * 1）通过value设置值
     * 3）提供style参数修改样式
     * 4）提供className参数新增css样式
     * 4）提供fullWidth参数设置是否全屏宽
     * 5）提供onChange回调函数(data)=>{} 格式:"2017-05-05"
     */
    DateBtn
};

export {BaseBtn, IconBtn, RadioBtn}
export default Button
