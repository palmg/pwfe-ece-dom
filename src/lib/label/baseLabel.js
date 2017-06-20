/**
 * Created by ljc on 2017/5/15 13:42.
 */
import React from 'react'
import styles from './baseLabel.scss';

import cnTool from 'classnames/bind'
const cn = cnTool.bind(styles)

/**
 * 基础标签
 * 1）提供label属性文本输入
 * 2）提供name属性文本输入
 * 3）提供style属性自定义样式
 * 4）提供className属性指定样式
 * 5）提供icon属性指定图标，这里使用的是站外图片
 * 6）提供noneBorderBottom属性设置是否带下边框
 * @param {object} props {{
 * {string} label 标签 必需
 * {string} name 名字 必需
 * {string} icon 站外图标 非必需
 * {boolean} noneBorderBottom 下边框 非必需
 * {object} style 外部样式 非必需
 * {String} className 外部样式类名 非必需
 * }}
 * @returns {XML}
 */
const BaseLabel = (props) => {
    const noneBorderBottom = props.noneBorderBottom && styles['panel-bottom'];
    const _className = cn('panel','panel-align',noneBorderBottom,props.className);
    return (
        <div style={props.style} className={_className}>
            <div>
                <span>{props.label}</span>
            </div>
            <div>
                {props.icon && (<img src={props.icon}/>)}
                <span>{props.name}</span>
            </div>
        </div>
    )
};

export default BaseLabel;