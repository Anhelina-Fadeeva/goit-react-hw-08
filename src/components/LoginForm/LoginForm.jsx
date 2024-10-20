import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import css from './LoginForm.module.css'
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { selectIsLoading } from '../../redux/auth/selectors'
import { useState } from "react";

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
});

export default function LoginForm() {
    const initialValues = {
        email: "",
        password: "",
    };
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    
    const [loginError, setLoginError] = useState("");
 

     const handleSubmit = async (values, actions) => {
        try {
            await dispatch(logIn(values)).unwrap(); 
            actions.resetForm(); 
            setLoginError(""); 
        } catch (error) {
            setLoginError("Invalid email or password."); 
        }
    };

   

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
          
            onSubmit={handleSubmit}
        >
        <Form className={css.form} autoComplete="off">
            <div>    
                    <label className={css.label} htmlFor="email">Email</label>
                    <Field className={css.input}type="email" name="email" />
                       <ErrorMessage className={css.error} name="email" component="div" />
            </div>
                <div>
                    <label className={css.label} htmlFor="password">Password</label>
                        <Field className={css.input} type="password" name="password"  />
                        <ErrorMessage className={css.error} name="password" component="div" />
                </div>
                {loginError && <div className={css.error}>{loginError}</div>}
                <button className={css.button} disabled={isLoading} type="submit">Log In</button>
            </Form>
        </Formik>
    );
}