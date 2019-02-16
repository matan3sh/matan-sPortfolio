import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

class Secret extends React.Component {

    renderSecretPage() {
        const { isAutheticated } = this.props.auth;
        
        if(isAutheticated) {
            return (
                <BaseLayout {...this.props.auth}>
                    <BasePage>
                        <h1>I am Secret Page</h1>
                        <p>Secret Content Here</p>
                    </BasePage>
                </BaseLayout>
            )
        } else {
            return (
                <BaseLayout {...this.props.auth}>
                    <BasePage>
                        <h1>You are not authenticated. Please Login to access this page.</h1>
                    </BasePage>
                </BaseLayout>
            )
        }
    }

    render() {
        return this.renderSecretPage()
    }
}

export default Secret;