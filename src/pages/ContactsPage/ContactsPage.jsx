import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { selectContactsLoading } from "../../redux/contacts/selectors";
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from '../../components/SearchBox/SearchBox';
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";

export default function ContactPage() {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isLoadingContacts = useSelector(selectContactsLoading);

    useEffect(() => {
        if (isLoggedIn) {
            dispatch(fetchContacts());
        }
    }, [dispatch, isLoggedIn]);
    
    return (
        <>
            <ContactForm />
            <SearchBox />  
            <ContactList />
        <div>{isLoadingContacts && <div>Request in progress...</div>}
            </div>
        </>
    );
};
