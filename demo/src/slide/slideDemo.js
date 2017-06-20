import React from 'react'
import Slide from '../../../src/slide'
import { Li, Api, Tr } from '../icon/iconDemo'
import styles from './slideDemo.scss'

const set = {
    speed: 1.5, // 切换速度
    delay: 3, // 停留时间
    autoplay: true, // 是否自动轮播
    dots: true, // 是否显示下方的轮播点
}

const img = [
    {
        alt: '1',
        src: 'http://file.mahoooo.com/res/file/201705023152327K7Q3TS9RSQ9PQNXD7NF93C86DC8E5561C6B3D884EBA0FB4DDCD868',
        url: '/'
    },
    {
        alt: '2',
        src: 'http://file.mahoooo.com/res/file/201705023152329K5HL9SCBWSAE0PAT0ZE7E4E5508F5CD8EC7AEA62308E52852656CD',
        url: '/'
    },
    {
        alt: '3',
        src: 'http://file.mahoooo.com/res/file/201705023152331G3X2D9KZ07TKM4LBAE0A942CC1243001ADEEC942003AADF99E9D61',
        url: '/'
    },
    {
        alt: '4',
        src: 'http://file.mahoooo.com/res/file/201705023152334C1N4564NYI82KETT3TD35A03CF2203FFFA216B8A78D5C1F27E0CDF',
        url: '/'
    },
    {
        alt: '5',
        src: 'http://file.mahoooo.com/res/file/2017050231523367SB9I705AR4JQX6MNL2936714A75DCEFFA1F4A0B56F353DFB02335',
        url: '/'
    },
]

const SlideDemo = () => 
    <section style={{marginTop: '20px'}}>
        <Li desc='SlideList 轮播组件' comp={[
            <Slide.SlideList set={set} img={img} height='15rem' />,
        ]} set={[
            {param: 'style', example: '{{width: `50px`}}', desc: '自定义样式', nec: 'false'},
            {param: 'height', example: '10rem', desc: '定义轮播框的高度', nec: 'true'},
            {param: 'set', example: '{speed:1.5, delay:3, autoplay:true, dots:true}', desc: '轮播配置，不传则使用默认参数', nec: 'false'},
            {param: 'img', example: '[{alt:`1`, src:`jojo.jpg`, url: `/`}, {alt:`2`, src:`dio.jpg`, url: `/`}]', desc: '轮播图片组', nec: 'true'},
        ]} /> 
    </section>

export default SlideDemo