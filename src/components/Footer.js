import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://twitter.com/hibb" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="https://github.com/hibbie/" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="https://gitlab.com/hibbie" className="icon fa-gitlab"><span className="label">Gitlab</span></a></li>
                        <li><a href="https://www.linkedin.com/in/hibbie" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
                        <li><a href="mailto:hibbie@mac.com" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
