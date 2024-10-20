import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Modal from 'react-modal';
import { setCloseModal } from '../../redux/modal/slice';
import { deleteContact } from '../../redux/contacts/operations';
import { selectDeletModal } from '../../redux/modal/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentModalContact } from '../../redux/modal/selectors';
import { CgCloseO } from "react-icons/cg";
import css from './ConfirmationModal.module.css';

const theme = createTheme();

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

Modal.setAppElement("#root");

const ConfirmationModal=()=>{
    const dispatch = useDispatch();
    const delModal = useSelector(selectDeletModal);
    const contact = useSelector(selectCurrentModalContact);

   

    function closeModal() {
            dispatch(setCloseModal());
        }
    
    function handleDelete() {
        if (contact) {
            dispatch(deleteContact(contact.id));
            dispatch(setCloseModal());
        }
    }
    return (
    <ThemeProvider theme={theme}>
        <Modal isOpen={delModal} onRequestClose={closeModal} style={customStyles}>
            <button className={css.btnClose} onClick={closeModal} aria-label="close"><CgCloseO className="my-icon" size="20" color='#d57f34'/></button>
            {contact ? (<h2>Delete contact {contact.name} ({contact.number}) ?</h2>) :(
            <h2>Contact not found</h2>)}
            <div className={css.div}>
            <Button className={css.btnDelete} onClick={handleDelete} >Delete</Button>
            <Button className={css.btnCansel} onClick={closeModal}>Cansel</Button>
            </div>
        </Modal>
    </ThemeProvider>
);
};

export default ConfirmationModal;