import React from 'react';
import Header from '../shared/Header';
import Head from 'next/head';

const BaseLayout = (props) => {
    const { className, children, isAuthenticated, user, isSiteOwner, title, cannonical } = props;
    const headerType = props.headerType || 'default';

    return (
        <React.Fragment>
            <Head>
                <title>{title}</title>
                <meta name="description" content="My name is Matan Shaviro I am 29 years old from Israel.
                I have a Bachelor Degree in Software Engineering and during the studies 
                I gained experience working on a wide range of technologies and projects from C,C++,C#,Python.
                I'v done a seld study of Web Development like .Net, ReactJS, NextJS, VueJS framework and also Cross-Platform mobile apps using React Native.

                Throughout my working experience, I've always been on the technical side and I really love it. 
                I can testify to myself that I have a passion for high tech, an analytical mindset, and creative ability to pay attention to detail." />
                <meta name="keywords" content="matan portfolio, shaviro portfolio, shaviro developer, matan developer, shaviro programming"/>
                <meta property="og:title" content="Matan Shaviro - Programmer, Developer, Blogger"/>
                <meta property="og:locale" content="en_EU"/>
                <meta property="og:url" content={`${process.env.BASE_URL}`}/>
                <meta property="og:type" content="website"/>
                <meta property="og:description" content="My name is Matan Shaviro I am 29 years old from Israel.
                I have a Bachelor Degree in Software Engineering and during the studies 
                I gained experience working on a wide range of technologies and projects from C,C++,C#,Python.
                I'v done a seld study of Web Development like .Net, ReactJS, NextJS, VueJS framework and also Cross-Platform mobile apps using React Native."/>

                {cannonical && <link rel="cannonical" href={`${process.env.BASE_URL}${cannonical}`}/>}
                <link rel="icon" type="image/ico" href="/static/favicon.ico"/>
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