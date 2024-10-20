import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import css from './ContactForm.module.css'
import { nanoid } from '@reduxjs/toolkit';
import { fetchContacts } from '../../redux/contacts/operations';

export default function ContactForm() {
  const dispatch = useDispatch();

 const initialValues = {
   name: "",
   number: ""
 };
      const validationSchema = Yup.object({
    name: Yup.string().min(3, "is too short!")
      .max(50, "is too long!")
      .matches(/^[A-Za-z\s-]+$/, "must be a valid name!")
      .required("is required!"),
    number: Yup.string()
      .min(7, "is too short!")
      .matches(/^[0-9-]+$/, "must be a valid phone number!")
      .required("is required!"),
  });
  const handleSubmit = (values, actions) => {
    const contact = { ...values, id: nanoid() };
    dispatch(addContact(contact)).then(() => {
        dispatch(fetchContacts()); 
    });
    actions.resetForm();
};

  const nameId = nanoid();
  const numberId = nanoid();
      
  return (
    <div>
      <h2>Your contacts:</h2>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      
        <Form className={css.container}>
          <div className={css.name}>
            <label htmlFor={nameId}>Name</label>
            <Field className={css.input} type="text" id={nameId} name="name" />
         <ErrorMessage name="name" component="span" className={css.error} />
       </div>
       
          <div className={css.number}>
            <label htmlFor={numberId}>Number</label>
            <Field className={css.input} type="text" id={numberId}name="number" />
            <ErrorMessage name="number" component="span" className={css.error} />
              
           
          </div>
          <button className={css.btn} type="submit">Add contact</button>
        </Form>
    
      </Formik>
      </div>
  );
}