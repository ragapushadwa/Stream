import { Link } from 'react-router-dom';
import React from 'react';
import {connect} from 'react-redux'
import {fetchStreams} from '../../actions'

class StreamList extends React.Component {
    state = {  }
    componentDidMount(){
        this.props.fetchStreams()
    }

    renderList(){
        this.props.streams.map(stream=>{
            return (
                <div className='item' key={stream.id}>
                    <i className='large middle aligned icon camera'/>
                    <div className='content'>
                       <Link to={`/streams/${stream.id}`} className='header'>{stream.title}</Link> 
            <div className='description'>{stream.description}</div>
                    </div>
                </div>
            )
        })

    }

    renderAdmin(stream){
        if(stream.userId===this.props.userId){
            return (
            <div className='right floated content'>
            <Link to={`streams/edit/${stream.id}`} className='ui button primary'>Edit</Link>
            <Link to={`streams/delete/${stream.id}`} className='ui button negative'>DELETE</Link>
            </div>
            )
        }
    }

    renderCreate(){
        if(this.props.isSignedIn){
            return(
                <div style={{textAlign:'right'}}>
                    <Link to='/streams/new' className='ui button primary'>Create Stream
                    </Link>
                </div>
            )
        }
    }
    render() {
        console.log(this.renderList())
        return (
            <div>
                <h2>Streams</h2>
        <div className='ui celled list'>
        {this.props.streams.map(stream=>           
                <div className='item' key={stream.id}>
                    {this.renderAdmin(stream)}
                    <i className='large middle aligned icon camera'/>
                    <div className='content'>
                    <Link to={`/streams/show/${stream.id}`} className='header'>{stream.title}</Link> 
            <div className='description'>{stream.description}</div>
                    </div>
        
                </div>
            
    )}
            </div>
            {this.renderCreate()}
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    console.log(state)
    return {streams:Object.values(state.streams),
            userId:state.auth.userId,
        isSignedIn:state.auth.isSignedIn}
}

export default connect(mapStateToProps,{fetchStreams})(StreamList);