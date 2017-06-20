/**
 * Created by luodh on 2017/5/17.
 */
import React from 'react'
//样式
import cnTool from 'classnames/bind'
import styles from './numAdjust.scss'
let cx = cnTool.bind(styles);
/**
 * 数值调节器
 * @param {object} props {{
 *  {number}  value 当前数值
 *  {number}  min 最小值
 *  {number}  max 最大值
 *  {boolean} editable 是否可编辑
 *  {string} style 对应的样式
 *  {string} className: css名称
 *  {function} onChange:点击时的回调方法 (num)=>{}
 * }}
 */
class NumAdjust extends React.Component {
    constructor(...props) {
        super(...props);

        let value = this.props.value || 0;
        this.props.min && (this.props.min > value) && (value = this.props.min);
        this.props.max && (this.props.max < value) && (value = this.props.max);
        this.state = {
            value: value
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick(opType) {

        let value = this.state.value;
        value += (opType === "add") ? 1 : -1;
        this.props.min && (this.props.min > value) && (value = this.props.min);
        this.props.max && (this.props.max < value) && (value = this.props.max);

        this.setState({value: value});
        this.props.onChange && this.props.onChange(value);
    }

    handleChange(e) {
        let value = parseFloat(e.target.value || 0);
        this.props.min && (this.props.min > value) && (value = this.props.min);
        this.props.max && (this.props.max < value) && (value = this.props.max);

        this.setState({value: value});
        this.props.onChange && this.props.onChange(value);
    }

    render() {

        const cn = cx({
            'num-adjust': true,
            [this.props.className ? this.props.className : ""]: true
        });

        return (
            <div className={cn} style={this.props.style}>
                <button className={styles['minus']} onClick={this.handleClick.bind(this, "minus")}>-</button>
                <input disabled={this.props.editable === false} onChange={this.handleChange} value={this.state.value}
                       type="number"/>
                <button className={styles['add']} onClick={this.handleClick.bind(this, "add")}>+</button>
            </div>
        )
    }
}

export default NumAdjust;