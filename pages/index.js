import React from 'react';
import Typed from 'react-typed';

import BaseLayout from '../components/layouts/BaseLayout';
import { SocialIcon } from 'react-social-icons';

import { Button, Container, Row, Col } from 'reactstrap';

class Index extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            isFlipping:false
        }

        this.roles = ['Productive', 'Tech Lover', 'Team Player', 'Motivated', 'Fast Learner'];
    }

    componentDidMount() {
        this.animateCard();
    }

    componentWillUnmount() {
        this.cardAnimationInterval && clearInterval(this.cardAnimationInterval);
    }

    animateCard() {
        this.cardAnimationInterval = setInterval(() => {
            this.setState({
                isFlipping: !this.state.isFlipping
            });
        },15000)
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;
        const { isFlipping } = this.state;
        return (
            <BaseLayout className="index-cover" {...this.props.auth} headerType="index" title="Matan Shaviro - Portfolio">
                <div className="main-section">
                    <div className="background-image">
                        <img src="/static/images/background-index.png" />
                    </div>
                    <Container>
                        <Row>
                            <Col md="6">
                            <div className="hero-section">
                                    <div className={`flipper ${isFlipping ? 'isFlipping' : ''}`}>
                                        <div className="front">
                                            <div className="hero-section-content">
                                                <h2>Software Enginner</h2>
                                                <div className="hero-section-content-intro">
                                                    Have a look at my expirence , job history, read about me and get to know me better.
                                                </div>
                                                <div className="social-media">
                                                    <SocialIcon target="_blank" rel="noopener noreferrer" url="https://www.instagram.com/matan3sh/" />
                                                    <SocialIcon target="_blank" rel="noopener noreferrer" url="https://github.com/matan3sh" />
                                                    <SocialIcon target="_blank" rel="noopener noreferrer" url="https://www.youtube.com/channel/UCrvs54FMFNeDUt_Dib9Gbzw?view_as=subscriber" />
                                                    <SocialIcon target="_blank" rel="noopener noreferrer" url="https://www.facebook.com/matan.shaviro" />
                                                    <SocialIcon target="_blank" rel="noopener noreferrer" url="https://www.linkedin.com/in/matan-shaviro-990b0272/" />
                                                </div>
                                            </div>
                                            <img className="image" alt="Matan Shaviro Programming Welcome Picture" src="/static/images/section-1.png" />
                                            <div className="shadow-custom">
                                                <div className="shadow-inner"> </div>
                                            </div>
                                        </div>
                                        <div className="back">
                                            <div className="hero-section-content">
                                                <h2>My Desk Setup</h2>
                                                <div className="hero-section-content-intro">
                                                    I believe in a clean and orderly work environment, which motivates me to work better, faster and more effectively.
                                                </div>
                                            </div>
                                            <img className="image" alt="Matan Shaviro Programming Welcome Picture" src="/static/images/section-2.png" />
                                            <div className="shadow-custom">
                                                <div className="shadow-inner"> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md="6" className="hero-welcome-wrapper">
                                <div className="hero-welcome-text">
                                    <h1>
                                        { isAuthenticated && <span> <b>{user.nickname}</b> </span> }
                                        Welcome<br/>
                                        Get informed, collaborate and discover more about me, see projects I was working on and much more!
                                    </h1>
                                </div>
                                <Typed
                                    loop
                                    typeSpeed={60}
                                    backSpeed={60}
                                    strings={this.roles}
                                    backDelay={1000}
                                    loopCount={0}
                                    showCursor
                                    className="self-typed"
                                    cursorChar="|"
                                />
                                <div className="hero-welcome-bio">
                                    <h2>
                                        Have Fun ☺
                                    </h2>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </BaseLayout>
        );
    }
}

export default Index;