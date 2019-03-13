import React from 'react';
import { Card, CardHeader, CardBody, CardText, CardTitle, CardImg, Button } from 'reactstrap';
import PortfolioCardDetail from './PortfolioCardDetail';
import { shortenText } from '../../helpers/utils';


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
                    <CardHeader className="portfolio-card-header">{portfolio.type}</CardHeader>
                    <CardBody>
                        <p className="portfolio-card-city">{portfolio.programmingLanguage}</p>
                        <CardTitle className="portfolio-card-title">{portfolio.title}</CardTitle>
                        <CardImg top style={{height: '150px'}} width="100%" src={portfolio.picture1} alt="Card image cap" />
                        <CardText className="portfolio-card-text">{shortenText(portfolio.description,96)}</CardText>
                        <div className="readMore">
                            {children}
                        </div>
                    </CardBody>
                </Card>
            </span>
        )
    }
}