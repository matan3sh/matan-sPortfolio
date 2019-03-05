import React from 'react';
import { Card, CardHeader, CardBody, CardText, CardTitle, Button } from 'reactstrap';
import PortfolioCardDetail from './PortfolioCardDetail';

export default class PortfolioCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          isOpen: false
        };
        this.handleToggel = this.handleToggel.bind(this);
    }

    handleToggel() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const { portfolio ,children } = this.props;
        const { isOpen } = this.state;

        return (
            <span onClick={this.handleToggel}>
                <PortfolioCardDetail toggle={this.handleToggel} portfolio={portfolio} isOpen={isOpen}/>
                <Card className="portfolio-card">
                    <CardHeader className="portfolio-card-header">{portfolio.programmingLanguage}</CardHeader>
                    <CardBody>
                        <p className="portfolio-card-city">{portfolio.type}</p>
                        <CardTitle className="portfolio-card-title">{portfolio.title}</CardTitle>
                        <CardText className="portfolio-card-text">{portfolio.description}</CardText>
                        <div className="readMore">
                            {children}
                        </div>
                    </CardBody>
                </Card>
            </span>
        )
    }
}