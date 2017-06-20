/**
 * Created by chkui on 2017/5/12.
 */

import React from 'react'
import cnTool from 'classnames/bind'

import DefPage from './defPage'
import Tag from 'pwfe-dom/tag'

import styles from './imgPage.scss'
const cn = cnTool.bind(styles)

/**
 * 携带背景图片的页面
 * 1）背景已经将图片实现分割。背景一共分4层(z-index:1~4)，从第一层到第三层都是背景图片。第四层是业务功能组件。
 * 2）通过children添加页面的组件或静态文本
 * 3）提供style参数修改样式
 * 4）提供className参数新增css样式
 * @param {object} props {
 *  {object} style 修改样式接口
 *  {string} className 修改css接口
 *  {string} name 页面的名称
 *  {Dom} children 子组件，页面之内的功能
 * }
 * @returns {XML}
 * @constructor
 */
const ImgPage = props=>
    <DefPage style={props.style} className={cn('img-page', props.className)} name={props.name}>
        <div className={cn('bg', 'left-bg')}>
            <Tag.Icon src="pageBgLeft"/>
        </div>
        <div className={`${styles.bg} ${styles['right-bg']}`}>
            <Tag.Icon src="pageBgRight"/>
        </div>
        <div className={`${styles.bg} ${styles['bottom-bg']}`}>
            <Tag.Icon src="pageBgBottom"/>
        </div>
        <div className={styles.content}>
            {props.children}
        </div>
    </DefPage>

export default ImgPage
