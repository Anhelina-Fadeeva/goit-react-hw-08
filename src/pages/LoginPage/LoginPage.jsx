import LoginForm from "../../components/LoginForm/LoginForm";

export default function LoginPage() {
    const handleLogin = (values) => {
        console.log('Login data: ', values)
    };
    return (
        <div>
            <LoginForm onSubmit={handleLogin} />
        </div>
    );
}