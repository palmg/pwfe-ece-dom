/**
 * Created by luodh on 2017/5/25.
 */
import React from 'react';
import ReactDOM from 'react-dom';

/**
 * 模态框容器
 * @param {object} props {{
 *  {dom} parentNode 渲染modal框的位置, 默认渲染到body下
 *  {dom} children: modal组件
 * }}
 */

class Container extends React.Component {

    constructor(...props) {
        super(...props);
        this.container = null;  //包裹弹出框的容器
        this.parentNode = null; //附加到的父节点dom
    }

    componentDidMount() {
        this.appendModalIntoDoc();
    }

    componentDidUpdate() {
        this.appendModalIntoDoc();
    }

    componentWillUnmount() {
        this.destroyModal();
    }

    appendModalIntoDoc() {
        let target = this.props.children;
        if (target !== null) {
            this.createContainer();
            ReactDOM.unstable_renderSubtreeIntoContainer(
                this, target, this.container
            );
        }
    }

    createContainer() {
        if (!this.container) {
            this.container = document.createElement('div');
            this.parentNode = this.props.parentNode || document.body;
            this.parentNode.appendChild(this.container);
        }
    }

    destroyModal() {
        if (this.container) {
            ReactDOM.unmountComponentAtNode(this.container);
            this.parentNode.removeChild(this.container);
            this.container = null;
            this.parentNode = null;
        }
    }

    render() {
        return null;
    }
}

export default Container;