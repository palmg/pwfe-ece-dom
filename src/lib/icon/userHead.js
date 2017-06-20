/**
 * Created by dio on 2017/5/15.
 */
import React from 'react'
import cnTool from 'classnames/bind'
import Tag from 'pwfe-dom/tag'
const cx = cnTool.bind(require('./userHead.scss'))

/**
 * 用户头像组件：
 * @param {object} props {{
 *  {object} style: 自定义图标框样式
 *  {string} img: 用户头像url
 *  {string} className： 修改css接口
 *  {string} sex: 用户性别（男：male，女：female）
 *  {string} name: 用户姓名（不传递则不显示）
 *  {string} btn: 右上角删除图标（show为显示，不传不显示）
 *  {function} onClick: 点击头像的回调
 *  {function} onRemove: 点击删除图标的回调
 * }}
 */
export const UserHead = props => {
    //TODO 如果这里重复被渲染会导致反复创建很多相同的方法，只有到用户不操作时才开始垃圾回收或内存泄漏
    const remove = () => {
        props.onRemove && props.onRemove()
    }

    const onclick = () => {
        props.onClick && props.onClick()
    }

    let cn = cx({
        'user-head-box': true,
        [props.className ? props.className : '']: true
    })

    const {style, img, sex, name, btn} = props

    return (
        <div className={cn}>
            <div className={cx('img-box')} style={style}>
                {img ? (<Tag.Img className={cx('img')} src={img} onClick={onclick}/>) :
                    (<Tag.Icon className={cx('img')}  src="defaultAvatar" onClick={onclick}/>)}
                { sex && (sex === 'male' ?
                    <Tag.Icon className={cx('icon')} src="userMaleIcon"/> :
                    <Tag.Icon className={cx('icon')} src="userFemaleIcon"/>) }
                { btn && <span className={cx('remove')} onClick={remove}/>}
            </div>
            { name && <p className={cx('user-name')}>{name}</p> }
        </div>
    )
}
    

