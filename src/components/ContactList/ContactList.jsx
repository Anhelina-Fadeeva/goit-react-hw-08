import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import {
  selectContacts,
  selectFilteredContacts,
  selectContactsLoading,
} from '../../redux/contacts/selectors';

const ContactList = () => {
  const searchUsers = useSelector(selectFilteredContacts);
  const contact = useSelector(selectContacts);
  const loader = useSelector(selectContactsLoading);

  return (
    <div className='w-full'>
      {contact.length > 0 ? (
        <ul className='flex flex-col gap-6 '>
          {loader && <Loader />}
          {searchUsers.map(user => (
            <li
              className='flex justify-between items-center p-4 w-full h-20 bg-light-blue rounded-xl shadow-custom-blue transition-all duration-300 hover:scale-105'
              key={user.id}
            >
              <Contact user={user} />
            </li>
          ))}
        </ul>
      ) : (
        <p className='font-bold text-center text-light-blue text-3xl'>
          Please Add contact
        </p>
      )}
    </div>
  );
};
export default ContactList;