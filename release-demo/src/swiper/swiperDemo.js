/**
 * Created by ljc on 2017/5/16 16:14.
 */
import React from 'react'
import {BaseSwiper, SwiperItem} from '../../../swiper'
import styles from './swiperDemo.scss'
import Icon from '../../../icon'

import cnTool from 'classnames/bind'
const cn = cnTool.bind(styles)

/**
 * 滑块视图演示
 * @param props
 * @returns {XML}
 * @constructor
 */
const SwiperDemo = (props) => {
    return (
        <div>
            <p style={{textAlign:'center'}}>左右滑动</p>
            <div className={styles['panel']}>
                <BaseSwiper>
                    <SwiperItem className={cn('page')}>
                        <div className={cn('page-item')}>
                            <h1>A</h1>
                            <Icon.CornerIcon text='1' bgColor='#44BDFC' length='2rem' tLength='2' />
                        </div>

                    </SwiperItem>
                    <SwiperItem className={cn('page')}>
                        <div className={cn('page-item')}>
                            <h1>B</h1>
                            <Icon.CornerIcon text='2' bgColor='#92D551' length='2rem' tLength='2' />
                        </div>
                    </SwiperItem>
                    <SwiperItem className={cn('page')}>
                        <div className={cn('page-item')}>
                            <h1>C</h1>
                            <Icon.CornerIcon text='3' bgColor='#FFB72C' length='2rem' tLength='2' />
                        </div>
                    </SwiperItem>
                    <SwiperItem className={cn('page')}>
                        <div className={cn('page-item')}>
                            <h1>D</h1>
                            <Icon.CornerIcon text='4' bgColor='#438F5B' length='2rem' tLength='2' />
                        </div>
                    </SwiperItem>
                    <SwiperItem className={cn('page')}>
                        <div className={cn('page-item')}>
                            <h1>E</h1>
                            <Icon.CornerIcon text='5' bgColor='#FF0000' length='2rem' tLength='2' />
                        </div>
                    </SwiperItem>
                </BaseSwiper>
            </div>

        </div>
    )
};

export default SwiperDemo