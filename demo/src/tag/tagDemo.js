/**
 * Created by chkui on 2017/5/31.
 */

import React from 'react'
import { Li, Api, Tr } from '../icon/iconDemo'
import Tag from 'pwfe-dom/tag'

const TagDemo = () =>
    <section style={{marginTop: '20px'}}>
        <Li desc='Tag.Img 图片组件' comp={[
            <Tag.Img src="http://file.mahoooo.com/res/file/2017050231523367SB9I705AR4JQX6MNL2936714A75DCEFFA1F4A0B56F353DFB02335" width="100" height="100"/>
        ]} set={[
            {param: 'all attribute', example: '<Img className={cn("my-img")} style={{width:2rem;}} width="200"/>', desc: '支持img标签所有源生属性', nec: 'false'},
            {param: 'all event', example: '<Img onClick={myfunc}/>', desc: '支持img标签所有源生事件', nec: 'false'}
        ]} />
        <Li desc='Tag.Icon 站内图标组件' comp={[
            <Tag.Icon src="logo"/>
        ]} set={[
            {param: 'src', example: 'alt="logo"', desc: '图标路径，这里必须指向有res下定义的资源文件路径', nec: 'true'},
            {param: 'all attribute', example: '<Icon className={cn("my-img")} style={{width:2rem;}} width="200"/>', desc: '支持img标签所有源生属性', nec: 'false'},
            {param: 'all event', example: '<Icon onClick={myfunc}/>', desc: '支持img标签所有源生事件', nec: 'false'}
        ]} />
    </section>
export default TagDemo