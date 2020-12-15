import React from 'react';
import Modal from '../Modal'
import history from '../../history' 
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteStream} from '../../actions'
import {fetchStream} from '../../actions'

class StreamDelete extends React.Component{
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id)
    }


   renderAction(){
       return(
        <React.Fragment>
            <button onClick={()=>this.props.deleteStream(this.props.match.params.id)} className='ui button negative'>Delete</button>
            <Link to='/' className='ui button'>Cancel</Link>
        </React.Fragment>
       )
   }

   renderContent(){
       if(!this.props.stream){
           return 'Are u sure want to delete this stream'
       }else{
           return `Are u sure want to delete this stream with title ${this.props.stream.title}`
       }
   }

   render(){
    
        return (
            <div><Modal
            title='Delete Stream' 
            content={this.renderContent()}
             action={this.renderAction()}
             onDismiss={()=>history.push('/')}/>
             </div>
        );
   }
    
}
const mapStateToProps=(state,ownProps)=>{
    return {stream:state.streams[ownProps.match.params.id]}
}
export default connect(mapStateToProps,{
    fetchStream,deleteStream}) (StreamDelete);