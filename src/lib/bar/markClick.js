/**
 * Created by dio on 2017/5/16.
 */

import React from 'react'
import cnTool from 'classnames/bind'
import Tag from 'pwfe-dom/tag'
const cx = cnTool.bind(require('./markClick.scss'))

/**
 * 通用分数选择组件：
 * @param {object} props {{
 *  {object} style: 自定义样式
 *  {string} className： 修改css接口
 *  {string} height: 图标大小 (默认1.5rem)
 *  {string} margin: 图标间距（默认.2rem）
 *  {string} src: 选择分数图标（建议使用实心图案，默认为圆角星星图标）
 *  {function} onClick: 点击事件，回调返回一个选择的分数值
 * }}
 */
export class MarkClick extends React.Component {
    constructor(...props) {
        super(...props)
        this.state = {
            point: 0
        }
    }

    choosePoint(i) {
        this.setState({
            point: i
        })
        this.props.onClick(i)
    }

    render() {

        let list = []

        const { height, src, className, style, margin } = this.props

        for(let i = 1; i <= 5; i++) {

            const cn = cx({
                'icon': true,
                'gray': this.state.point < i,
                [className ? className : '']: true
            })

            list.push(<Tag.Icon className={cn} style={{height: height, margin: `0 ${margin}`}} key={i}
                           src={src || "yellowRoundStar"} onClick={this.choosePoint.bind(this, i)} />)
        }
        
        return (
            <div className={cx('click-box')} style={style}>
                { list }
            </div>
        )
    }
}




