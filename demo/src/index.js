/**
 * Created by chkui on 2017/5/11.
 * 小鹰会前端组件演示
 */

import React from 'react'
import {render} from 'react-dom';
import {Provider} from 'react-redux'
import cnTool from 'classnames/bind'
import {Router, history} from 'pwfe-dom/router'
import {buildStore} from 'pwfe-dom/flux'
import Contain from './contain'
import {courseOutingList} from './reducer'

import './app.scss'
import './demo.scss'

const store = buildStore({courseOutingList}, window.REDUX_STATE);
render(
    <Provider store={store}>
        <Router history={history}>
            <Contain />
        </Router>
    </Provider>,
    document.getElementById('root')
)
