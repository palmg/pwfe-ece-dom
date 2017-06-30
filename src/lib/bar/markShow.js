/**
 * Created by dio on 2017/5/16.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import cnTool from 'classnames/bind'
import Tag from 'pwfe-dom/tag'
//样式
import styles from './markShow.scss'

let cx = cnTool.bind(styles)

class ImgList extends React.Component {

    constructor(...props) {
        super(...props)
    }

    render() {
        let list = []

        const { height, src, className, style, margin } = this.props

        let cn = cx({
            'mark-box': true,
            [className ? className : '']: true
        })

        for(let i = 0; i < 5; i++) {
            let style
            switch(i) {
                case 0: style = {height: height, margin: `0 ${margin} 0 0`}; break
                case 4: style = {height: height, margin: `0 ${margin}`}; break
                default: style = {height: height, margin: `0 0 0 ${margin}`}; break
            }
            list.push(<Tag.Icon className={styles['icon']} key={i} style={style} src={src} />)
        }
        
        return (<div className={cn} style={style}>{ list }</div>)
    }

}


/**
 * 通用分数显示组件：
 * @param {object} props {{
 *  {string} className： 修改css接口
 *  {string} height: 图标大小
 *  {string} margin: 图标间距
 *  {number} point: 分数
 * }}
 */

class BaseMark extends React.Component {

    constructor(...props) {
        super(...props)
        this.state = {
            progress: 0
        }
    }

    componentDidMount() {

        this.dom = ReactDOM.findDOMNode(this.refs.pointBox)
        this.setState({
            progress: +this.props.point / 5 * this.dom.clientWidth
        })

    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            progress: nextProps.point / 5 * this.dom.clientWidth
        })
    }

    render() {

        const { className, height, style, hollow, solid, margin } = this.props

        let cn = cx({
            'base-mark': true,
            [className ? className : '']: true
        })

        return (
            <div style={style} className={cn}>
                <div className={styles['mark-pos']}>
                    <ImgList src={hollow} height={height} margin={margin} />
                    <ImgList src={solid} height={height} ref='pointBox' className={styles['solid']} margin={margin}
                             style={{clip: `rect(0, ${this.state.progress}px, ${height}, 0)`}} />
                </div>
            </div>
        )
    }
}

export const StarRMark = props => 
    <BaseMark solid="yellowRoundStar" hollow="grayRoundStar" height={props.height} point={props.point || 0} margin={props.margin} />

export const StarTMark = props => 
    <BaseMark solid="yellowTriStar" hollow="grayTriStar" height={props.height} point={props.point || 0} margin={props.margin} />

export const CloverMark = props => 
    <BaseMark solid="greenClover" hollow="transparentClover" height={props.height} point={props.point || 0} margin={props.margin} />
