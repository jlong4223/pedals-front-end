import {useState} from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')

const MyModal = (props)=>{

    const [modalIsOpen, setModalIsOpen] = useState(false)

    return(
        <div className="">
            <button className='btn btn-default'onClick={()=> setModalIsOpen(true)}> <i className="fas fa-question-circle fa-lg"></i></button>
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
               <h2>Questions?</h2>
               <p>Is there a trail that you would like to add? Are you having a hard time connecting to a host? Are you having trouble using the page?</p> 
               <p>Whatever the question, contact the creater himself, Jared Long at jlong4223@gmail.com</p>
               <button className="btn btn-default"onClick={()=> setModalIsOpen(false)}>Close</button>
            </Modal>
        </div>
    )
}

export default MyModal