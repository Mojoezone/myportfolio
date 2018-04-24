import React from 'react';
import {skillsLogo, education, workHistory} from './skillsLogo';
import Resume from '../../images/mo_joe_resume.pdf';

import {aboutStyle} from './aboutStyle';

import ScrollToTopOnMount from '../../components/scrollTop';

export class About extends React.Component{
    render(){
        const htmls = skillsLogo.html;
        const csss = skillsLogo.css;
        const jss = skillsLogo.javascript;
        const others = skillsLogo.others;

        return (
            <div style={aboutStyle}>
                <ScrollToTopOnMount />
                <blockquote style={aboutStyle.quote}>"Hard work beats talent when talent fails to work hard." <small>Tim Notke</small></blockquote>
                <section>
                    <h2 style={aboutStyle.h2}>About Me</h2>
                    <p style={aboutStyle.p}>I learn by inventing my own wheels, I use someone else functions and ideas to improve my own skills. It's not about beautiful or modern, it's all about UX and UI.</p>
                </section>

                <section>
                    <h2 style={aboutStyle.h2}>Skills</h2>
                    <div style={aboutStyle.skillDiv}>
                        <h2 style={aboutStyle.underline}>HTML</h2>
                        
                        <div style={aboutStyle.figureContainer}>
                        {htmls.map((html, index)=>{
                           return( 
                           <figure style={aboutStyle.figure} key={index}>
                            <img style={aboutStyle.img}  src={html.urlLink} alt={html.title} />
                            <h4>{html.title}</h4>
                            </figure>
                            
                            )
                        })}
                        </div>
                    </div>

                    <div style={aboutStyle.skillDiv}>
                    <h2 style={aboutStyle.underline}>CSS</h2>
                    <div style={aboutStyle.figureContainer}>
                        {csss.map((css, index)=>{
                           return( 
                           <figure style={aboutStyle.figure} key={index}>
                            <img style={aboutStyle.img}  src={css.urlLink} alt={css.title} />
                            <h4>{css.title}</h4>
                            </figure>
                            
                            )
                        })}
                    </div>
                    </div>

                    <div style={aboutStyle.skillDiv}>
                    <h2 style={aboutStyle.underline}>JavaScript</h2>
                    <div style={aboutStyle.figureContainer}>
                        {jss.map((js, index)=>{
                           return( 
                             
                           <figure style={aboutStyle.figure} key={index}>
                            <img style={aboutStyle.img}  src={js.urlLink} alt={js.title} />
                            <h4>{js.title}</h4>
                            </figure>
                            
                            )
                        })}
                        </div>
                    </div>
                    
                        <div style={aboutStyle.skillDiv}>
                        <h2 style={aboutStyle.underline}>Others</h2>
                        <div style={aboutStyle.figureContainer}>
                        {others.map((other, index)=>{
                           return( 
                            
                           <figure style={aboutStyle.figure} key={index}>
                            <img style={aboutStyle.img} src={other.urlLink} alt={other.title} />
                            <h4>{other.title}</h4>
                            </figure>
                            
                            );
                        })}
                        </div>
                        </div>

                </section>

                <section>

                    <h2 style={aboutStyle.h2}>Education</h2>
                    {education.map((school, index)=>{
                     return (
                         <div style={aboutStyle.education} key={index}>
                             <h4 style={aboutStyle.underline}>{school.school}</h4>
                             <h3>{school.course}</h3>
                        </div>
                        );
                        })}

                </section>

                <section style={{borderBottom: '1px solid #4A606E'}}>
                    <h2 style={aboutStyle.h2}>Work History</h2>
                        {workHistory.map((work, index) => {
                            return (
                                <div style={aboutStyle.education} key={index}>
                                    <h3 style={aboutStyle.underline}>{work.company}</h3>
                                    <h5>{work.duration}</h5>
                                    <h4>{work.duties}</h4>
                                </div>
                            )
                        })}
                    </section>

                   <div style={aboutStyle.buttonContainer}> <a href={Resume} download='Joe Mo Resume'  style={aboutStyle.buttonAtag}>Download PDF Resume</a></div>
            </div>
        )
    }
}

