/**
 * Created by chkui on 2017/6/1.
 */

import React from 'react'
const cn = require('classnames/bind').bind(require('./indexDemo.scss'))

class IndexDemo extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className={cn("info-box")}>
                <div className={cn("info")}>
                    <h1>组件展示Demo</h1>
                    <h2 className={cn("warn")}>注意:</h2>
                    <p className={cn("warn")}>
                        1.img标签使用tag组件中的Img标签来实现{"<Tag.Img/>"}。
                    </p>
                    <br/>
                    <p className={cn("warn")}>
                        2.所有打包成base64编码的站内图标使用Icon标签实现{"<Tag.Icon/>"}。
                    </p>
                </div>
            </div>
        )
    }
}

export default IndexDemo
