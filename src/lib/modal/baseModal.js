/**
 * Created by luodh on 2017/6/6.
 */
import React from 'react'
//css
import styles from './baseModal.scss'
import cnTool from 'classnames/bind'
let cx = cnTool.bind(styles);

class BaseModal extends React.Component {
    constructor(...props) {
        super(...props);
    }

    render() {
        return (
            <div className={cx("app-plate")} onClick={this.props.onClose}>
                <div className={cx("base-modal", this.props.className)} onClick={(e) => {
                    e.stopPropagation()
                }}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default BaseModal;
