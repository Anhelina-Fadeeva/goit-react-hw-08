import { useDispatch } from "react-redux";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import css from './Contact.module.css';
import { setOpenModal, setCurrentContact } from "../../redux/modal/slice";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(setOpenModal(true));
    dispatch(setCurrentContact(contact));
  };

  // Додаткова перевірка на наявність контактів
  if (!contact) {
    return <p>No contact information available.</p>;
  }

  return (
  <div className={css.container}>
    <div className={css.item}>
      <p className={css.element}>
        <FaUser /> {contact?.name || 'No name available'}
      </p>
      <p className={css.element}>
        <FaPhoneAlt /> {contact?.number || 'No phone number available'}
      </p>
    </div>
    <button className={css.btn} onClick={handleDeleteClick}>
      Delete
    </button>
  </div>
);
}