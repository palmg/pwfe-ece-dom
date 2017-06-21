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
        }
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

    render() {
        const { config } = this.props
        const tabList = config.map((item, index) => {
            if(typeof item == 'object') {
                return(
                    <li key={index} className={this.state.active === index && styles['active']}
                        onClick={this.chooseTab.bind(this, index, item.id)}>{item.name}</li>
                    )
            } else {
                var info = new Date(parseInt(item));
                var time = (info.getMonth()+"月"+info.getDate()+"日");
                return(
                    <li key={index} className={this.state.active === index && styles['active']}
                        onClick={this.chooseTab.bind(this, index, item)}>{time}</li>
                    )
            }
        })

        return (
            <div className={styles['slide-box']} ref='box'>
                <ul className={styles['tab-slide']} style={{width: `${config.length * 100}px`}}>{ tabList }</ul>
            </div>
        )
    }
}




