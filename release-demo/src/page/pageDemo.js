/**
 * Created by chkui on 2017/5/12.
 */

import React from 'react'
import {connect} from 'react-redux'
import cnTool from 'classnames/bind'
import Page from '../../../page'
import {courseOutingListLoading, courseOutingListOnLoad} from '../action'

import {get} from 'pwfe-dom/net'
import Button from '../../../button'

import styles from './pageDemo.scss'
const cn = cnTool.bind(styles);

class InnerComponent1 extends React.Component{
    constructor(...props){
        super(...props)
        this.state = {
           text:''
        };
        this.networkHandle = this.networkHandle.bind(this)
    }

    networkHandle(){
        get('/demo/data/welcome.json')
            .suc(res=>this.setState({text:res.data}))
            .err((err, res)=>console.log(err))
            .headers((header=>console.log(header)));
    }

    render(){
        const props = this.props;
        return (
            <div>
                <p>默认页面DefPage，背影颜色为 #F2F2F2</p>
                <Button.BaseBtn className={cn('page-btn')} onClick={props.onAddList}> Redux示例1，显示列表 </Button.BaseBtn>
                <Button.BaseBtn className={cn('page-btn')} onClick={props.onCleanList}> Redux示例2，清空列表 </Button.BaseBtn>
                <Button.BaseBtn className={cn('page-btn')} onClick={this.networkHandle} sType="green"> 服务器请求,通过net工具请求数据 </Button.BaseBtn>
                <div>
                    {this.state.text}
                </div>
            </div>
        )
    }
}

//创建一个connect高阶组件
const conn = connect(
    (state, props) => {
        //获取属性
        return props;
    },
    (dispatch, props)=> {
        //给属性新增一个回调方法来触发redux的store更新
        return {
            onAddList: ()=> {
                let list = [];
                for (let i = 0; i < 51; i++) {
                    list.push(`第${i}项`)
                }
                dispatch(courseOutingListOnLoad(list));
            },
            onCleanList: ()=> {
                dispatch(courseOutingListLoading())
            }
        };
    });

//用高阶组件(conn)将我们定义的组件包装起来
const InnerComponent1Wrap = conn(InnerComponent1);

/**
 * 直接构建InnerComponent2组件。
 */
const InnerComponent2 = connect(
    (state, props) => {
        //获取属性
        const outingList = state.courseOutingList;
        return { //返回的数据会被合并到props中
            init: outingList.init,
            list: outingList.list
        };
    }
)(props => {
    const list = props.list;
    const Items = props.init ? list.map((item, index)=>(<p key={index}>{item}</p>)) : (<div>redux未初始化数据</div>);
    return (
        <div>
            <p>有背景的页面ImgPage</p>
            <p>超出部分会自动滚动</p>
            <br/>
            {Items}
        </div>
    )
});

const PageDemo = props => {
    const {match, location, history, staticContext} = props;//第一层组件可以通过类似的方法获取到当前页面的路径、位置、history等参数。
    return (
        <div className={cn('page-demo')}>
            <div className={cn('page-box')}>
                <Page.DefPage>{/*默认页面*/}
                    <InnerComponent1Wrap />
                </Page.DefPage>
            </div>
            <div className={cn('page-box')}>
                <Page.ImgPage>{/*带背景图片的页面*/}
                    <InnerComponent2 />
                </Page.ImgPage>
            </div>
        </div>
    )
};

export default PageDemo
