import React from 'react';
import {connect} from 'react-redux'
import {editStream} from '../../actions'
import {fetchStream} from '../../actions'
import StreamForm from './StreamForm'

class StreamEdit extends React.Component {
    state = {  }
    
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id)
    }

    onSubmit=(formValues)=>{
        this.props.editStream(this.props.match.params.id,formValues )
    }
    render() {
        if(!this.props.stream){
            return<div>Loading</div>
        }
        return (
            <div><h3>Edit a Stream</h3><StreamForm initialValues={{title:this.props.stream.title , description:this.props.stream.description  }} onSubmit={this.onSubmit}/></div>
        );
    }
}
const mapStateToProps = (state,ownProps)=>{
   
    return {stream:state.streams[ownProps.match.params.id]}
}
export default connect (mapStateToProps,{
editStream,fetchStream
})(StreamEdit); 