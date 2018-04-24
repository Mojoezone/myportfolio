import React from 'react';
import {portfolioStyle } from './portfolioStyle';
import {ProjectsModals} from './modal';

//import Modal from 'react-modal';

import MdMoreVert from "react-icons/lib/md/more-vert";



// use toggle to work it out with class react extends
export class ProjectsMap extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            modalIsOpen: false
        }

    this.toggle = this.toggle.bind(this);
    }

    toggle(){
       this.setState(prevState =>({
            modalIsOpen: !prevState.modalIsOpen
        }))
        
    }
    render(){

       return( 
             <div className={this.props.project.classname} style={portfolioStyle.projectsMapContainer} key={this.props.project.id} >
                   {this.state.modalIsOpen === false?(
                    <div style={{background: `url(${this.props.project.imgLink}) no-repeat center center`, width: '100%', height: 'auto', flex: '1', backgroundSize: 'cover' }}>
                        <div style={portfolioStyle.projectsTextContainer}>
                        
                           <h2 onClick={this.toggle} style={portfolioStyle.projectsTextH2}>{this.props.project.title} <MdMoreVert /></h2>
                            <ul style={portfolioStyle.projectsUl}>
                                
                                    {this.props.project.skills.map((logo, index)=>(
                                        
                                            <li style={portfolioStyle.projectsLi} key={this.props.project.id + logo.id.toString()}>
                                                <img style={portfolioStyle.projectsImg} src={logo.logos} alt={this.props.project.title + ' skills'} />
                                            </li>
                                        
                                    ))}
                                
                            </ul>
                            
                        </div>
              
                </div>
           ):(
                    <ProjectsModals 
                    project={this.props.project} 
                    toggle={this.toggle}
                    />
                ) } 
                </div>
);
}
}