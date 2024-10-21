import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { selectContactsLoading } from "../../redux/contacts/selectors";
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from '../../components/SearchBox/SearchBox';
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import styles from './ContactPage.module.css';

export default function ContactPage() {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isLoading = useSelector(selectContactsLoading);

    useEffect(() => {
        if (isLoggedIn) {
            dispatch(fetchContacts());
        }
    }, [dispatch, isLoggedIn]);

    return (
        <div className={styles.container}>
            <ContactForm />
            <SearchBox />
            <ContactList />
            {isLoading && <div className={styles.loading}>Request in progress...</div>}
        </div>
    );
}
