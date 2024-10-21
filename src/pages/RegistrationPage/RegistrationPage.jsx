import React from 'react';
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

const RegistrationPage = () => {
    const handleRegistrationSubmit = (values) => {
        console.log('Registration data: ', values);
    };

    return (
        <>
            <RegistrationForm onSubmit={handleRegistrationSubmit} />
        </>
    );
};

RegistrationPage.propTypes = {
};

export default RegistrationPage;