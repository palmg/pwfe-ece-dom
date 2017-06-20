/**
 * Created by luodh on 2017/5/16.
 */
import React from 'react'

//样式
import classNames from 'classnames/bind'
import styles from './select.scss'
let cx = classNames.bind(styles);

/**
 * 下拉框
 * @param {object} props {{
 *  {string} style 对应的样式
 *  {string} className: css名称
 *  {string} sType: 预设的样式类型 round:圆角
 *  {string} value: 默认选中项
 *  {array} options: 候选项
 *  {function} onChange:点击时的回调方法 (oldVal={value,text},newVal={value,text})=>{}
 * }}
 */
class Select extends React.Component {
    constructor(...props) {
        super(...props);
        this.state = {
            value: this.props.value || "",
            text: this.props.text || ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {

        let text = "";

        const oldState = this.state, newState = {
            value: e.target.value,
            text: e.target.options[e.target.options.selectedIndex].text
        };
        this.setState({
            value: e.target.value,
            text: e.target.options[e.target.options.selectedIndex].text
        });
        this.props.onChange && this.props.onChange(oldState, newState);
    }

    render() {
        let cn = cx({
            ['select']: true,
            ['round']: this.props.sType === "round",
            ['simple']: this.props.sType === "simple",
            [this.props.className ? this.props.className : ""]: true
        });

        const options = this.props.options.map((option) => (<option key={option.value} value={option.value}>{option.text}</option>));
        return (
            <div style={this.props.style} className={cn}>
                <select value={this.state.value} onChange={this.handleChange}>
                    {options}
                </select>
                <div className={styles['down-arrow']}><span></span></div>
            </div>
        )
    }
}

export default Select;
