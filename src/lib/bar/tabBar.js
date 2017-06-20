/**
 * Created by dio on 2017/5/16.
 */

import React from 'react'
import cnTool from 'classnames/bind'

//样式
import styles from './tabBar.scss'

let cx = cnTool.bind(styles)

/**
 * 选项卡组件：
 * @param {object} props {{
 *  {array} config: 支持一个name和id对象组成的数组，name为显示内容，id为传递参数
 *  {function} onClick: 点击激活当前选项卡，同时回调返回点击选项卡的id
 * }}
 */
export class TabBar extends React.Component {
    constructor(...props) {
        super(...props)
        this.state = {
            actvie: 0
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

        const tabList = config.map((item, index) =>
            <li key={index} className={this.state.active === index && styles['active']} 
                onClick={this.chooseTab.bind(this, index, item.id)}>{item.name}</li>
        )
        
        return ( 
            <ul className={styles['tab-bar']}>{ tabList }</ul>
        )
    }
}




