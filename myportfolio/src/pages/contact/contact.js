import React, {Component} from 'react';
import ScrollToTopOnMount from '../../components/scrollTop';

import MyInfo from './myInfo';
import MyContactForm from './contactForm';


import contactStyle from './contactStyle';

export class Contact extends React.Component{

    render(){
        return (
            <div style={contactStyle}>
                <ScrollToTopOnMount />
                <h1 style={contactStyle.h1}>Contact Me</h1>
                <div style={contactStyle.displayFlex}> 
                    <MyContactForm />
                    <MyInfo />
                </div>
            </div>
    )
    }
}

