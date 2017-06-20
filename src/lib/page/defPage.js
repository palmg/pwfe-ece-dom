/**
 * Created by chkui on 2017/5/12.
 */

import React from 'react'

import cnTool from 'classnames/bind'

//样式
import styles from './defPage.scss'
const cn = cnTool.bind(styles)

/**
 * 默认页面。
 * 1）背景颜色默认为#F2F2F2
 * 2）通过children添加内容
 * 3）提供style参数修改样式
 * 4）提供className参数新增css样式
 * @param {object} props {
 *  {object} style 修改样式接口
 *  {string} className 修改css接口
 *  {string} name 页面的名称
 *  {Dom} children 子组件，页面之内的功能
 * }
 * @constructor
 */
/*const DefPage = props =>
    <div style={props.style} className={cn('def-page', props.className)}>
        {props.children}
    </div>*/

class DefPage extends React.Component{
    constructor(...props) {
        super(...props)
        this.touchStartHandler = this.touchStartHandler.bind(this)
        this.scrollHandler = this.scrollHandler.bind(this)
    }



    componentDidMount(){
        this.props.name && (document.title = this.props.name);
    }

    shouldComponentUpdate() {
        return true;
    }

    componentWillReceiveProps(nextProps){
        nextProps.name && this.props.name !== nextProps.name && (document.title = nextProps.name);
    }

    getWinInfo() {
        //可视区域高度
        const clientHeight = this.refs.defPage.clientHeight;

        //滚动条滚动高度
        const scrollTop = this.refs.defPage.scrollTop;

        //滚动内容高度
        const scrollHeight = this.refs.defPage.scrollHeight;

        return {clientHeight, scrollTop, scrollHeight};
    }

    touchStartHandler(event) {
        this.props.onTouchStart && this.props.onTouchStart(this.getWinInfo());
    }

    scrollHandler(event) {
        this.props.onScroll && this.props.onScroll(this.getWinInfo());
    }

    render(){
        const props = this.props;
        return(
            <div style={props.style} className={cn('def-page', props.className)} onTouchStart={this.touchStartHandler} onScroll={this.scrollHandler} ref="defPage">
                {props.children}
            </div>
        )
    }
}

export default DefPage
