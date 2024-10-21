import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Modal from 'react-modal';
import { setCloseModal } from '../../redux/modal/slice';
import { deleteContact } from '../../redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectDeletModal, selectCurrentModalContact } from '../../redux/modal/selectors';
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
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#fffaf0", // мягкий кремовый фон
  },
};

Modal.setAppElement("#root");

const ConfirmationModal = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(selectDeletModal);
  const contact = useSelector(selectCurrentModalContact);

  const closeModal = () => dispatch(setCloseModal());

  const handleDelete = () => {
    if (contact) {
      dispatch(deleteContact(contact.id));
      dispatch(setCloseModal());
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={customStyles}>
        <button className={css.btnClose} onClick={closeModal} aria-label="close">
          <CgCloseO size={20} color="#d57f34" />
        </button>
        <h2>
          {contact 
            ? `Delete contact ${contact.name} (${contact.number})?` 
            : "Contact not found"}
        </h2>
        <div className={css.buttonGroup}>
          <Button variant="contained" color="error" onClick={handleDelete} className={css.btnDelete}>
            Delete
          </Button>
          <Button variant="outlined" onClick={closeModal} className={css.btnCancel}>
            Cancel
          </Button>
        </div>
      </Modal>
    </ThemeProvider>
  );
};

export default ConfirmationModal;
