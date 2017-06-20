/**
 * Created by chkui on 2017/5/12.
 * 用于button演示的组件
 */

import React from 'react'

import Button from '../../../button'
import st from './buttonDemo.scss'
import {Api} from '../input/inputDemo'

const ButtonDemo = (props) => {
    return (
        <div className={st['demo']}>
            <h2>基础按钮</h2>
            <Button.BaseBtn onClick={(e) => alert('点击 Button.BaseBtn')}> 默认按钮 </Button.BaseBtn>
            <Button.BaseBtn sType="green"> 绿色按钮 </Button.BaseBtn>
            <Button.BaseBtn sType="gray"> 灰色按钮 </Button.BaseBtn>
            <Button.BaseBtn disabled> 禁用按钮 </Button.BaseBtn>
            <Button.BaseBtn className={st['custom-btn']} sType="gray"> 自定义class </Button.BaseBtn>
            <Button.BaseBtn style={{color: "red", borderColor: "red", fontSize: "18px"}} sType="gray">
                自定义style </Button.BaseBtn>
            <Button.BaseBtn fullWidth={true} sType="green"> 全宽按钮 </Button.BaseBtn>

            <Api params={[
                {param: "style", desc: "控件样式", type: "object"},
                {param: "className", desc: "新增css样式", type: "string"},
                {param: "sType", desc: "预设的样式 green绿地白字/gray白底灰字", type: "string"},
                {param: "fullWidth", desc: "是否全屏宽", type: "boolean"},
                {param: "children", desc: "按钮内的组件或静态文本", type: "dom"},
                {param: "onClick", desc: "回调 ()=>{}", type: "function"},
            ]}/>

            <h2>图标按钮</h2>
            <Button.IconBtn> 默认 </Button.IconBtn>
            <Button.IconBtn icon="replyGray"> 自定义图标 </Button.IconBtn>
            <Button.IconBtn column={true} icon="replyGray"> 竖向-自定义图标 </Button.IconBtn>
            <Button.IconBtn style={{border: "none", fontSize: "14px"}}
                            iconStyle={{width: "50px", height: "50px", marginBottom: "5px"}}
                            column={true}
                            icon="replyGray"> 竖向-自定义图标&样式&icon样式 </Button.IconBtn>

            <Api params={[
                {param: "基础参数", desc: "扩展BaseBtn的参数", type: "object"},
                {param: "icon", desc: "设置图标", type: "img"},
                {param: "iconStyle", desc: "图标的style", type: "object"},
                {param: "column", desc: "是否竖向排列", type: "boolean"},
            ]}/>
            <h2>单选按钮</h2>
            <Button.RadioBtn canBeNull={true} buttonList={[{id: "1", name: "男"}, {id: "2", name: "女", isActive: true}]}
                             onClick={(id, name) => {
                                 alert(`id:${id}  name:${name}`)
                             }}/>
            <Api params={[
                {param: "style", desc: "控件样式", type: "object"},
                {param: "className", desc: "新增css样式", type: "string"},
                {param: "buttonList", desc: "候选项[{id,name,isActive}]", type: "array"},
                {param: "canBeNull", desc: "可否为空, 为false且没有选中项时, 则自动选中第一项", type: "boolean"},
                {param: "onClick", desc: "回调函数(id,name,event)=>{}", type: "function"},
            ]}/>
            <h2>日期按钮</h2>
            <Button.DateBtn value="2017-05-05" onChange={(date) => {
                console.log(date)
            }}/>
            <Api params={[
                {param: "value", desc: "初始值 格式:2017-05-05", type: "string"},
                {param: "style", desc: "控件样式", type: "object"},
                {param: "className", desc: "新增css样式", type: "string"},
                {param: "onChange", desc: "回调函数(date)=>{} 格式:2017-05-05", type: "function"},
            ]}/>

        </div>
    )
};

export default ButtonDemo
