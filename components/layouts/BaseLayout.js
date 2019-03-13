import React from 'react';
import Header from '../shared/Header';
import Head from 'next/head';

const BaseLayout = (props) => {
    const { className, children, isAuthenticated, user, isSiteOwner, title } = props;
    const headerType = props.headerType || 'default';

    return (
        <React.Fragment>
            <Head>
                <title>{title}</title>
                <meta name="description" content="My name is Filip Jerga and I am an experienced software engineer and freelance developer. 
                I have a Master's degree in Artificial Intelligence and several years of experience working on a wide range of technologies 
                and projects from C++ development for ultrasound devices to modern mobile and web applications in React and Angular. 
                Throughout my career, I have acquired advanced technical knowledge and the ability to explain programming topics clearly and in detail to a broad audience. 
                I invite you to take my course, where I have put a lot of effort to explain web and software engineering concepts in a detailed, 
                hands-on and understandable way." />
                <meta name="keywords" content="matan portfolio, shaviro portfolio, shaviro developer, matan developer, shaviro programming"/>
                <meta property="og:title" content="Matan Shaviro - Programmer, Developer, Blogger"/>
                <meta property="og:locale" content="en_EU"/>
                <meta property="og:url" content="http://localhost:3000"/>
                <meta property="og:type" content="website"/>
                <meta property="og:description" content="My name is Filip Jerga and I am an experienced software engineer and freelance developer. 
                I have a Master's degree in Artificial Intelligence and several years of experience working on a wide range of technologies 
                and projects from C++ development for ultrasound devices to modern mobile and web applications in React and Angular."/>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            </Head>
            <div className="layout-container" >
                <Header className={`port-nav-${headerType}`}
                    isAuthenticated={isAuthenticated}
                    user={user}
                    isSiteOwner={isSiteOwner} />
                <main className={`cover ${className}`}>
                    <div className="wrapper">
                        {children}
                    </div>
                </main>
            </div>
        </React.Fragment>
    )
}

export default BaseLayout;