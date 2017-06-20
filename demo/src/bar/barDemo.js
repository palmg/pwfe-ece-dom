import React from 'react'
import Bar from '../../../src/bar'
import { Li, Api, Tr } from '../icon/iconDemo'
import styles from './barDemo.scss'

const tabConfig = [{name: '4月23日',id: '123' },{name: '4月24日', id: '1234'},
                   {name: '4月25日', id: '1236'},{name: '4月26日', id: '1237'}]

const tabConfig2 = [{name: '4月23日',id: '123' },{name: '4月24日', id: '1234'},
                    {name: '4月25日', id: '1236'},{name: '4月26日', id: '1237'},
                    {name: '4月27日', id: '1236'}]

const slideConfig = [{name: '4月23日',id: '123' },{name: '4月24日', id: '1234'},
                     {name: '4月25日', id: '1236'},{name: '4月26日', id: '1237'},
                     {name: '4月27日', id: '1236'},{name: '4月28日', id: '1237'},
                     {name: '4月29日', id: '1236'},{name: '4月30日', id: '1237'},
                     {name: '5月1日', id: '1236'},{name: '5月2日', id: '1237'},]

const iconConfig = [{name: '未开始', id: 'notbegin', count: 8},{name: '进行中', id: 'ongoing', count: 2},
                    {name: '已结束', id: 'isover', count: 21},{name: '已评价', id: 'evaluate', count: 0}]

const BarDemo = () => 
    <section style={{marginTop: '20px'}}>
        <Li desc='CloverMark 评分显示组件（四叶草）' comp={[
            <Bar.CloverMark height='1rem' point={'3.5'} />,
        ]} set={[
            {param: 'height', example: '1rem', desc: '定义图标高度', nec: 'true'},
            {param: 'point', example: '1.5', desc: '传递进一个分数，不传为0', nec: 'false'},
            {param: 'margin', example: '.4rem', desc: '定义图标之间的间距，默认为左右间距.2rem', nec: 'false'},
        ]} /> 
        <Li desc='StarRMark 评分显示组件（圆角星星）' comp={[
            <Bar.StarRMark height='1.5rem' point={3.4} margin='.3rem' />,
        ]} set={[
            {param: 'height', example: '1.5rem', desc: '定义图标高度', nec: 'true'},
            {param: 'point', example: '3.4', desc: '传递进一个分数，不传为0', nec: 'false'},
            {param: 'margin', example: '.4rem', desc: '定义图标之间的间距，默认为左右间距.2rem', nec: 'false'},
        ]} /> 
        <Li desc='StarTMark 评分显示组件（锐角星星）' comp={[
            <Bar.StarTMark height='1.5rem' point={4.6} margin='.4rem' />,
        ]} set={[
            {param: 'height', example: '1.5rem', desc: '定义图标高度', nec: 'true'},
            {param: 'point', example: '4.6', desc: '传递进一个分数，不传为0', nec: 'false'},
            {param: 'margin', example: '.4rem', desc: '定义图标之间的间距，默认为左右间距.2rem', nec: 'false'},
        ]} /> 
        <Li desc='MarkClick 评分组件（圆角星星）' comp={[
            <Bar.MarkClick onClick={(i) => {alert(`获得了${i}星评价`)}} />,
        ]} set={[
            {param: 'style', example: '{{width: "50px"}}', desc: '自定义样式', nec: 'false'},
            {param: 'className', example: 'user-icon', desc: '自定义CSS', nec: 'false'},
            {param: 'height', example: '1.5rem', desc: '图标大小，默认1.5rem', nec: 'false'},
            {param: 'margin', example: '.2rem', desc: '图标间距，默认.2rem', nec: 'false'},
            {param: 'src', example: 'mango.png', desc: '定义图标（建议使用实心图案，默认为圆角星星图标）', nec: 'false'},
            {param: 'onClick()', example: '(i) => {alert(`获得了${i}星评价`)', desc: '点击图标的回调', nec: 'true'},
        ]} /> 
        <Li desc='TabBar 选项卡 (元素平铺)' comp={[
            <Bar.TabBar config={tabConfig} onClick={(i) => {console.log(`选择了${i}`)}} />,
            <Bar.TabBar config={tabConfig2} onClick={(i) => {console.log(`选择了${i}`)}} />
        ]} set={[
            {param: 'config', example: '[{name: `4月23日`, id: `123`}, {name: `4月24日`, id: `456`}]', desc: '定义选项卡的配置', nec: 'true'},
            {param: 'onClick()', example: '(i) => {console.log(`选择了${i}`)', desc: '切换选项卡的回调', nec: 'true'},
        ]} /> 
        <Li desc='TabIcon 选项卡2 (元素平铺)' comp={[
            <Bar.TabIcon config={iconConfig} onClick={(i) => {console.log(`选择了${i}`)}} />
        ]} set={[
            {param: 'config', example: '[{name: `未开始`, id: `notbegin`, count: 8},{name: `进行中`, id: `ongoing`, count: 2}]', 
             desc: '定义选项卡的配置，数字大于9显示为...为0不显示', nec: 'true'},
            {param: 'onClick()', example: '(i) => {console.log(`选择了${i}`)', desc: '切换选项卡的回调', nec: 'true'},
        ]} /> 
        <Li desc='TabSlide 选项卡 (左右滑动)' comp={[
            <Bar.TabSlide config={slideConfig} onClick={(i) => {console.log(`选择了${i}`)}} />
        ]} set={[
            {param: 'config', example: '[{name: `4月23日`, id: `123`}, {name: `4月24日`, id: `456`}]', desc: '定义选项卡的配置', nec: 'true'},
            {param: 'onClick()', example: '(i) => {console.log(`选择了${i}`)', desc: '切换选项卡的回调', nec: 'true'},
        ]} /> 
    </section>

export default BarDemo