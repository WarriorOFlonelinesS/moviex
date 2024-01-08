import { MouseEventHandler, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRating, removeRating } from "../redux/actions";
import { useTranslation } from "react-i18next";

export const Modal = ({ showModal, closeModal, movieId }: { showModal: boolean, closeModal: MouseEventHandler, movieId: number }) => {
  const { t, i18n } = useTranslation();
  const [myRating, setRating] = useState('');
  const rating = useSelector((state: any) => state.movies.newRatings);
  const dispatch = useDispatch();

  useEffect(() => {
    setRating(rating[movieId]?.toString() || ''); // Оновлення value в input при зміні рейтингу
  }, [rating, movieId]);

  const handleAddRating = () => {
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
        <p className="modal__title">Rating of the movie</p>
        <input type="text" className="modal__input" placeholder="Add your rating" value={myRating} onChange={(e) => setRating(e.target.value)} />
        <div className="modal-buttons">
          <button className="modal__btn" onClick={handleRemoveRating}>Delete rating</button>
          <button className="modal__btn" onClick={handleAddRating}>Add rating</button>
        </div>
      </div>
    </div>
  );
};
