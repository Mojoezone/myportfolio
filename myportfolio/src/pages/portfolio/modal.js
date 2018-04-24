import React from 'react';
import {portfolioStyle } from './portfolioStyle';

import TiExport from 'react-icons/lib/ti/export';
import FaClose from 'react-icons/lib/fa/close';


export class  ProjectsModals  extends React.Component{
    render(){
    return( 
    
        <div style={portfolioStyle.projectsModal} key={this.props.project.id}>
        <FaClose onClick={this.props.toggle} style={{cursor: 'pointer'}} />
        <h3>What I did</h3>
        <p>{this.props.project.description}</p>
        <h3>Accomplishment</h3>
        <p>{this.props.project.accomplishment}</p>
        <h4><a style={portfolioStyle.projectsModalAtag} href={this.props.project.urlLink} target='_blank'><TiExport />view online</a></h4>
        </div>

)
}
}