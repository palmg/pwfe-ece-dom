/**
 * Created by luodh on 2017/5/25.
 * 用于Modal演示的组件
 */

import React from 'react'

import Modal from '../../../modal'
import Button from '../../../button'
import st from './modalDemo.scss'
import {Api} from '../input/inputDemo'

const Pop = (props) => {
    return (
        <div className={st["app-plate"]} onClick={props.onClose}>
            <div className={st['base-modal-pop']}>
                <p>一个模态框</p>
            </div>
        </div>
    )
};

class ModalDemo extends React.Component {
    constructor(...props) {
        super(...props);
        this.state = {
            pop: false
        }
    }

    showPop() {
        this.setState({
            pop: true
        })
    }

    closePop() {
        this.setState({
            pop: false
        })
    }

    render() {
        return (
            <div className={st['demo']}>
                <h2>Modal容器</h2>
                <Button.BaseBtn onClick={this.showPop.bind(this)}>点击显示弹出框</Button.BaseBtn>
                {this.state.pop && <Modal.Container><Pop onClose={this.closePop.bind(this)}/></Modal.Container>}

                <Api params={[
                    {param: "parentNode", desc: "渲染modal框的位置, 默认渲染到body下", type: "dom"},
                    {param: "children", desc: "modal组件", type: "dom"},
                ]}/>

            </div>
        )
    }
}

export default ModalDemo
