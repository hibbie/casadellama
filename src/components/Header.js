import React from 'react'

import Footer from './Footer'
import hibbie from '../assets/images/llama/hibbie.png'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={hibbie} alt="" /></a>
                    <h1><strong>Hi, I'm Hibbie</strong>
                      &nbsp; This site is my little space on the web.<br />
                    </h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
