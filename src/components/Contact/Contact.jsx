import { useDispatch } from "react-redux";
import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import css from './Contact.module.css'
import { setOpenModal } from "../../redux/modal/slice";
import { setCurrentContact } from "../../redux/modal/slice";


export default function Contact({contact}) {
    const dispatch = useDispatch();
    
    const handleDeletClick = () => {
        dispatch(setOpenModal(true));
        dispatch(setCurrentContact(contact))
    }
   
    return (
        <div className={css.container}>
        <div className={css.item}>
            <p className={css.element}><FaUser /> {contact?.name || 'No name available'}</p>
            <p className={css.element}><FaPhoneAlt/> {contact.number}</p>
        </div>
            <button className={css.btn} onClick={handleDeletClick}>Delete</button>
        </div>
    );
    
}

export default Contact;
