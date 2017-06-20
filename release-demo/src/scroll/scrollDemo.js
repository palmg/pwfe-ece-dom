import React from 'react'
import Scroll from '../../../scroll'
import styles from './scrollDemo.scss'

// 加载数据高度的列表
class ItemList extends React.Component {
    constructor(...props) {
        super(...props)
        this.state = {
            num: 50,
            status: false,
        }
        this.loadList = this.loadList.bind(this)
    }

    // 通知触发了数据更新
    componentWillReceiveProps(nextProps) {
        if (nextProps.loadingDIO) this.loadList()
    }

    // 加载新数据
    loadList() {
        this.setState({
            status: true
        })
        setTimeout(() => {
            this.setState({
                num: this.state.num += 10,
                status: false,
            })    
            this.props.loadedDIO()
        }, 1500)   
    }

    render() {
        let list = []

        for(let i = 1; i < this.state.num; i++) {
            list.push(`今天吃了${i}个芒果`)
        }

        const itemList = list.map((item, index) => {
            return (<p key={index}>{item}</p>)
        })

        return (
            <div className={styles['scroll-box']}>
                {itemList}     
                { this.state.status && <p>加载中...</p> }     
            </div>
        )
    }
    
}

// 滑动到底部高阶组件
const ScrollBox = Scroll.scrollBottom({
    loading: 'loadingDIO', // 标识已拉到底部，触发加载更多
    loaded: 'loadedDIO', // 标识新数据获取完毕，通知包装组件获取新的高度同时关闭到底部的标识
})(ItemList)

// demo容器
const ScrollDemo = () => 
    <section style={{marginTop: '20px'}}>
        <div className={styles['screen']}>
            <div className={styles['top']}>top</div>
                <ScrollBox />
            <div className={styles['bottom']}>bottom</div>
        </div>
    </section>

export default ScrollDemo