import React from 'react'

const Modal = ({ modalBody, setShowModal }) => {
    return (
        <div className="overlay">
            <div className="modal">
                <button className="modal-close"
                    style={{ float: "right" }}
                    onClick={() => setShowModal(false)}
                > close </button>
                <div className="modal-body">
                    {modalBody}
                </div>
            </div>

        </div>
    )
}

export default Modal