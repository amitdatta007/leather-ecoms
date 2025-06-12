/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

const AuthForm = ({ children, pathName, pathURL }) => {
    return (
        <section className="w-full max-w-[1080px] mx-auto px-10 flex gap-10 flex-col md:flex-row">
            {children}
            <div className="bg-text-muted-25 w-[1px]"></div>
            <div className="w-full flex flex-col items-center gap-6">
                <p className="text-paragraph text-center text-[15px]">Registering for this site allows you to access your order status and history. Just fill in the fields below, and we'll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.</p>
                <Link href={pathURL} className="text-sm font-semibold text-text-muted-100 px-5 py-2.5 bg-[#f7f7f7] hover:bg-[#efefef]" >{pathName}</Link>
            </div>
        </section>
    );
};

export default AuthForm;