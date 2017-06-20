/**
 * Created by dio on 2017/5/16.
 */

import React from 'react'
import Tag from 'pwfe-dom/tag'
/**
 * 课程状态组件：
 * @param {object} props {{
 *  {object} style: 自定义图片样式
 *  {string} className： 修改css接口
 *  {string} status: 课程状态（share: 待分享、complete：课程完成、coming：未开始、overdue：课程结束）
 * }}
 */
export const LesStatus = props => {
    switch(props.status) {
        case 'share':
            return <Tag.Icon style={props.style} src="lessonLock" className={props.className} />
        case 'complete':
            return <Tag.Icon style={props.style} src="lessonComplete" className={props.className} />
        case 'coming':
            return <Tag.Icon style={props.style} src="lessonComing" className={props.className} />
        case 'expire':
            return <Tag.Icon style={props.style} src="lessonExpire" className={props.className} />
        case 'full':
            return <Tag.Icon style={props.style} src="lessonFull" className={props.className} />
        case 'end':
            return <Tag.Icon style={props.style} src="lessonEnd" className={props.className} />
        default: 
            return <Tag.Icon style={props.style} className={props.className} />
    }
}
    

