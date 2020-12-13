import {useState} from 'react'
import Modal from 'react-modal'
import './BikeModal.css'

Modal.setAppElement('#root')

const BikeCardModal = (props)=>{

    const [modalIsOpen, setModalIsOpen] = useState(false)

    return(
        <div>
            <button className='btn btn-default'onClick={()=> setModalIsOpen(true)}> <i className="fas fa-info-circle fa-lg"></i></button>
            <Modal
            isOpen={modalIsOpen} 
            onRequestClose={()=> setModalIsOpen(false)}
            style={
                {
                    overlay: {
                        backgroundColor: 'transparent', 
                        display: 'flex', 
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '100px 200px 100px 200px'
                    }, 
                    content: {
                        color: '#282c34', 
                        backgroundColor: 'whitesmoke',
                        borderRadius: '5px',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }
                }
            }
            >
               <h1>Details</h1>
                <h3>{props.brand} {props.name}</h3>
                <img className="bikeimg" src={props.pic} alt="bike" />
                <h4>Last day available: {props.available}</h4>
                <h4><i className="fas fa-dollar-sign"></i>: $30/day</h4>
                <h5><i className="fas fa-address-book fa-lg"></i> <em>{props.contact}</em></h5>
               <button className="btn btn-default"onClick={()=> setModalIsOpen(false)}>Close</button>
            </Modal>
        </div>
    )
}

export default BikeCardModal