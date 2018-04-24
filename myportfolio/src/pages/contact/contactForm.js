import React from 'react';
import Field from './field'
import Button from './button'

class MyContactForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name: '',
            email: '',
            message: ''
        }

        this.updateField = this.updateField.bind(this);
    }

    updateField(field, value){
        this.setState({
            [field]: value
        })
    }

    render(){

        const formStyle={
            textAlign: 'left',
            margin: '0 15%',
            flex: '2',
            flexWrap: 'wrap',
            marginBottom: '2em'
        }

        return(
            <div style={formStyle}>
                <h2>Contact Form</h2>
                <form>
                    <Field
                    label='Name' 
                    onChange={event=>this.updateField('name', event.target.value)} 
                    value={this.state.name} />
                    <Field
                    label='Email' 
                    onChange={event=>this.updateField('email', event.target.value)} 
                    value={this.state.email} />
                    <Field
                    label='Message' 
                    onChange={event=>this.updateField('message', event.target.value)}
                    textarea={true} 
                    value={this.state.message}  />
                    <Button 
                    email='mojoezone@gmail.com' 
                    formValues={this.state} />
                </form>
            </div>
        )
    }
}

export default MyContactForm;