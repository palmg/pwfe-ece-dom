/**
 * Created by luodh on 2017/5/15.
 */
import React from 'react'
import BaseBtn from './button'
import Tag from 'pwfe-dom/tag'
//样式
import classNames from 'classnames/bind'
import styles from './iconButton.scss'
let cx = classNames.bind(styles);

/**
 * 图标按钮 左方带有一个图标
 * @param {object} props {{
 *  {string} style 对应的样式
 *  {string} iconStyle icon对应的样式
 *  {string} className: css名称
 *  {string} sType: 按钮样式类型 green/gray
 *  {boolean} disabled: 是否禁用
 *  {boolean} fullWidth: 是否全屏宽
 *  {object} icon 按钮内的图标
 *  {string} children: 子组件
 *  {function} onClick:点击时的回调方法 (event)=>{}
 * }}
 */
const IconBtn = (props) => {
    const cn = cx({
        'column': props.column,
        [props.className ? props.className  : ""]: true
    });

    return (
        <BaseBtn {...props} className={cn}>
            <Tag.Icon className={styles['icon']} style={props.iconStyle} src={props.icon || "greenCirclePlus" }/>
            {props.children}
        </BaseBtn>
    )
};

export default IconBtn;