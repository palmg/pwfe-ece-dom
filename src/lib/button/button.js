/**
 * Created by luodh on 2017/5/15.
 */
import React from 'react'
//样式
import classNames from 'classnames/bind'
import styles from './button.scss'
let cx = classNames.bind(styles);

/**
 * 基础按钮
 * @param {object} props {{
 *  {string} style 对应的样式
 *  {string} className: css名称
 *  {string} sType: 预设的样式类型 green绿地白字/gray白底灰字
 *  {boolean} fullWidth: 是否全屏宽
 *  {boolean} disabled: 是否禁用
 *  {string} children: 子组件
 *  {function} onClick:点击时的回调方法 (event)=>{}
 * }}
 */
const BaseBtn = (props) => {
    let cn = cx({
        'btn-base': true,
        'btn-green': props.sType === "green",
        'btn-gray': props.sType === "gray",
        'btn-disabled': props.disabled,
        'btn-full': props.fullWidth,
        [props.className ? props.className  : ""]: true
    });

    return (
        <button disabled={props.disabled} style={props.style} className={cn} onClick={props.onClick}>
            {props.children}
        </button>
    )
};

export default BaseBtn;