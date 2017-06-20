/**
 * Created by dio on 2017/6/1.
 */
import React from 'react'
import styles from './waitLoading.scss'

export const WaitLoading = props => 
    <div className={styles['round']} style={props.style} >
        <div className={styles['center']}>
            <div className={styles['absolute']}>
                <div className={styles['one']}></div>
                <div className={styles['two']}></div>
                <div className={styles['three']}></div>
            </div>
        </div>
    </div>