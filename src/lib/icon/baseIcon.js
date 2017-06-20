/**
 * Created by dio on 2017/5/15.
 */

import React from 'react'
import cnTool from 'classnames/bind'
import Tag from 'pwfe-dom/tag'
const cx = cnTool.bind(require("./baseIcon.scss"))

/**
 * 通用标签框：
 * @param {object} props {{
 *  {object} style: 自定义图标框样式
 *  {boolean} showIcon: 是否显示对勾图标
 *  {boolean} transparent: 是否为透明边框
 *  {string} className： 修改css接口
 *  {string} text: 标签内容
 * }}
 */
export const BaseIcon = props => {

    let cn = cx({
        'base-icon': true,
        [props.className ? props.className : '']: true
    })

    const onClick = () => {
        props.onClick && props.onClick()
    }

    return (
        <div style={props.style} className={cn} onClick={onClick}>
            { props.showIcon && <Tag.Icon className={cx('yes')} src='yesIcon' /> }
            { props.showStatus && <div className={cx('status-icon')}>{props.comp}</div>}
            { props.text }
        </div>
    )
}
    

/**
 * 实心标签框：
 * @param {object} props {{
 *  {object} style: 自定义图标框样式
 *  {string} className： 修改css接口
 *  {string} text: 标签内容
 *  {string} color: 图标背景色
 *  {boolean} showIcon: 是否显示对勾图标
 * }}
 */
export const SolidIcon = props => {

    const style = Object.assign({backgroundColor: props.color}, props.style)

    return (
        <BaseIcon text={props.text} className={props.className} showIcon={props.showIcon} style={style} />
    )
}
    


/**
 * 透明标签框：
 * @param {object} props {{
 *  {object} style: 自定义图标框样式
 *  {string} className： 修改css接口
 *  {string} text: 标签内容
 *  {string} color: 透明框色彩
 * }}
 */
export const HollowIcon = props => {

    let cn = cx({
        'transparent': true,
        [props.className ? props.className : '']: true
    })

    const style = Object.assign({borderColor: props.color,color: props.color}, props.style)

    return (
        <BaseIcon text={props.text} className={cn} style={style} />
    )
}
    

/**
 * 椭圆标签框：
 * @param {object} props {{
 *  {object} style: 自定义图标框样式
 *  {string} className： 修改css接口
 *  {string} text: 标签内容
 *  {string} color: 文字颜色
 *  {string} bgColor: 背景色
 * }}
 */
export const EllipseIcon = props => {

    const style = Object.assign({backgroundColor: props.bgColor, color: props.color, borderRadius: '10px / 10px'}, props.style)

    return (
        <BaseIcon text={props.text} className={props.className} style={style} onClick={props.onClick} />
    )
}   

/**
 * 椭圆带边框标签框：
 * @param {object} props {{
 *  {object} style: 自定义图标框样式
 *  {string} className： 修改css接口
 *  {string} text: 标签内容
 *  {string} color: 文字颜色及边框颜色
 * }}
 */  
export const HllipseIcon = props => {

    const style = Object.assign({borderColor: props.color, color: props.color, }, props.style)

    let cn = cx({
        'hllipse-btn': true,
        [props.className ? props.className : '']: true
    })

    return (
        <BaseIcon text={props.text} className={cn} style={style} />
    )

}

/**
 * 椭圆带图标标签框：
 * @param {object} props {{
 *  {object} style: 自定义图标框样式
 *  {string} className： 修改css接口
 *  {string} text: 标签内容
 *  {string} color: 背景色
 *  {boolean} status: 状态（true为对勾，false为 X，不传则默认为 X）
 * }}
 */
export const StatusIcon = props => {

    const { className, status, color, text } = props

    const style = Object.assign({backgroundColor: color}, props.style)

    let cn = cx({
        'status-btn': true,
        [className ? className : '']: true
    })

    let comp = status ? <div className={cx('status-yes')} style={{borderLeftColor: color, borderBottomColor: color}}></div>
                      : <div className={cx('status-no')} style={{backgroundColor: color}}>
                            <span style={{backgroundColor: color}} />
                        </div>

    return (
        <BaseIcon text={text} className={cn} showStatus='true' comp={comp} style={style} />
    )
}
    