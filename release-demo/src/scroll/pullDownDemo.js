/**
 * Created by luodh on 2017/5/23.
 */
import React from 'react'
import Scroll from '../../../scroll'
import {Api} from '../input/inputDemo'
import styles from './pullDownDemo.scss'

class PullDownDemo extends React.Component {
    constructor(...props) {
        super(...props);
        this.state = {
            loading: false,
            start: 50,
            list: [],
            isEnd: false,
        };

        this.loadData = this.loadData.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        this.setState({loading: true, start: this.state.start - 10});
        //假装加载完成
        setTimeout(() => {
            let list = [];
            for (let i = this.state.start; i <= 50; i++) {
                list.push((<p className={styles["p"]} key={i}>{`这是第${i}行`}</p>))
            }
            this.setState({loading: false, list: list, isEnd: this.state.start <= 0})
        }, 1000);
    }

    render() {
        return (
            <div>
                <div className={styles['screen']}>
                    <Scroll.PullDown loading={this.state.loading} isEnd={this.state.isEnd} onReload={this.loadData}
                                     pullHint="下拉查看更多" dropHint="释放加载更早的内容" loadingHint="正在加载数据...">
                        <div>{this.state.list}</div>
                    </Scroll.PullDown>
                </div>
                <Api params={[
                    {param: "loading", desc: "是否加载中", type: "boolean"},
                    {param: "isEnd", desc: "是否全部加载完毕(禁用下拉加载)", type: "boolean"},
                    {param: "onReload", desc: "触发加载回调函数", type: "function"},
                    {param: "children", desc: "内容", type: "dom"},
                    {param: "pullHint", desc: "下拉提示 默认\"下拉刷新\"", type: "string"},
                    {param: "dropHint", desc: "释放提示 默认\"释放刷新\"", type: "string"},
                    {param: "loadingHint", desc: "加载中提示 默认\"正在加载...\"", type: "string"},
                ]}/>
            </div>
        )
    }
}

export default PullDownDemo