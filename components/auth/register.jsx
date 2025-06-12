import AuthForm from "./authForm";
import Registerform from "./registerform";

const Register = () => {
    return (
        <main className="bg-[#FFFCF4] py-10 mt-[72px] lg:mt-[150px]">
            <AuthForm pathName="LOGIN" pathURL='/login'>
                <Registerform />
            </AuthForm>
        </main>
    );
};

export default Register;