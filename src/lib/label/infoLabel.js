/**
 * Created by ljc on 2017/5/15 15:28.
 */
import React from 'react'

import styles from './infoLabel.scss'

import cnTool from 'classnames/bind'
const cn = cnTool.bind(styles)

/**
 * 信息标签
 * 1）提供label属性文本输入
 * 2）提供name属性文本输入
 * 3）提供style属性自定义样式
 * 4）提供className属性指定样式
 * 5）提供noneBorderBottom属性设置是否带下边框
 * @param {object} props {{
 * {string} label 标签 必需
 * {string} name 名字 非必需
 * {boolean} noneBorderBottom 下边框 非必需
 * {object} style 外部样式 非必需
 * {String} className 外部样式类名 非必需
 * }}
 * @returns {XML}
 */
const InfoLabel = (props) => {
    const noneBorderBottom = props.noneBorderBottom && styles['panel-bottom'];
    const _className = cn('panel', 'panel-align', noneBorderBottom, props.className);
    return (
        <div style={props.style} className={_className}>
            <span>{props.label} {props.name}</span>
        </div>
    )
}

export default InfoLabel;