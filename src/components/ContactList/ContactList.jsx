import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import {
  selectContacts,
  selectFilteredContacts,
  selectContactsLoading,
  selectError // Импортируем селектор для ошибок
} from '../../redux/contacts/selectors';
import css from './ContactList.module.css';

const ContactList = () => {
  // Получаем необходимые данные из состояния Redux
  const searchUsers = useSelector(selectFilteredContacts);
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectContactsLoading);
  const error = useSelector(selectError); // Получаем состояние ошибок

  return (
    <div className={css.container}>
      {/* Проверяем наличие ошибок и отображаем их, если они есть */}
      {error && <p className={css.error}>Error: {error}</p>}
      
      {/* Отображаем загрузчик, если данные ещё загружаются */}
      {isLoading && <Loader />}

      {/* Проверяем наличие контактов и отображаем их, если они есть */}
      {contacts.length > 0 ? (
        <ul className={css.contactList}>
          {searchUsers.map(user => (
            <li key={user.id} className={css.contactItem}>
              <Contact contact={user} />
            </li>
          ))}
        </ul>
      ) : (
        // Если контактов нет, показываем сообщение
        <p className={css.noContacts}>Please add a contact</p>
      )}
    </div>
  );
};

export default ContactList;
