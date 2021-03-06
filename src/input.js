/**
 * Created by luodh on 2017/5/16.
 */

import Select from './lib/input/select'
import NumAdjust from './lib/input/numAdjust'
import TextBox, {PhoneInput,SearchInput} from './lib/input/textBox'

const Input = {
    /**
     * 下拉框。
     * 1）默认白底黑字绿边框,右方绿色下拉箭头
     * 2）通过sType参数使用预设样式 round圆角/simple圆角无下拉箭头
     * 4）提供style参数修改样式
     * 5）提供className参数新增css样式
     * 5）通过options设置候选项 [{value,text}]
     * 6）提供onChange回调 (oldVal={value,text},newVal={value,text})=>{}
     */
    Select,
    /**
     * 数值调节器。
     * 1）value 当前数值{number}
     * 2）editable 是否可编辑
     * 3）min 最小值
     * 4）max 最大值
     * 5）style 对应的样式
     * 6）className: css名称
     * 7）onChange:点击时的回调方法 (num)=>{}
     */
    NumAdjust,
    /**
     * 基础按钮
     * @param {object} props {{
     *  扩展原生input控件的属性
     *  {string} type: 同input的type, 额外提供textbox
     *  {string} inType: 预设的输入过滤 name中文字和数字/number数字和点.
     *  {Regexp} reg: 自定义过滤正则
     *  {string} style 对应的样式
     *  {string} className: css名称
     *  {string} sType: 预设的样式   underline灰色下划线
     *  {boolean} fullWidth: 是否全屏宽
     *  {boolean} value: 初始值
     *  {function} onChange:点击时的回调方法 (val)=>{}
     * }}
     */
    TextBox,
    /**
     * 手机号码输入框
     * @param props
     * 参数同TextBox
     * {function} onChange:点击时的回调方法 (val,isPhone)=>{}
     * @returns {XML}
     * @constructor
     */
    PhoneInput,
    /**
     * 搜索输入框
     * @param props
     *  参数同TextBox
     * {function} onSearch:点击按钮or按"回车键"时的回调方法 (val)=>{}
     * {array} list 搜索结果列表dom
     * @returns {XML}
     * @constructor
     */
    SearchInput
};

export {Select, NumAdjust, TextBox, PhoneInput,SearchInput}
export default Input
