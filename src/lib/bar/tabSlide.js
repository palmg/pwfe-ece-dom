/**
 * Created by dio on 2017/5/18.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import cnTool from 'classnames/bind'

//样式
import styles from './tabSlide.scss'

let cx = cnTool.bind(styles)

/**
 * 选项卡组件：
 * @param {object} props {{
 *  {array} config: 支持一个name和id对象组成的数组，name为显示内容，id为传递参数
 *  {function} onClick: 点击激活当前选项卡，同时回调返回点击选项卡的id
 * }}
 */
export class TabSlide extends React.Component {
    constructor(...props) {
        super(...props)
        this.state = {
            actvie: 0,
            move: false,
            moveX: 0,
        }
        this.touchStart = this.touchStart.bind(this)
        this.touchMove = this.touchMove.bind(this)
        this.touchEnd = this.touchEnd.bind(this)
    }

    componentWillMount() {
        this.setState({
            active: 0
        })
    }

    chooseTab(i, id) {
        this.setState({
            active: i
        })
        this.props.onClick(id)
    }

    touchStart(e) {
        this.setState({
            move: true,
            startX: e.targetTouches[0].pageX // 起始距离
        })
    }

    touchMove(e) {

        const dom = ReactDOM.findDOMNode(this.refs.box) // 盒子大小

        let pageX = e.targetTouches[0].pageX, // 当前距离
            moveX = pageX - this.state.startX + this.state.moveX, // 移动距离
            box = dom.clientWidth, // 盒子宽度
            ul = this.props.config.length * 100 // 列表宽度          

        if(!this.state.move) return
        if(moveX > 0) {
            moveX = 0
        } else if(moveX < box - ul) {
            moveX = box - ul
        }
        
        this.setState({moveX: moveX})
    }

    touchEnd() {
        this.setState({
            move: false 
        })
    }

    render() { 

        const { config } = this.props

        const tabList = config.map((item, index) =>
            <li key={index} className={this.state.active === index && styles['active']} 
                onClick={this.chooseTab.bind(this, index, item.id)}>{item.name}</li>
        )
        
        return ( 
            <div className={styles['slide-box']} ref='box'>
                {/*  
                    <ul className={styles['tab-slide']} 
                        style={{width: `${config.length * 100}px`, left: `${this.state.moveX}px`}}
                        onTouchStart={this.touchStart} onTouchEnd={this.touchEnd}
                        onTouchMove={this.touchMove}>{ tabList }</ul>
                */}
                <ul className={styles['tab-slide']} style={{width: `${config.length * 100}px`}}>{ tabList }</ul>
            </div>
        )
    }
}




