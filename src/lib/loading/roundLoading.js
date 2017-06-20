/**
 * Created by dio on 2017/5/25.
 */
import React from 'react'
import styles from './roundLoading.scss'

export const RoundLoading = props => 
    <div className={styles['round']} style={props.style} >
        <div className={styles['center']}>
            <div className={styles['absolute']}>
                <div className={styles['one']}></div>
                <div className={styles['two']}></div>
                <div className={styles['three']}></div>
                <div className={styles['four']}></div>
            </div>
        </div>
    </div>