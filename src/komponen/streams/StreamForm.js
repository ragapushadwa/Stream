import React from 'react';
import {Field,reduxForm} from 'redux-form'


class StreamForm extends React.Component {
    state = {  }

    renderError({error,touched}){
        if(touched && error){
            return <div className='ui error message'>
                <div className='header'>{error}</div>
            </div>
        }
    }

    renderInput=(formProps)=>{
        console.log(formProps.meta)
        return (
            <div className='field'>
            <label>{formProps.label}</label>
            <input {...formProps.input} autoComplete='off'/>
            {this.renderError(formProps.meta)}
            </div>)
    }

    onSubmit=(formValues)=>{
        this.props.onSubmit(formValues)
    }
    render() {
        
        return (
           <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error'>
               <Field name='title' component={this.renderInput} label='Enter Title'/>
               <Field name='description' component={this.renderInput} label='Enter Description'/>
               <button className='ui button'>Submit</button>
           </form>
        );
    }
}
const validate = (formValues)=>{
    const errors={}
    if(!formValues.title){
        errors.title='You must enter the title'
    }
    if(!formValues.description){
        errors.description='You must enter the description'
    }

    return errors
}

const formWrapped = reduxForm({
    form:'streamForm',
    validate:validate
}) (StreamForm);

export default (formWrapped)