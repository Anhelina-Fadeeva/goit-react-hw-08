import React from 'react';
import LoginForm from "../../components/LoginForm/LoginForm";
import styles from './LoginPage.module.css';

const LoginPage = () => {
    const handleLoginSubmit = (values) => {
        console.log('Login data: ', values);
    };

    return (
        <div className={styles.container}>
            <LoginForm onSubmit={handleLoginSubmit} />
        </div>
    );
};

export default LoginPage;
