/**
 * Created by ljc on 2017/5/15 13:42.
 */
import React from 'react'

import styles from './textLabel.scss';

import cnTool from 'classnames/bind'
const cn = cnTool.bind(styles)

/**
 * 文本标签
 * 1）提供label属性文本输入
 * 2）提供name属性文本输入
 * 3）提供style属性自定义样式
 * 4）提供className属性指定样式
 * @param {object} props {{
 * {string} label 标签 必需
 * {string} name 名字 非必需
 * {object} style 外部样式 非必需
 * {String} className 外部样式类名 非必需
 * }}
 * @returns {XML}
 */
const cnBind = cnTool.bind(styles);

const TextLabel = (props) => {
    const _className = cn('panel', 'panel-align', props.className)
    return (
        <div style={props.style} className={_className}>
            <span>{props.label} {props.name}</span>
        </div>
    )
};

export default TextLabel;