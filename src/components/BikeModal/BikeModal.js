import {useState} from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')

const BikeCardModal = (props)=>{

    const [modalIsOpen, setModalIsOpen] = useState(false)

    return(
        <div className="">
            <button className='btn btn-default'onClick={()=> setModalIsOpen(true)}> <i className="fas fa-info-circle fa-lg"></i></button>
            <Modal 
            isOpen={modalIsOpen} 
            onRequestClose={()=> setModalIsOpen(false)}
            style={
                {
                    overlay: {
                        backgroundColor: 'transparent'
                    }, 
                    content: {
                        color: '#282c34', 
                        backgroundColor: 'whitesmoke',
                        borderRadius: '5px',
                        width: '350px',
                        height: '330px',
                        marginLeft: '450px',
                        marginTop: '250px'
                    }
                }
            }
            >
               <h2>Bike Details</h2>
                <h3>{props.name}</h3>
                <h4><i className="fas fa-dollar-sign"></i>: $_/day</h4>
                <h5><i className="fas fa-address-book fa-lg"></i> <em>{props.contact}</em></h5>
               <button className="btn btn-default"onClick={()=> setModalIsOpen(false)}>Close</button>
            </Modal>
        </div>
    )
}

export default BikeCardModal