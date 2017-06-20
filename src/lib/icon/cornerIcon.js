/**
 * Created by dio on 2017/5/16.
 */

import React from 'react'
import cnTool from 'classnames/bind'
const cx = cnTool.bind(require("./cornerIcon.scss"))

/**
 * 边角浮标组件：
 * 考虑到文字定位问题，结合实际需求考虑是否固定角标大小
 * @param {object} props {{
 *  {string} className：修改css接口
 *  {string} color: 文字颜色，默认白色
 *  {string} bgColor: 背景色彩
 *  {string} length: 边长
 *  {string} tLength: 边长去单位，用来对文字内容进行定位
 *  {string} text: 文字内容
 *  {string} position: 所在位置，默认右下角（左上：l-t、左下： l-b、右上： r-t、右下： r-b）
 * }}
 */
export const CornerIcon = props => {

    let position = props.position || 'r-b', 
        bgColor, textPosition, { length } = props,
        tLength = length.replace('rem', '')

    switch(position) {
        case 'l-t': 
            bgColor = { borderTopColor: props.bgColor }
            textPosition = { left: `${-.2*tLength}rem`, top: `${-.9*tLength}rem` }
        ;break
        case 'r-t': 
            bgColor = { borderTopColor: props.bgColor }
            textPosition = { right: `${-.15*tLength}rem`, top: `${-.9*tLength}rem` }
        ;break
        case 'l-b':
            bgColor = { borderBottomColor: props.bgColor }
            textPosition = { left: `${-.2*tLength}rem`, bottom: `${-.95*tLength}rem` }
        ;break
        case 'r-b':
            bgColor = { borderBottomColor: props.bgColor }
            textPosition = { right: `${-.15*tLength}rem`, bottom: `${-.95*tLength}rem` }
        ;break
    }

    const textStyle = Object.assign({width: props.length}, textPosition),
          style = Object.assign({color: props.color, borderWidth: props.length}, bgColor)

    let cn = cx({
        'corner-icon': true,
        [props.className ? props.className : '']: true,
        [position]: true
    })

    return (
        <div style={style} className={cn}>
            <p style={textStyle}>{props.text}</p>
        </div>
    )    

}
    

