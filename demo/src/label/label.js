/**
 * Created by ljc on 2017/5/15 13:47.
 */
import React from 'react'
import Label from '../../../src/label'
import styles from './label.scss'

import labelBadge from '../../../res/icon/label-badge.png'

import {connect} from 'react-redux'

const LabelDemo = (props) => {
    return (
        <div>
            <div className={styles['label-panel']}>
                <Label.BaseLabel label="排行榜分" name="392"></Label.BaseLabel>
                <Label.BaseLabel label="全国排名" name="190293"></Label.BaseLabel>
                <Label.BaseLabel label="累计分" name="2983"></Label.BaseLabel>
                <Label.BaseLabel label="当前等级" name="青铜I" icon={labelBadge} noneBorderBottom></Label.BaseLabel>
            </div>

            <div className={styles['info-panel']}>
                <Label.InfoLabel label="档案编号：" name="2017000001"></Label.InfoLabel>
                <Label.InfoLabel label="周大大"></Label.InfoLabel>
                <Label.InfoLabel label="6岁"></Label.InfoLabel>
                <Label.InfoLabel label="湖南长沙" noneBorderBottom></Label.InfoLabel>
            </div>

            <div className={styles['label-panel']}>
                <Label.TextLabel label="课程时间：" name="2016.3.8  9：00~15：30 可用"></Label.TextLabel>
                <Label.TextLabel label="课程地点：" name="桃花岭公园"></Label.TextLabel>
            </div>

            <div className={styles['cell-panel']}>
                <Label.CellLabel label="全部订单" onClick={(event) => alert('点击进入下一页')}></Label.CellLabel>
                <Label.CellLabel label="我的钱包" name="￥49.95" noneNext></Label.CellLabel>

                <Label.CellLabel label="邀请好友" name="邀请好友拿奖励哦" noneMarginBottom
                                 onClick={(event) => alert('邀请好友拿奖励哦')}></Label.CellLabel>
                <Label.CellLabel label="我的收藏" noneMarginBottom></Label.CellLabel>
                <Label.CellLabel label="我的收藏"></Label.CellLabel>
            </div>
        </div>
    )
};

export default LabelDemo