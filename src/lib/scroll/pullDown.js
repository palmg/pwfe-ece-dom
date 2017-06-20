/**
 * Created by luodh on 2017/5/23.
 */

import React from 'react'
import styles from './pullDown.scss'
import cnTool from 'classnames/bind'
let cx = cnTool.bind(styles);

const pullDownState = {
    LOADED: "loaded",   //加载完成
    LOADING: "loading", //加载中
    WILL_LOAD: "willLoad",  //即将加载
    END: "end", //全部加载完
};

/**
 * 下拉加载控件：
 * @param {object} props {{
     *  {boolean} loading: 是否加载中
     *  {boolean} isEnd: 是否全部加载完毕(禁用下拉加载)
     *  {function} onReload: 触发加载回调函数
     *  {dom} children: 内容
     *  {string} pullHint: 下拉提示 默认"下拉刷新"
     *  {string} dropHint: 释放提示 默认"释放刷新"
     *  {string} loadingHint: 加载中提示 默认"正在加载..."
     * }}
 */
class PullDown extends React.Component {
    constructor(...props) {
        super(...props);
        this.state = {
            offset: 0,    //触摸下拉的位移
            touching: false,    //是否在拖动
            state: (this.props.isEnd === true ? pullDownState.END : pullDownState.LOADED)   //加载状态
        };
        this.startPoint = null;   //触控的开始位置
        this.startScroll = 0;     //记录开始触控的列表滚动距离

        this.touchMoveHandle = this.touchMoveHandle.bind(this);
        this.touchStartHandle = this.touchStartHandle.bind(this);
        this.touchEndHandle = this.touchEndHandle.bind(this);
    }

    componentWillReceiveProps(nextProps, nextState) {
        if (nextProps.loading !== this.props.loading) {
            this.setState({state: nextProps.loading ? pullDownState.LOADING : pullDownState.LOADED});
        }
        if (nextProps.isEnd !== this.props.isEnd) {
            this.setState({state: nextProps.isEnd === true ? pullDownState.END : pullDownState.LOADED});
        }
    }

    touchStartHandle(e) {
        this.setState({touching: true});
        this.startPoint = getTouchPosition(e);
        this.startScroll = this.pullDownBox.scrollTop;
    }

    touchMoveHandle(e) {
        if ([pullDownState.LOADING, pullDownState.END].indexOf(this.state.state) > -1) {
            return;
        }
        const point = getTouchPosition(e, this.startPoint.pageX, this.startPoint.pageY);

        let offset = 0, scroll = this.startScroll - this.pullDownBox.scrollTop;
        offset = point.move - scroll;
        this.setState({
            offset: offset > 0 ? offset : 0
        });

        if (offset > 160) {
            this.setState({
                state: pullDownState.WILL_LOAD
            })
        } else {
            this.setState({
                state: pullDownState.LOADED
            })
        }
    }

    touchEndHandle() {
        this.setState({offset: 0, touching: false});
        if (this.state.state === pullDownState.WILL_LOAD) {
            this.setState({state: pullDownState.LOADING});
            //去刷新
            this.props.onReload && this.props.onReload();
        }
    }

    render() {

        const headHeight = (this.headerTip && this.headerTip.offsetHeight) || 0;
        const distance = this.state.state == pullDownState.LOADING ? headHeight : 0;
        const hint = (() => {
            switch (this.state.state) {
                case pullDownState.WILL_LOAD:
                    return this.props.dropHint || "释放刷新";
                case pullDownState.LOADING:
                    return this.props.loadingHint || "正在加载...";
                case pullDownState.LOADED:
                    return this.props.pullHint || "下拉刷新";
            }
        })();

        const transition = (([pullDownState.LOADED, pullDownState.LOADING].indexOf(this.state.state) > -1) && !this.state.touching) ? ".3s ease-in-out" : "";

        return (
            <div ref={(ref) => { this.pullDownBox = ref }} className={cx("pull-down-box", this.props.className)} style={this.props.style}>
                <div className={cx("scroll-content")}
                     style={{
                         transform: `translateY(${this.state.offset - headHeight}px)`,
                         marginTop: `${distance}px`,
                         transition: transition
                     }}
                     onTouchStart={this.touchStartHandle} onTouchMove={this.touchMoveHandle} onTouchEnd={this.touchEndHandle}>
                    <div ref={(ref) => { this.headerTip = ref }} className={cx("header")}>{hint}</div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default PullDown;

/**
 *
 * @param event 当前touch事件
 * @param startPageY 前一次点击页面X坐标
 * @param startPageY 前一次点击页面Y坐标
 * @returns {{event: 当前touch事件, pageX: X坐标, pageY: Y坐标, direction: 移动方向(left/right), distance: 位移, move: 实时移动}}
 */
const getTouchPosition = (event, startPageX, startPageY) => {
    let point = {
        event: event,
        pageX: parseInt(event.changedTouches[0].pageX),
        pageY: parseInt(event.changedTouches[0].pageY),
        direction: '',
        distance: 0,
        move: 0
    }

    if (startPageY > 0) {
        //位移
        let endPageY = point.pageY;
        point.distance = Math.abs(endPageY - startPageY);

        //移动方向
        let direction = endPageY > startPageY ? 'down' : 'up';
        point.direction = direction;

        //实时移动
        let move = endPageY - startPageY;
        point.move = move;
    }
    return point;
};

