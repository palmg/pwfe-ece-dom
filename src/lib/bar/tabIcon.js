/**
 * Created by dio on 2017/5/24.
 */

import React from 'react'
import cnTool from 'classnames/bind'

//样式
import styles from './tabIcon.scss'

let cx = cnTool.bind(styles)

/**
 * 选项卡组件：
 * @param {object} props {{
 *  {array} config: 支持一个name和id对象组成的数组，name为显示内容，id为传递参数
 *  {function} onClick: 点击激活当前选项卡，同时回调返回点击选项卡的id
 * }}
 */
export class TabIcon extends React.Component {
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
        this.props.onClick(id)
    }

    render() { 

        const { config } = this.props

        const tabList = config.map((item, index) =>
            <li key={index} onClick={this.chooseTab.bind(this, index, item.id)}>
                <div >
                    <p>{item.name}</p>
                    { item.count > 0 && <span style={{lineHeight: `${item.count > 9 && '9px'}`}}>
                        {item.count > 9 ? '...' : item.count}
                    </span> }
                </div>
            </li>
        )
        
        return ( 
            <ul className={styles['tab-bar']}>{ tabList }</ul>
        )
    }
}




