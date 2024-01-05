import { MouseEventHandler } from "react";

export const Modal = ({ showModal, closeModal }: { showModal: boolean, closeModal: MouseEventHandler }) => {
    return (
        <div className={`modal ${showModal ? 'show' : 'hide'}`}>
            <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <p className="modal__title">Raiting of the movie</p>
                <input type="text" className="modal__input" placeholder="Add your raiting" />
                <div className="modal-buttons">
                    <button className="modal__btn">Delete raiting</button>
                    <button className="modal__btn">Add raiting</button>
                </div>
            </div>
        </div>
    );
};