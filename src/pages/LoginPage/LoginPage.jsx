import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
    const handleLoginSubmit = (values) => {
        console.log('Login data: ', values);
    };

    return (
        <>
            <LoginForm onSubmit={handleLoginSubmit} />
        </>
    );
};

// Можно добавить PropTypes, если вы используете их в своем проекте
LoginPage.propTypes = {
    // Здесь можно указать пропсы, если нужно
};

export default LoginPage;