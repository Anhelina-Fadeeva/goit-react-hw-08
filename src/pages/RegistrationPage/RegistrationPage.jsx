import React from 'react';
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import styles from './RegistrationPage.module.css';

const RegistrationPage = () => {
    const handleRegistrationSubmit = (values) => {
        console.log('Registration data: ', values);
    };

    return (
        <div className={styles.container}>
            <RegistrationForm onSubmit={handleRegistrationSubmit} />
        </div>
    );
};

export default RegistrationPage;
