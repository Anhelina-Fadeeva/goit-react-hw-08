import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import css from './RegistrationForm.module.css'
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const validationSchema = Yup.object({
    name: Yup.string().min(3, "is too short!")
      .max(50, "is too long!")
      .matches(/^[A-Za-z\s-]+$/, "must be a valid name!")
      .required("is required!"),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(7, 'Password must be at least 7 characters long').required('Required')
});

export default function RegistrationForm() {
    const initialValues = {
        name: "",
        email: "",
        password: ""
    };
    const dispatch = useDispatch();
    const handleSubmit = (values, action) => {
        console.log(values);
        dispatch(register(values));
        action.resetForm();
  };

    
    return (<Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
       
        <Form className={css.form}>
            <div>
                <label className={css.label} htmlFor="name">Name</label>
                <Field className={css.input} type="text" name="name" />
                <ErrorMessage className={css.error} name="name" component="div"  />
            </div>
             <div>
                <label className={css.label} htmlFor="email">Email</label>
                <Field className={css.input} type="email" name="email" />
                <ErrorMessage className={css.error} name="email" component="div"  />
            </div>
             <div>
                <label className={css.label} htmlFor="password">Password</label>
                <Field className={css.input} type="password" name="password" autoComplete="current-password"  />
                <ErrorMessage className={css.error} name="password" component="div"  />
            </div>
            <button className={css.button} type="submit">Register</button>
        </Form>
    </Formik>
    );
}