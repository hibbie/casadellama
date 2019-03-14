import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'

import SkillBar from 'react-skillbars';

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }


    render() {
        const siteTitle = "Thomas Hibbard - hibbie.net"
        const siteDescription = "Thomas Hibbard is a Python and Javascript developer from the Houston, Texas area."
        const skills = [
            {type: "Python", level: 85},
            {type: "DevOps", level: 85},
            {type: "Javascript", level: 75},
            {type: "Woodworking", level: 10},
            {type: "COBOL *", level: 1},
          ];

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>So, I built a new site...</h2>
                        </header>
                        <p>I am a developer from Lake Jackson, Texas.  Since 2007 I have worked in web development. That said, this site is just my little footprint on the web. It's not intended to be a professional web design portfolio as I don't really advertise my talents that way. Instead, think of this page as the irreverent, silly digital business card it is intended to be. </p>
                        <h2>What I do</h2>
                        <p>Currently I am fortunate to be part of a great team of talented developers.  We work with Python (Django) and Javascript (React) as our daily drivers.  I'm always up to meeting other devs and learning what other folks are doing to make their professional lives easier.</p>

                        <SkillBar skills={skills}/>

                        <h2>Get In Touch</h2>
                        <p>I mean that's a thing you could do... I will admit I've been poor at responding to legitimate emails and phone calls.  But it never hurts to try, right?</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="#">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        713-574-9837
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="mailto:hibbie@mac.com">hibbie@mac.com</a>
                                    </li>
                                </ul>
                            </div>
                            <p>* Used to work with a guy who knew COBOL. ;-P</p>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex