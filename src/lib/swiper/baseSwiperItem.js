/**
 * Created by ljc on 2017/5/16 15:43.
 */
import React from 'react';

import styles from './baseSwiperItem.scss';

import cnTool from 'classnames/bind'
const cnBind = cnTool.bind(styles);

/**
 * 滑块项，仅可放置在<BaseSwiper/>(所有放置于BaseSwiperItem放的外部组件均可左右滑动滚屏)
 * @param {object} props {{
 * {String} className 外部样式类名 非必需
 * }}
 * @returns {XML}
 * @constructor
 */
const BaseSwiperItem = props => {
    return (
        <div className={cnBind('item', props.className)}>{props.children}</div>
    );
}

export default BaseSwiperItem;