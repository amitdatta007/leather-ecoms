import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

const AuthLayout = async ({ children }) => {
    const session = await auth();

    if (session?.user) {
        return redirect('/')
    }

    return (
        <>
            {children}
        </>
    );
};

export default AuthLayout;