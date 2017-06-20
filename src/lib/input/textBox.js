/**
 * Created by luodh on 2017/5/18.
 */

import React from 'react'
import searchIcon from './search.png'
import cnTool from 'classnames/bind'
import Tag from 'pwfe-dom/tag'
import styles from './textBox.scss'
let cx = cnTool.bind(styles);

/**
 * 基础按钮
 * @param {object} props {{
 *  扩展原生input控件的属性
 *  {string} type: 同input的type, 额外提供textbox
 *  {string} inType: 预设的输入过滤 name中文字和数字/number数字和点.
 *  {Regexp} reg: 自定义过滤正则
 *  {string} style 对应的样式
 *  {string} className: css名称
 *  {string} sType: 预设的样式   underline灰色下划线
 *  {boolean} fullWidth: 是否全屏宽
 *  {boolean} value: 初始值
 *  {function} onChange:点击时的回调方法 (val)=>{}
 * }}
 */
class TextBox extends React.Component {
    constructor(...props) {
        super(...props);
        this.onChangeHandle = this.onChangeHandle.bind(this);
        this.state = {
            value: `${this.props.value || ""}`
        }
    }

    //提供非受控方式获取值的接口
    getValue() {
        return this.state.value
    }

    onChangeHandle(event) {
        let value, reg;

        switch (this.props.inType) {
            case "name":
                reg = new RegExp(/[^0-9|\u4E00-\u9FA5]/g);
                break;
            case "number":
                reg = new RegExp(/[^0-9.]/g);
                break;
            default:
                this.props.reg && (reg = new RegExp(this.props.reg));
        }
        reg && (event.target.value = event.target.value.replace(reg, ''));
        value = event.target.value;
        this.setState({value: value});
        this.props.onChange && this.props.onChange(value);
    }

    render() {
        let cn = cx({
            ['input-base']: true,
            ['input-full']: this.props.fullWidth,
            ['input-underline']: this.props.sType == "underline",
            [this.props.className ? this.props.className : ""]: true
        });
        let props = Object.assign({}, this.props);
        delete props.inType;
        delete props.sType;
        delete props.reg;
        delete props.fullWidth;

        return (
            <input {...props} value={this.state.value} className={cn} type={this.props.type || "text"}
                   onChange={this.onChangeHandle}/>
        )
    }
}

//特定控件: 1)手机输入框 2)搜索输入框

/**
 * 手机号码输入框
 * @param props
 * {function} onChange:点击时的回调方法 (val,isPhone)=>{}
 * @returns {XML}
 * @constructor
 */
export const PhoneInput = (props) => {
    let onChange = (val) => {
        let isPhone = false;
        if (val.toString().length == 11) {    //todo 手机的判断
            isPhone = true;
        }
        props.onChange(val, isPhone);
    };
    let newProps = Object.assign({}, props, {reg: /[^0-9]/g, maxLength: 11, onChange});
    return (
        <TextBox {...newProps} />
    )
};

/**
 * 搜索输入框
 * @param props
 * {function} onSearch:点击按钮时的回调方法 (val)=>{}
 * {array} list 搜索结果列表dom
 * @returns {XML}
 * @constructor
 */

export class SearchInput extends React.Component {
    constructor(...props) {
        super(...props);
        this.onSearchHandle = this.onSearchHandle.bind(this);
        this.onKeyPressHandle = this.onKeyPressHandle.bind(this);
    }

    componentWillReceiveProps(nextProps, nextState) {
        if (nextProps.list !== this.props.list) {
            return true;
        }
    }

    onSearchHandle() {
        this.props.onSearch && this.props.onSearch(this.textBox.getValue());
    }

    onKeyPressHandle(e) {
        if (e.key == "Enter") {
            e.preventDefault();
            this.onSearchHandle();
        }
    }

    render() {

        let newProps = Object.assign({}, this.props, {type: "search"});
        delete newProps.onSearch;
        return (
            <div className={cx("input-search")}>
                <div className={cx("upper")}>
                    <TextBox ref={(ref) => {
                        this.textBox = ref
                    }} {...newProps} onKeyPress={this.onKeyPressHandle} className={cx("textbox")}/>
                    <div className={styles['btn']} onClick={this.onSearchHandle}><Tag.Icon src="search"/></div>
                </div>
                {this.props.list && <div className={cx("list")}>{this.props.list}</div>}
            </div>
        )
    }
}

export default TextBox;