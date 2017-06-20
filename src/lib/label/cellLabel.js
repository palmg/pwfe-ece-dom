/**
 * Created by ljc on 2017/5/15 13:42.
 */
import React from 'react'
import cnTool from 'classnames/bind'
import Tag from 'pwfe-dom/tag'
import DefCelLabel from './defCellLabel'
const cn = cnTool.bind(require('./cellLabel.scss'))

/**
 * 基础Cell标签
 * 1）提供label属性文本输入
 * 2）提供name属性文本输入
 * 3）提供style属性自定义样式
 * 4）提供className属性指定样式
 * 5）提供noneMarginBottom属性设置是否指定下边距
 * 6）提供noneBorderBottom属性设置是否带下边框
 * 7）提供onClick属性设置点击事件
 * @param {object} props {{
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
 */
const CellLabel = (props) => {
    const cnLabel = cn('label-span');
    const cnName = cn('name-span');
    const cnNext = cn('next-text');
    return (
        <DefCelLabel style={props.style} onClick={props.onClick} noneMarginBottom={props.noneMarginBottom} noneBorderBottom={props.noneBorderBottom} className={props.className}>
            <div className={cnLabel}>
                <span>{props.label}</span>
            </div>
            <div className={cnName}>
                <span className={!props.noneNext && cnNext}>{props.name}</span>
                {!props.noneNext && (<Tag.Icon src="nextLabel"/>)}
            </div>
        </DefCelLabel>
    )
};

export default CellLabel;