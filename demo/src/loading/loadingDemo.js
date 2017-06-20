import React from 'react'
import Loading from '../../../src/loading'
import { Li, Api, Tr } from '../icon/iconDemo'
import styles from './loadingDemo.scss'

const LoadingDemo = () => 
    <section style={{marginTop: '20px'}}>
        <Li desc='RoundLoading 圆形加载组件' comp={[
            <div style={{height: '10rem'}}>
                <Loading.RoundLoading style={{height: '10rem'}} />
            </div>,
        ]}/>
        <Li desc='WaitLoading 圆形等待组件' comp={[
            <div style={{height: '10rem', position: 'relative', width: '100%'}}>
                <Loading.WaitLoading style={{height: '5rem', background: '#333'}} />
            </div>,
        ]}/>  
    </section>

export default LoadingDemo