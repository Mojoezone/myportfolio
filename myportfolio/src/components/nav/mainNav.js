import React from 'react';
import{ NavLink } from 'react-router-dom';
import { routes } from './routes';

//header style
import { headerStyle } from './headerStyle';
import logo from '../../images/logo.svg';

//icons
import FaBars from 'react-icons/lib/fa/bars';
import FaClose from 'react-icons/lib/fa/close';

// this will be single page with mobile, tablet to desktop sidebar or top nav


export class MainNav extends React.Component{
    constructor(props){
        super(props);
        this.state = {isClose: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(prevState => ({
            isClose: !prevState.isClose
        }));
    }

    render(){

        return(
                <div> 
                    {this.state.isClose? (  
                    <FaBars style={{padding: '1em 0 0 1em', fontSize: '2em', color: '#222', position: 'fixed', zIndex:'9999'}}  onClick={this.handleClick} />
                    
                ):(
                     <div style={ headerStyle } >
                        <FaClose style={{color:'#f9f9f9', fontSize: '1.5em', paddingTop: '1.5em'}}  onClick={this.handleClick} />
                        <div style={headerStyle.logoContainer}> 
                            <NavLink to='/'  >
                                <img style={ headerStyle.logoSVG } src={logo} className='logoSVG' alt="logo" /> 
                            </NavLink>
                            <h2 style={headerStyle.h2} >Joe Mo</h2>
                        </div>

                        <ul style={headerStyle.ul}> 
                            {routes.map((route, index) => (
                                <li style={ headerStyle.li } key={index}> 
                                <NavLink
                                    onClick={this.handleClick}
                                    exact 
                                    style={headerStyle.a} 
                                    activeStyle={{color: '#f9f9f9'}} 
                                    to={route.path}
                                >
                                    <span style={headerStyle.icons}>{route.icon }</span>
                                    {route.title}
                                </NavLink>
                                </li>
                            ))} 
                        </ul>
                        </div>
                    )} 
            </div>
        );
    }

}