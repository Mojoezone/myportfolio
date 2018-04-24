import React from 'react';
import FaEnvelopeSquare from 'react-icons/lib/fa/envelope-square';
import FaPhone from 'react-icons/lib/fa/phone';

class MyInfo extends React.Component{
    
    render(){
        const myInfoStyle ={
            padding: '0 5%',
            border: '1px solid #4A606E',
            textAlign: 'left',
            boxShadow: '1px 1px 1px #222',
            flex: '1',
            flexWrap: 'wrap',
            li:{
                listStyle: 'none',
                paddingBottom: '1em'
            },
            a:{
                color: '#4A606E',
                textDecoration: 'none',
            }
        }

        return(
            <div style={myInfoStyle}>
            <h2>My contact Information</h2>
            <h4>I am Joe Mo</h4>
            <h4>A Frontend Web Developer and Designer</h4>
            <ul>
            <li style={myInfoStyle.li}><a style={myInfoStyle.a} href="mailto: mojoezone@gmail.com"><FaEnvelopeSquare />mojoezone@gmail.com</a></li>
            <li style={myInfoStyle.li}><a style={myInfoStyle.a} href="tel: 6193016392"><FaPhone />(619)301-6392</a></li>
            </ul>
            </div>
        )
    }
}

export default MyInfo;