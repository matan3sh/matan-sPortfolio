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

        this.roles = ['Developer', 'Tech Lover', 'Team Player', 'ReactJS'];
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
        },30000)
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
                                                    Have a look at my portfolio and job history
                                                </div>
                                                <div className="social-media">
                                                    <SocialIcon target="_blank" rel="noopener noreferrer" url="https://www.instagram.com/matan3sh/" />
                                                    <SocialIcon target="_blank" rel="noopener noreferrer" url="https://github.com/matan3sh" />
                                                    <SocialIcon target="_blank" rel="noopener noreferrer" url="https://www.youtube.com/channel/UCrvs54FMFNeDUt_Dib9Gbzw?view_as=subscriber" />
                                                    <SocialIcon target="_blank" rel="noopener noreferrer" url="https://www.facebook.com/matan.shaviro" />
                                                    <SocialIcon target="_blank" rel="noopener noreferrer" url="https://www.linkedin.com/in/matan-shaviro-990b0272/" />
                                                </div>
                                            </div>
                                            <img className="image" src="/static/images/section-1.png" />
                                            <div className="shadow-custom">
                                                <div className="shadow-inner"> </div>
                                            </div>
                                        </div>
                                        <div className="back">
                                            <div className="hero-section-content">
                                                <h2>My Desk Setup</h2>
                                                <div className="hero-section-content-intro">
                                                    Professional and top quality service in web development
                                                </div>
                                            </div>
                                            <img className="image" src="/static/images/section-2.png" />
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
                                        Welcome to the portfolio website of Matan Shaviro.
                                        Get informed, collaborate and discover projects I was working on through the years!
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
                                    <h1>
                                        Let's take a look on my work.
                                    </h1>
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