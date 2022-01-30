import React from 'react'
import { Modal } from 'react-bootstrap'

const Modals = ({ show, handleClose}) => {
    return (
        <div>
             <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header>
                    <Modal.Title>Please Provide Your Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   <h2>Hellooooooo modal</h2>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Modals;
