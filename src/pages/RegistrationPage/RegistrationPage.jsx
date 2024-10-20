import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

export default function RegistrationPage() {
    const handleRegister = (values) => {
        console.log('Registration data: ', values)
    }
    return (
        <div>
            <RegistrationForm onSubmit={handleRegister} />
        </div>
    )
}