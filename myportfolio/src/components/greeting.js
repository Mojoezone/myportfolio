import React from 'react';
import FaCoffee from 'react-icons/lib/fa/coffee';
import FaSunO from 'react-icons/lib/fa/sun-o';
import FaBed from 'react-icons/lib/fa/bed';
import MdSentimentVerySatisfied from 'react-icons/lib/md/sentiment-very-satisfied';

export class Greeting extends React.Component{
   render(){ 
        let currentDate = new Date();
        let currentTime = currentDate.getHours();
        let greeting;

        if (currentTime === 24 && currentTime <= 5){
            greeting  = <h2 style={{color: '#222', marginTop: '0'}}><FaBed style={{paddingRight: '5px'}} />Go to Bed</h2>;
        }else if(currentTime >= 5  && currentTime <= 12){
            greeting  = <h2 style={{color: '#fff400', marginTop: '0'}}><FaCoffee style={{paddingRight: '5px'}} />Good Morning</h2>;
        }else if(currentTime >= 12 && currentTime <= 17){
            greeting  = <h2 style={{color: '#ffc100', marginTop: '0'}}><FaSunO style={{paddingRight: '5px'}} />Good Afternoon</h2>;
        }else{
            greeting = <h2 style={{color: '#7f6d00', marginTop: '0'}}><MdSentimentVerySatisfied style={{paddingRight: '5px'}} />Good Evening</h2>;
        }

    return ( 
          <div>
             { greeting }
          </div>
        )
}

}