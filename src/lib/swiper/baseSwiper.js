/**
 * Created by ljc on 2017/5/16 15:42.
 */
import React from 'react';

import SwiperItem from './baseSwiperItem';
import styles from './baseSwiper.scss';

import cnTool from 'classnames/bind'
const cn = cnTool.bind(styles)

/**
 *
 * @param event 当前touch事件
 * @param startPageX 前一次点击页面X坐标
 * @param startPageY 前一次点击页面Y坐标
 * @returns {{event: 当前touch事件, pageX: X坐标, pageY: Y坐标, direction: 移动方向(left/right), distance: 位移, move: 实时移动}}
 */
const touchEvent = (event, startPageX, startPageY) => {
    let point = {
        event: event,
        pageX: parseInt(event.changedTouches[0].pageX),
        pageY: parseInt(event.changedTouches[0].pageY),
        direction: '',
        distance: 0,
        move: 0
    }

    if (startPageX > 0 && startPageY > 0) {
        //位移
        let endPageX = point.pageX;
        point.distance = Math.abs(endPageX - startPageX);

        //移动方向
        let direction = endPageX > startPageX ? 'right' : 'left';
        point.direction = direction;

        //实时移动
        let move = endPageX - startPageX;
        point.move = move;
    }
    return point;
}


/**
 * 基础滑块视图容器(所有的滑块项均需要由BaseSwiper组件包装)
 * @param props
 * @returns {XML}
 * @constructor
 */
class BaseSwiper extends React.Component {
    constructor(...props) {
        super(...props);
        this.state = {
            startPageX: 0,
            startPageY: 0,
            move: 0,
            range: 0,
            firstChildTransformValue: 0,//允许左移
            lastChildTransformValue: 0,//允许右移
        };

        //事件绑定
        this.touchMoveHandler = this.touchMoveHandler.bind(this);
        this.touchStartHandler = this.touchStartHandler.bind(this);
        this.touchEndHandler = this.touchEndHandler.bind(this);
    }

    /**
     * 开始移动
     * @param event
     */
    touchStartHandler(event) {
        // event.preventDefault();
        const point = touchEvent(event);


        //判断是否到底了
        const container = this.refs.container;

        const firstChildTransformStr = container.firstChild.style.transform;
        const lastChildTransformStr = container.lastChild.style.transform;
        const firstChildTransformValue = parseInt(firstChildTransformStr.substring(11, firstChildTransformStr.length - 2));
        const lastChildTransformValue = parseInt(lastChildTransformStr.substring(11, lastChildTransformStr.length - 2));



        this.setState({
            startPageX: point.pageX,
            startPageY: point.pageY,
            firstChildTransformValue: firstChildTransformValue,
            lastChildTransformValue: lastChildTransformValue
        })
    }

    /**
     * 移动中...
     * @param event
     */
    touchMoveHandler(event) {
        // event.preventDefault();
        const point = touchEvent(event, this.state.startPageX, this.state.startPageY);

        this.setState({
            move: point.move
        })
    }

    /**
     * 结束移动
     * @param event
     */
    touchEndHandler(event) {
        // event.preventDefault();
        const point = touchEvent(event, this.state.startPageX, this.state.startPageY);

        const translateX = 100;//偏移百分比

        //移动超过三分之一，则整体移动，反之恢复原位置
        const width = window.innerWidth;

        let range = 0;//移动范围

        if (Math.abs(point.move) >= (parseInt(width * 0.35))) {

            if (point.direction === 'left' && this.state.lastChildTransformValue != 0) {
                range = this.state.range - translateX;
            } else if (point.direction === 'right' && this.state.firstChildTransformValue != 0) {
                range = this.state.range + translateX;
            } else {
                range = this.state.range;
            }
        } else {
            range = this.state.range;
        }

        this.setState({
            move: 0,
            range: range,
        })
    }

    render() {
        const cnContainer = cn('container');
        const cnItemSpan = cn('item-span');

        const move = this.state.move;
        const range = this.state.range;

        const children = React.Children.map(this.props.children,(child,index) => {
            let left = `${move}px`;
            let transform = `translateX(${index * 100 + range}%)`;

            return <div key={index} className={cnItemSpan} style={{left: left, transform: transform,transitionDuration: '0.4s', transitionTimingFunction:'ease-out'}}>{child}</div>;
        });

        return (
            <div ref="container" className={cnContainer} style={{width: '100%', height: '100%'}}
                 onTouchStart={this.touchStartHandler} onTouchMove={this.touchMoveHandler}
                 onTouchEnd={this.touchEndHandler}>
                {children}
            </div>
        );
    }
}

export default BaseSwiper;