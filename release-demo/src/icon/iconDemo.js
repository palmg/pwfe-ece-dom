import React from 'react'
import Icon from '../../../icon'
import styles from './iconDemo.scss'

const IconDemo = () => 
    <section style={{marginTop: '20px'}}>
        <Li desc='UserHead 用户头像组件' comp={[
            <Icon.UserHead style={{width: '3.25rem'}} sex='male' onClick={() => alert(`啊，我被点击了`)} />,
            <Icon.UserHead style={{width: '3.25rem'}} sex='female' onClick={() => alert(`啊，我被点击了`)} />,
            <Icon.UserHead style={{width: '3.25rem'}} name='DIO' btn='show' onRemove={() => alert(`啊，我被删除了`)} />,
        ]} set={[
            {param: 'style', example: '{{width: "50px"}}', desc: '自定义样式', nec: 'false'},
            {param: 'className', example: 'user-icon', desc: '自定义CSS', nec: 'false'},
            {param: 'sex', example: 'male female', desc: '定义右下角的性别图标显示', nec: 'false'},
            {param: 'name', example: 'DIO', desc: '定义头像下方姓名，固定距离头像上部4px', nec: 'false'},
            {param: 'btn', example: 'show', desc: '是否显示右上角删除图标，固定#43905c深绿色，大小20px', nec: 'false'},
            {param: 'onClick()', example: '( ) => alert(`啊，我被点击了`)', desc: '点击头像的回调', nec: 'false'},
            {param: 'onRemove()', example: '( ) => alert(`啊，我被删除了`)', desc: '点击删除图标的回调用调', nec: 'false'},
        ]} /> 
        <Li desc='SolidIcon 实心标签组件' comp={[
            <Icon.SolidIcon text='家庭课' showIcon='true' color='#0099ff' />,
            <Icon.SolidIcon text='城市课' showIcon='true' color='#92d551' />,
            <Icon.SolidIcon text='实践课' color='#ccc' />,
        ]} set={[
            {param: 'style', example: '{{width: "50px"}}', desc: '自定义样式', nec: 'false'},
            {param: 'className', example: 'user-icon', desc: '自定义CSS', nec: 'false'},
            {param: 'text', example: '家庭课', desc: '定义文字内容', nec: 'true'},
            {param: 'color', example: '#0099ff', desc: '定义组件的背景色', nec: 'true'},
            {param: 'showIcon', example: 'true', desc: '定义是否显示对勾图标', nec: 'false'},
        ]} />
        <Li desc='HollowIcon 空心标签组件' comp={[
            <Icon.HollowIcon text='6-8岁' color='#0099ff' />,
            <Icon.HollowIcon text='芒果' color='#92d551' />,
            <Icon.HollowIcon text='127分' color='#fff' />,
        ]} set={[
            {param: 'style', example: '{{width: "50px"}}', desc: '自定义样式', nec: 'false'},
            {param: 'className', example: 'user-icon', desc: '自定义CSS', nec: 'false'},
            {param: 'text', example: '芒果', desc: '定义文字内容', nec: 'true'},
            {param: 'color', example: '#0099ff', desc: '定义组件的文字颜色和边框颜色', nec: 'true'},
        ]} />
        <Li desc='EllipseIcon 椭圆边框标签组件' comp={[
            <Icon.EllipseIcon text='6岁' color='#fff' bgColor='#0099ff' />,           
            <Icon.EllipseIcon text='#自然丛林' color='#fff' bgColor='#92d551' />,
            <Icon.EllipseIcon text='#自然丛林' color='#aaa' bgColor='#fff' />,
        ]} set={[
            {param: 'style', example: '{{width: "50px"}}', desc: '自定义样式', nec: 'false'},
            {param: 'className', example: 'user-icon', desc: '自定义CSS', nec: 'false'},
            {param: 'text', example: '芒果', desc: '定义文字内容', nec: 'true'},
            {param: 'color', example: '#fff', desc: '定义组件的文字颜色', nec: 'true'},
            {param: 'bgColor', example: '#0099ff', desc: '定义组件的背景颜色', nec: 'true'},
        ]} />
        <Li desc='HllipseIcon 椭圆边框标签组件' comp={[
            <Icon.HllipseIcon text='课很棒' color='#0099ff' />,           
            <Icon.HllipseIcon text='孩子锻炼了' color='#ddd' />,
            <Icon.HllipseIcon text='有特色' color='#43905c' />,
        ]} set={[
            {param: 'style', example: '{{width: "50px"}}', desc: '自定义样式', nec: 'false'},
            {param: 'className', example: 'user-icon', desc: '自定义CSS', nec: 'false'},
            {param: 'text', example: '芒果', desc: '定义文字内容', nec: 'true'},
            {param: 'color', example: '#fff', desc: '定义组件的文字颜色及边框颜色', nec: 'true'},
        ]} />
        <Li desc='StatusIcon 椭圆带图标标签组件' comp={[
            <Icon.StatusIcon text='报名成功' color='#0099ff' status='true' />,
            <Icon.StatusIcon text='报名成功' color='#92d551' status='true' />,
            <Icon.StatusIcon text='报名取消' color='#ccc' />,
            <Icon.StatusIcon text='报名取消' color='red' />,
        ]} set={[
            {param: 'style', example: '{{width: "50px"}}', desc: '自定义样式', nec: 'false'},
            {param: 'className', example: 'user-icon', desc: '自定义CSS', nec: 'false'},
            {param: 'text', example: '报名成功', desc: '定义文字内容', nec: 'true'},
            {param: 'color', example: '#fff', desc: '定义组件的背景颜色', nec: 'true'},
            {param: 'status', example: 'true', desc: '定义前方图标显示内容，true为对勾，不传或者false为叉', nec: 'false'},
        ]} />
        <Li desc='LesStatus 课程状态组件' comp={[
            <Icon.LesStatus status='complete' />,
            <Icon.LesStatus status='noStart' />,
            <Icon.LesStatus status='overdue' />,
            <Icon.LesStatus status='full' />,
            <Icon.LesStatus status='end' />,
        ]} set={[
            {param: 'style', example: '{{width: "50px"}}', desc: '自定义样式', nec: 'false'},
            {param: 'className', example: 'user-icon', desc: '自定义CSS', nec: 'false'},
            {param: 'status', example: 'complete', desc: '课程状态（complete：完成、noStart：未开始、overdue：过期、full：满员、end：结束）', nec: 'true'},
        ]} />
        <Li desc='CornerIcon 边角浮标组件' comp={[
            <div style={{width: '150px', height: '200px', backgroundColor: '#ccc', position: 'relative'}}>
                <Icon.CornerIcon text='1'  bgColor='#0099ff' length='2rem' position='l-t' />
            </div>,
            <div style={{width: '150px', height: '200px', backgroundColor: '#ccc', position: 'relative'}}>
                <Icon.CornerIcon text='12' bgColor='#92d551' length='2rem' position='r-t' />
            </div>,
            <div style={{width: '150px', height: '200px', backgroundColor: '#ccc', position: 'relative'}}>
                <Icon.CornerIcon text='12' bgColor='red' length='2rem' position='l-b' />
            </div>,
            <div style={{width: '150px', height: '200px', backgroundColor: '#ccc', position: 'relative'}}>
                <Icon.CornerIcon text='12' bgColor='#43905c' length='2rem' tLength='2' />
            </div>,
        ]} set={[
            {param: 'className', example: 'user-icon', desc: '自定义CSS', nec: 'false'},
            {param: 'text', example: '12', desc: '文字内容', nec: 'false'},
            {param: 'bgColor', example: '#0099ff', desc: '定义背景颜色', nec: 'true'},
            {param: 'length', example: '2rem', desc: '定义图标大小的边长，必须以rem为单位', nec: 'true'},
            {param: 'position', example: 'l-b', desc: '所在位置，不传则默认在右下角（左上：l-t、左下： l-b、右上： r-t、右下： r-b）', nec: 'false'},
        ]} />
    </section>

export const Api = props => {
    const trList = props.params && props.params.map((param, index) => <Tr key={index} {...param}/>)
    return (
        <table className='api-table'>
            <thead>
            <tr>
                <th>参数名</th>
                <th>传值示例</th>
                <th>说明</th>
                <th>是否必加</th>
            </tr>
            </thead>
            <tbody>{trList}</tbody>
        </table>
    )
}

export const Tr = props => 
    <tr>
        <th>{props.param}</th>
        <td>{props.example}</td>
        <td>{props.desc}</td>
        <td>{props.nec}</td>
    </tr>

export const Li = props => {
    const itemList = props.comp.map((item, index) => 
        <span key={index}>{item}</span> 
    )
    return (
        <div className={styles['box']}>
            <p className={styles['desc']}>{props.desc}</p>
            { itemList }
            { props.set && <Api params={props.set} /> }
        </div>
    )
}


export default IconDemo