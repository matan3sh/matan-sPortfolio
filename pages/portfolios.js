import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import { Link } from '../routes';
import { Col, Row, Card, CardHeader, CardBody, CardText, CardTitle } from 'reactstrap';

import { getPortfolios } from '../actions';

class Portfolios extends Component {

    static async getInitialProps() {
        let portfolios = [];

        try {
            portfolios = await getPortfolios();
        }catch(err){
            console.error(err);
        }
        return {portfolios};
    }

    renderPortfolios(portfolios) {
        return portfolios.map((portfolio, index) => {
            return (
                <Col key={index} md="4">
                    <React.Fragment>
                        <span>
                            <Card className="portfolio-card">
                                <CardHeader className="portfolio-card-header">{portfolio.title}</CardHeader>
                                <CardBody>
                                    <p className="portfolio-card-city">{portfolio.type}</p>
                                    <CardTitle className="portfolio-card-title">{portfolio.programmingLanguage}</CardTitle>
                                    <CardText className="portfolio-card-text">{portfolio.description}</CardText>
                                    <div className="readMore"> </div>
                                </CardBody>
                            </Card>
                        </span>
                    </React.Fragment>
                </Col>
            )
        })
    }

    render() {
        const { portfolios } = this.props;
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage className="portfolio-page" title="My Works">
                    <Row>
                        { this.renderPortfolios(portfolios) }
                    </Row>
                </BasePage>
            </BaseLayout>
        );
    }
}

export default Portfolios;