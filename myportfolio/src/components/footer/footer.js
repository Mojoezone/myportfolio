import React from 'react';
import { NavLink } from 'react-router-dom';


import { socialNav } from './socialnav';
import {footerStyle } from './footerStyle';
import { routes } from '../nav/routes';
import FaCopyright from 'react-icons/lib/fa/copyright';

export class Footer extends React.Component{
    render(){
        let currentYear = new Date().getFullYear();
        
        return(
            <div style={footerStyle}>
            <div style={footerStyle.footerContainer}>
                <div style={footerStyle.footerNav}>
                    <ul>
                        {routes.map((route, index) => (
                            <li style={footerStyle.li} key={ index }>
                                <NavLink 
                                    exact
                                    to={route.path}
                                    activeStyle={{color: '#f9f9f9'}}
                                    style={footerStyle.a}
                                >
                                <span style={footerStyle.span}>
                                    {route.icon}
                                </span>
                                {route.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                <div style={footerStyle.footerNav}>
                    <ul>
                        {socialNav.map((link, index)=>(
                            <li style={footerStyle.li} key={index}>
                                <a href={link.url} style={footerStyle.a} target={link.isOpenNewPage}>
                                    <span style={footerStyle.span}>
                                    {link.icon}
                                    </span> 
                                    {link.title}
                                </a>
                            </li>
                        ))}
                        
                    </ul>
                </div>
                </div>

                <p style={footerStyle.copyright}><FaCopyright /> {currentYear} mojoezone.com All Right Reserved </p>

            </div>
        );
    };
};
