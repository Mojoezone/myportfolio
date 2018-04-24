import React from 'react';
import {projects} from './projects';
import {ProjectsMap} from './projectMap';
import ScrollToTopOnMount from '../../components/scrollTop';

import {portfolioStyle } from './portfolioStyle';

import htmlLogo  from '../../images/html5.png';
import reactLogo  from '../../images/react.png';
import cssLogo from '../../images/css3.png';
import jsLogo from '../../images/javascript.png';
import nodeLogo from '../../images/nodejs.png';

export class Portfolio extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            products: []
        }
        this.projectsList = this.projectsList.bind(this);
    }

   projectsList = () =>{
       const list = (projects.map((project, index)=>(
           <div style={portfolioStyle.projectsContainer} key={project.id} >
           <ProjectsMap project={project} />
           </div>
       )))
       return (list);
   }
    render(){
        return (
            <div style={portfolioStyle}>
            <ScrollToTopOnMount />
                <h1 style={portfolioStyle.h1}>Portfolio</h1>
                <div style={portfolioStyle.thisWebsite}>
                    <h2 style={portfolioStyle.h2}>Technologies used for this React site</h2>
                    <ul style={portfolioStyle.ulThisWebsite}>
                        <li style={portfolioStyle.li}><img style={portfolioStyle.img} src={htmlLogo} alt='HTML5' /></li>
                        <li style={portfolioStyle.li}><img style={portfolioStyle.img} src={cssLogo} alt='css3' /></li>
                        <li style={portfolioStyle.li}><img style={portfolioStyle.img} src={jsLogo} alt='Javascript, ES6' /></li>
                        <li style={portfolioStyle.li}><img style={portfolioStyle.img} src={reactLogo} alt='Reactjs, React-Router-DOM' /></li>
                        <li style={portfolioStyle.li}><img style={portfolioStyle.img} src={nodeLogo} alt='Nodejs' /></li>
                    </ul>
                </div>
                <div style={portfolioStyle.projects}>
                    {this.projectsList()}
                </div>
            </div>
        )
    }
}
