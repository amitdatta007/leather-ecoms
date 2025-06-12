import AuthForm from "./authForm";
import LoginForm from "./loginForm";

const Login = () => {
    return (
        <main className="bg-[#FFFCF4] py-10 mt-[72px] lg:mt-[150px]">
            <AuthForm  pathName="REGISTER" pathURL='/register'>
                <LoginForm />
            </AuthForm>
        </main>
    );
};

export default Login;