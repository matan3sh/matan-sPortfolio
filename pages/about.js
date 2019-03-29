import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import { Row, Col } from 'reactstrap';

class About extends Component {
    render() {
        return (
            <BaseLayout title="Matan Shaviro - Learn More About Me" {...this.props.auth}>
                <BasePage className="about-page">
                    <Row className="mt-5">
                        <Col md="6">
                            <div className="left-side">
                                <img className="profile-image fadein" src="/static/images/profile.png" />
                                <h1 className="title fadein">Hello, Welcome</h1>
                                <h4 className="subtitle fadein">To About Me Page</h4>
                                <p className="subsubTitle fadein">Feel free to read short description about me.</p>
                            </div>
                        </Col>
                        <Col md="6">
                            <div className="fadein">
                                <p>My name is Matan Shaviro I am 29 years old from Israel. </p>
                                <p>
                                    I have a Bachelor Degree in Software Engineering and during the studies I gained experience working
                                    on a wide range of technologies and projects from C,C++,C#,Python. 
                                    <br/>I'v done a seld study of Web Development like .Net, ReactJS, NextJS, VueJS framework 
                                    and also Cross-Platform mobile apps using React Native.
                                </p>
                                <p>
                                    Throughout my working experience, I've always been on the technical side and I really love it.
                                    I can testify to myself that I have a passion for high tech, an analytical mindset, and creative ability to pay attention to detail.
                                </p>
                            </div>
                        </Col>
                    </Row>

                </BasePage>
            </BaseLayout>
        );
    }
}

export default About;