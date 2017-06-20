/**
 * Created by luodh on 2017/5/25.
 */
import Container from './lib/modal/container'
import BaseModal from './lib/modal/baseModal'

const Modal = {
    /**
     * 模态框容器
     * @param {object} props {{
     *  {dom} parentNode 渲染modal框的位置, 默认渲染到body下
     *  {dom} children: modal组件
     * }}
     */
    Container,
    /**
     * 基础模态框 带有蒙版及前层的容器
     * @param {object} props {{
     *  {dom} children: modal组件
     * }}
     */
    BaseModal,
};

export {Container,BaseModal}
export default Modal
