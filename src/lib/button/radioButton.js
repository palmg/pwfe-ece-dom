/**
 * Created by luodh on 2017/5/16.
 */
import React from 'react'
import BaseBtn from './button'
//css
import classNames from 'classnames/bind'
import styles from './radioButton.scss'
let cx = classNames.bind(styles);

/**
 * 单选按钮(组)
 * @param {object} props {{
 *  {array}  buttonList 按钮列表[{id,name,isActive}]
 *  {boolean}  canBeNull 是否可以为空值. 若false且没有选中项, 则选中第一个
 *  {string} style 对应的样式
 *  {string} className: css名称
 *  {function} onClick:点击时的回调方法 (id,name,event)=>{}
 * }}
 */
class RadioButton extends React.Component {
    constructor(...props) {
        super(...props);

        const list = this.props.buttonList;
        if (this.props.canBeNull !== true) {
            for (let i = list.length - 1; i >= 0; i--) {
                if (list[i].isActive) {
                    break;
                }
                list[i].isActive = i === 0;
            }
        }

        this.state = {
            buttonList: this.props.buttonList
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(id, name, e) {
        const list = this.props.buttonList;
        for (let item of list) {
            item.isActive = id === item.id;
        }
        this.setState({
            buttonList: list
        });
        this.props.onClick(id, name, e);
    }

    render() {
        const buttonList = this.state.buttonList.map((button) =>
            (<SingleBtn key={button.id} isActive={button.isActive}
                        onClick={this.handleClick.bind(this, button.id, button.name)}>
                {button.name}
            </SingleBtn>)
        );

        const cn = cx({
            'radio-grp': true,
            [this.props.className ? this.props.className : ""]: true
        });

        return (
            <div className={cn} style={this.props.style}>
                {buttonList}
            </div>
        )
    }
}

/**
 * 单选按钮
 * @param {object} props {{
 *  {string} style 对应的样式
 *  {string} className: css名称
 *  {string} children: 子组件
 *  {function} onClick:点击时的回调方法 (event)=>{}
 * }}
 */
const SingleBtn = (props) => {
    const cn = cx({
        ['radio-btn']: true,
        ["active"]: props.isActive
    });

    return (
        <BaseBtn {...props} className={cn}>
            {props.children}
        </BaseBtn>
    )
};


export default RadioButton;