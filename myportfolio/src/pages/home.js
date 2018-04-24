import React from 'react';
import {Link} from 'react-router-dom';
import {Greeting} from '../components/greeting';
import {homeStyle} from './homeStyle';
import {buttonStyle} from '../components/vars/vars';

import ScrollToTopOnMount from '../components/scrollTop';


export class Home extends React.Component{
    render(){
        return (
            <div style={homeStyle}>
            <ScrollToTopOnMount />
                < Greeting />
                <h2>I am Joe Mo</h2>
                <h1>Frontend Developer and Designer</h1>
                <Link to='/about'>
                    <button  style={buttonStyle}>About Me</button>
                </Link>
            </div>
    );
    }
}

