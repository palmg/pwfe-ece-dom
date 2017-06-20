/**
 * Created by luodh on 2017/5/16.
 * 输入控件
 */

import React from 'react'

import Input from '../../../src/input'
import styles from './inputDemo.scss'

const InputDemo = (props) => {

    let searchList = "123123123";
    return (
        <div className={styles["demo"]}>
            <h2>下拉框</h2>
            <Input.Select value={1} options={[{value: "1", text: "基础下拉框"}, {value: "2", text: "深圳"}]}
                          onChange={(oldVal, newVal) => {
                              console.log(oldVal, newVal)
                          }}/>
            <Input.Select sType="round" value={1} options={[{value: "1", text: "圆角的下拉框"}, {value: "2", text: "深圳"}]}
                          onChange={(oldVal, newVal) => {
                              console.log(oldVal, newVal)
                          }}/>
            <Input.Select style={{width: "300px"}} sType="simple" value={2}
                          options={[{value: "1", text: "简洁的下拉框"}, {value: "2", text: "深圳"}]}
                          onChange={(oldVal, newVal) => {
                              console.log(oldVal, newVal)
                          }}/>
            <div></div>
            <Api params={[
                {param: "sType", desc: "预设样式 round圆角/simple圆角无下拉箭头", type: "string"},
                {param: "style", desc: "控件样式", type: "object"},
                {param: "className", desc: "新增css样式", type: "string"},
                {param: "value", desc: "默认值", type: "string"},
                {param: "onChange", desc: "回调 (oldVal={value,text},newVal={value,text})=>{}", type: "function"},
            ]} />

            <h2>数值调节控件</h2>
            <Input.NumAdjust value={0} max={10} min={1} editable={1} onChange={(num) => {
                console.log(num)
            }}/>
            <Api params={[
                {param: "style", desc: "控件样式", type: "object"},
                {param: "className", desc: "新增css样式", type: "string"},
                {param: "editable", desc: "是否可键盘输入", type: "boolean"},
                {param: "min", desc: "最小值", type: "number"},
                {param: "max", desc: "最大值", type: "number"},
                {param: "value", desc: "默认值", type: "string"},
                {param: "onChange", desc: "回调 (num)=>{}", type: "function"},
            ]} />

            <h2>输入框</h2>
            <Input.TextBox value="基础输入框" onChange={(val) => {
                console.log(val);
            }}/>
            <Input.TextBox value="下划线输入框" sType="underline" onChange={(val) => {
                console.log(val);
            }}/>
            <Input.TextBox placeholder="自定义输入限制" reg={/[^0-3]/g} onChange={(val) => {
                console.log(val);
            }}/>
            <Input.TextBox placeholder="请输入汉字和数字..." inType="name" sType="underline" onChange={(val) => {
                console.log(val);
            }}/>
            <Input.PhoneInput placeholder="请输入手机号码" onChange={(val, isPhone) => {
                console.log(val, isPhone);
            }}/>
            <Input.TextBox placeholder="密码" type="password" onChange={(val) => {
                console.log(val);
            }}/>

            <Api params={[
                {param: "原生input控件的属性", desc: "属性会直接传入input标签", type: "object"},
                {param: "type", desc: "除原生input标签的type外,增加textarea", type: "string"},
                {param: "inType", desc: "预设的输入字符限制 name允许中文字和数字/number允许数字和点(.)。如需扩展请使用reg", type: "string"},
                {param: "reg", desc: "自定义过滤正则", type: "regexp"},
                {param: "style", desc: "控件样式", type: "object"},
                {param: "className", desc: "新增css样式", type: "string"},
                {param: "sType", desc: "预设的样式 underline灰色下划线", type: "string"},
                {param: "fullWidth", desc: "是否全屏宽", type: "boolean"},
                {param: "value", desc: "默认值", type: "string"},
                {param: "onChange", desc: "回调 (val)=>{}", type: "function"},
            ]} />

            <h2>搜索输入框</h2>
            {/*用form标签包裹可使移动端键盘上显示"搜索"按钮*/}
            <form action="" onSubmit={(e)=>{e.preventDefault()}}>
                <Input.SearchInput value="搜索输入框" list={<div style={{background: "#ccc"}}><span>钱堂丽 女</span></div>}
                                   onChange={(val) => {}} onSearch={(val) => {alert("点击搜索按钮,值: "+val)}}/>
            </form>
            <Api params={[
                {param: "同上", desc: "同上", type: ""},
                {param: "list", desc: "搜索结果列表", type: "dom"},
                {param: "onSearch", desc: "点击按钮或按\"回车键\"时回调", type: "function"},
            ]} />
        </div>
    )
};

export const Api = (props) => {
    const trList = props.params.map((param,index) => {
        return <Tr key={index} {...param}/>
    });
    return (
        <table className="api-table" style={{width: props.width}}>
            <thead>
            <tr>
                <th>参数</th>
                <th>说明</th>
                <th>类型</th>
            </tr>
            </thead>
            <tbody>{trList}</tbody>
        </table>
    )
};

const Tr = (props) => {
    return (
        <tr>
            <th>{props.param}</th>
            <td>{props.desc}</td>
            <td>{props.type}</td>
        </tr>
    )
};

export default InputDemo
