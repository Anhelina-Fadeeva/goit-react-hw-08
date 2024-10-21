import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import css from './RegistrationForm.module.css';
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { useState } from 'react';

// Валидация полей формы
const validationSchema = Yup.object({
    name: Yup.string()
        .min(3, "Name is too short!")
        .max(50, "Name is too long!")
        .matches(/^[A-Za-z\s-]+$/, "Name must be valid!")
        .required("Name is required!"),
    email: Yup.string().email('Invalid email').required('Email is required!'),
    password: Yup.string()
        .min(7, 'Password must be at least 7 characters long')
        .required('Password is required!')
});

export default function RegistrationForm() {
    const initialValues = {
        name: "",
        email: "",
        password: ""
    };
    const dispatch = useDispatch();
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Обработка отправки формы
    const handleSubmit = async (values, actions) => {
        console.log("Registration payload:", values);
        setIsSubmitting(true);
        try {
            await dispatch(register(values)).unwrap(); // попытка зарегистрировать пользователя
            actions.resetForm(); // сброс формы при успешной регистрации
        } catch (error) {
            console.error(error);
            // Если произошла ошибка, покажите её пользователю
            actions.setFieldError("general", "Registration failed. Please try again."); // Устанавливаем общую ошибку
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ errors }) => ( // используем errors для отображения общей ошибки
                <Form className={css.form}>
                    {/* Общая ошибка */}
                    {errors.general && <div className={css.error}>{errors.general}</div>}

                    {/* Поле ввода имени */}
                    <div>
                        <label className={css.label} htmlFor="name">Name</label>
                        <Field className={css.input} type="text" name="name" />
                        <ErrorMessage className={css.error} name="name" component="div" />
                    </div>

                    {/* Поле ввода email */}
                    <div>
                        <label className={css.label} htmlFor="email">Email</label>
                        <Field className={css.input} type="email" name="email" />
                        <ErrorMessage className={css.error} name="email" component="div" />
                    </div>

                    {/* Поле ввода пароля */}
                    <div>
                        <label className={css.label} htmlFor="password">Password</label>
                        <Field className={css.input} type="password" name="password" autoComplete="current-password" />
                        <ErrorMessage className={css.error} name="password" component="div" />
                    </div>

                    {/* Кнопка отправки */}
                    <button className={css.button} type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Registering...' : 'Register'}
                    </button>
                </Form>
            )}
        </Formik>
    );
}

