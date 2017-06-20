/**
 * Created by dio on 2017/5/19.
 */

import React from 'react'
import ReactDOM from 'react-dom'
    
export const scrollBottom = ({loading: loading, loaded: loaded, onscroll: onscroll}) => Comp => 
    class extends React.Component {
        constructor(...props) {
            super(...props)
            this.onScroll = this.onScroll.bind(this)
            this.loaded = this.loaded.bind(this)
            this.state = {
                loading: false
            }
        }

        componentDidMount() {
            this.dom = ReactDOM.findDOMNode(this.refs.box)
            this.dom.onscroll = this.onScroll
        }

        onScroll(e) {
            console.log('2313')
            let scrollTop = e.target.scrollTop
            if(((this.dom.clientHeight + scrollTop) / this.dom.scrollHeight > .99) && !this.state.loading ) {
                this.setState({
                    loading: true
                }) 
            }
        }

        loaded() {
            this.setState({
                loading: false
            }) 
        }

        render() {
            const screen = {}
            screen[loading] = this.state.loading
            screen[loaded] = this.loaded
            const props = Object.assign({}, this.props, screen)
            return <Comp ref='box' {...props} />
        }    
    }
