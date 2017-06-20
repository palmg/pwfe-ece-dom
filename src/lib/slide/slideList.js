/**
 * Created by dio on 2017/5/23.
 */

import React from 'react'
import cnTool from 'classnames/bind'
import styles from './slideList.scss'
import Loading from '../../loading'
import { reRoute } from 'pwfe-dom/router'

let cx = cnTool.bind(styles)

// 轮播点组件
class SlideDots extends React.Component {
    constructor(...props) {
        super(...props)
    }

    dotClick(i) {
        this.props.turn(i - this.props.local)
    }
   
    render() {

        let dotNodes = [], cn
        const { count, local } = this.props

        for(let i = 0; i < count; i++) {

            cn = cx({'active': i === local})

            dotNodes[i] = (
                <span key={`dot${i}`} onClick={this.dotClick.bind(this, i)} className={cn}></span>
            )
        }

        return (
            <div className={styles['dots']}>{ dotNodes }</div>
        )
    }
    
}

/**
 * 轮播组件：
 * @param {object} props {{
 *  {object} set: 组件配置，不传则启用默认配置参数
 *  {array} img: 传递的图片及描述
 * }}
 */
class SlideListDisplay extends React.Component {
    constructor(...props) {
        super(...props)
        this.state = {
            local: 0
        }
        this.turn = this.turn.bind(this)
        this.goPlay = this.goPlay.bind(this)
        this.pausePlay = this.pausePlay.bind(this)
    }

    // 向前向后多少
    turn(n) {
        let _n = this.state.local + n
        this.setState({
            local: _n >= this.props.img.length ? 0 : _n
        })
    }

    // 开始自动轮播
    goPlay() {
        this.autoPlayFlag = setInterval(() => {
            this.turn(1)
        }, this.props.set.delay * 1000)
    }

    // 暂停自动轮播
    pausePlay() {
        clearInterval(this.autoPlayFlag)
    }

    componentDidMount() {  
        this.goPlay()
    }

    componentWillUnmount() {
        clearInterval(this.autoPlayFlag)
    }

    // link(url) {
    //     this.props.browser.forward(url)
    // }

    render() {

        const { set, img, height, style } = this.props,
              count = img.length

        const itemList = img.map((item, index) =>
            <a href={item.url} key={index} >
                <img style={{width: `${100 / count}%`, height:'100%'}} alt={item.alt} src={item.pic}/>
            </a>
        )

        return (
            <div className={styles['slide-box']}
                 onMouseOver={this.pausePlay} onMouseOut={this.goPlay}>
                {
                    img.length > 0 ? (
                        <div>
                            <div className={styles['slide-list']}
                                style={{
                                    transform: `translateX(${-100 / count * this.state.local}%)`,
                                    transitionDuration: `${set.speed}s`,
                                    width: `${100 * count}%`,
                                    height: height,           
                                }}>
                                { itemList }
                            </div>
                            { set.dots && <SlideDots turn={this.turn} count={count} local={this.state.local} /> }
                        </div>  
                    ) : (
                        <div style={{height: height}}>
                            <Loading.RoundLoading />
                        </div>  
                    )
                }
            </div>
        )
    }
}

export const SlideList = reRoute()(SlideListDisplay)

SlideListDisplay.defaultProps = {
  img: [],
  set: {
    speed: 1.5, // 切换速度
    delay: 3, // 停留时间
    autoplay: true, // 是否自动轮播
    dots: true, // 是否显示下方的轮播点
  }
}

SlideListDisplay.autoPlayFlag = null