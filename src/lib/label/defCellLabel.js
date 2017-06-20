/**
 * Created by ljc on 2017/5/16 10:35.
 */
import React from 'react'
import styles from './defCellLabel.scss'

import cnTool from 'classnames/bind'
const cn = cnTool.bind(styles)

/**
 * 默认Cell标签，用于包装基础Cell组件
 * @param props {{
 * {string} label 标签 必需
 * {string} name 名字 非必需
 * {boolean} noneMarginBottom 下边距 非必需
 * {boolean} noneBorderBottom 下边距 非必需
 * {boolean} noneNext 下探箭头 非必需
 * {object} style 外部样式 非必需
 * {String} className 外部样式类名 非必需
 * {function} onClick 设置点击事件 非必需
 * }}
 * @returns {XML}
 * @constructor
 */
const DefCelLabel = (props) => {
    const noneMarginBottom = props.noneMarginBottom && 'margin-bottom';
    const noneBorderBottom = props.noneBorderBottom && 'border-bottom';
    const _className = cn('panel', 'align', noneMarginBottom, noneBorderBottom, props.className);

    return (
        <div style={props.style} className={_className} onClick={props.onClick}>
            {props.children}
        </div>
    )
};

export default DefCelLabel