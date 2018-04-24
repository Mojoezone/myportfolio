import React from 'react';
//import propTypes from 'prop-types'; 

class Button extends React.Component{
    // static propTypes = {
    //     email: PropTypes.string.isRequired,
    //     formValues: PropTypes.shape({
    //       name: PropTypes.string.isRequired,
    //       email: PropTypes.string.isRequired,
    //       message: PropTypes.string.isRequired,
    //     }).isRequired,
    //   }

      constructor(props){
          super(props);
          this.state={
              isClicked: false
          }
          this.logFormToConsole = this.logFormToConsole.bind(this)
      }

      logFormToConsole(event){
        console.log('Form Values', this.props.formValues);
        this.setState({ isClicked: true });
      }

      render(){
          var btStyle;
          var btDisabled={
              border: 'none',
              color: '#808080',
              borderRadius: '5px',
              padding: '.5em 1.3em'
          }
          var btEnable={
            color: '#f9f9f9', 
            backgroundColor: '#4A606E',
            borderRadius: '5px',
            padding: '.5em 1.3em'
          }
          
          if(this.state.isClicked){
              btStyle=btDisabled
          }else{
              btStyle=btEnable
          }

          return (
            <button
            style={btStyle}
            disabled={this.state.isClicked}
            onClick={this.logFormToConsole}
            >
            Contact Me
            </button>
          )
      }
}

export default Button;