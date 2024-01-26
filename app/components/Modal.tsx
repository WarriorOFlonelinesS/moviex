import { MouseEventHandler, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRating, removeRating } from "../redux/actions";
import { useTranslation } from "react-i18next";

interface ModalProps {
  showModal: boolean;
  closeModal: MouseEventHandler;
  movieId: number;
  lng: string;
}

export const Modal = ({ showModal, closeModal, movieId, lng }: ModalProps) => {
  const [myRating, setRating] = useState<string>('');
  const { t, i18n } = useTranslation();
  const rating = useSelector((state: any) => state.movies.userRatings) as Record<number, number>;
  const dispatch = useDispatch();

  useEffect(() => {
    i18n.changeLanguage(lng);
  }, [lng, i18n]
  );

  useEffect(() => {
    setRating(rating[movieId]?.toString() || '');
  }, [rating, movieId]);

  const handleAddRating = (): void => {
    if (Number(myRating)) {
      if (Number(myRating) > 10) {
        alert('More than 10');
        setRating('');
      } else {
        dispatch(addRating({ movieId, rating: myRating }));
      }
    } else {
      alert("Not a number");
      setRating('');
    }
  };

  const handleRemoveRating = () => {
    dispatch(removeRating({ movieId }));
    setRating('');
  };

  return (
    <div className={`modal ${showModal ? 'show' : 'hide'}`}>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <p className="modal__title">{t('rating')}</p>
        <input type="text" className="modal__input" placeholder={t('placeholder')} value={myRating} onChange={(e) => setRating(e.target.value)} />
        <div className="modal-buttons">
          <button className="modal__btn" onClick={handleRemoveRating}>{t('deleteButton')}</button>
          <button className="modal__btn" onClick={handleAddRating}>{t('addButton')}</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
