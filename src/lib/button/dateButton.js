/**
 * Created by luodh on 2017/5/16.
 */
import React from 'react'
import BaseBtn from './button'
//样式
import classNames from 'classnames/bind'
import styles from './dateButton.scss'
let cx = classNames.bind(styles);


/**
 * 图标按钮 左方带有一个图标
 * @param {object} props {{
 *  {string} style 对应的样式
 *  {string} className: css名称
 *  {boolean} disabled: 是否禁用
 *  {boolean} fullWidth: 是否全屏宽
 *  {string} value: 日期
 *  {function} onChange:点击时的回调方法 (date)=>{}
 * }}
 */
class DateBtn extends React.Component {
    constructor(...props) {
        super(...props);
        this.state = {
            date: this.props.value || ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            date: e.target.value || ""
        });
        this.props.onChange && this.props.onChange(e.target.value);
    }

    render() {
        const cn = cx({
            'btn-date': true,
            [this.props.className ? this.props.className : ""]: true
        })
        return (
            <BaseBtn {...this.props} className={cn} style={this.props.style}>
                <input value={this.state.date} type="date" onChange={this.handleChange}/>
            </BaseBtn>
        )
    }
}

export default DateBtn;