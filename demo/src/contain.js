/**
 * Created by chkui on 2017/6/1.
 */
import React from 'react'
import {Link, Route} from 'pwfe-dom/router'
import {routes} from './routes'
const cn = require('classnames/bind').bind(require('./contain.scss'))

const Contain = props =>{
    return(
        <div className='def-height'>
            <div className={cn("nav-list")}>
                <Link to="/page"><div className={cn("nav")}>Page</div></Link>
                <Link to="/button"><div className={cn("nav")}>Button</div></Link>
                <Link to="/input"><div className={cn("nav")}>Input</div></Link>
                <Link to="/label"><div className={cn("nav")}>Lable</div></Link>
                <Link to="/swiper"><div className={cn("nav")}>Swiper</div></Link>
                <Link to="/icon"><div className={cn("nav")}>Icon</div></Link>
                <Link to="/bar"><div className={cn("nav")}>Bar</div></Link>
                <Link to="/scroll"><div className={cn("nav")}>Scroll</div></Link>
                <Link to="/slide"><div className={cn("nav")}>Slide</div></Link>
                <Link to="/pulldown"><div className={cn("nav")}>pullDown</div></Link>
                <Link to="/loading"><div className={cn("nav")}>Loading</div></Link>
                <Link to="/modal"><div className={cn("nav")}>Modal</div></Link>
                <Link to="/tag"><div className={cn("nav")}>Tag</div></Link>
            </div>
            <div className={cn("def-height", "contain")}>
                {routes.map(item=>(<Route key={item.name} exact path={item.path} component={item.component}/>))}
            </div>
        </div>
    )
}

export default Contain