import React from 'react'
import ReactDOM from 'react-dom'


class Modal extends React.Component{
    render(){
        console.log(this.props)
        return ReactDOM.createPortal(
            <div onClick={this.props.onDismiss} className='ui dimmer modals visible active'>
                <div onClick={(e)=>e.stopPropagation()} className='ui standar modal visible active'>
                <div className='header'>{this.props.title}</div>
                <div className='content'>
                    {this.props.content}
                </div>
                <div className='actions'>
                    {this.props.action}
                    </div>
                </div>
            </div>,
            document.querySelector('#modal')

        )
    }
}

export default Modal