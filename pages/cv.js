import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import { Row, Col } from 'reactstrap';

class CV extends Component {
    render() {
        return (
            <BaseLayout title="Matan Shaviro - Learn About My CV" {...this.props.auth} className="cv-page">
                <BasePage title="Preview of My CV">
                    <Row>
                        <Col md={{size: 8, offset: 2}}>
                            <div className="cv-title">
                                <a download="matan_cv.pdf" className="btn btn-success" href="/static/matan_cv.pdf">
                                    Download
                                </a>
                            </div>
                            <iframe style={{width: '100%', height: '800px'}} src="/static/matan_cv.pdf">
                            </iframe>
                        </Col>
                    </Row>
                </BasePage>
            </BaseLayout>
        );
    }
}

export default CV;