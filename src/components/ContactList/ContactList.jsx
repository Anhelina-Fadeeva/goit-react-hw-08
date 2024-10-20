import { useDispatch, useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";
import css from './ContactList.module.css'
import { setOpenModal, setCurrentContact } from "../../redux/modal/slice";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";


export default function ContactList() {
    const dispatch = useDispatch();
    const contacts = useSelector(selectFilteredContacts);

    const handleDelete = (contact) => {
        dispatch(setOpenModal(true));
        dispatch(setCurrentContact(contact))
    };
    
    return (
        <>
        <ul className={css.ul}>
            
            {contacts.map((item) => (
                <li className={css.li} key={item.id}>
                    <Contact contact={item} onDelet={()=> handleDelete(item)} />
                </li>
                
            ))}
        </ul>
            <ConfirmationModal />
         </>
    );

    
}
