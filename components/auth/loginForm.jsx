"use client"

import { loginUser } from "@/actions/authActions";
import { Eye } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "react-toastify";

const LoginForm = () => {
    const [error, setError] = useState({});
    const [isPassword, setIsPassword] = useState(true);
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();

        const formError = {};

        const formData = new FormData(e.target);
        const rawEmailInput = formData.get("Email")?.trim();

        const data = {
            email: rawEmailInput,
            password: formData.get("password"),
            isEmail: null, // Will be set based on validation
        };


        if (!data.email) {
            formError['email'] = "Email or phone number is required.";
        }

        // Patterns
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\+?\d{10,15}$/; // Accepts optional "+" and 10–15 digits

        if (emailRegex.test(data.email)) {
            data.isEmail = true;
        } else if (phoneRegex.test(data.email)) {
            data.isEmail = false;
        } else {
            formError['email'] = "Please enter a valid email address or phone number.";
        }

        if (!data.password) {
            formError['password'] = "Password is required.";
        }

        if (Object.keys(formError).length > 0) {
            setError(formError);
            return;
        }


        startTransition(async () => {
            const result = await loginUser(data);

            if (result?.status) {
                toast.success(result?.message);
                router.push('/');
            } else {
                toast.error(result?.message)
            }
        });
    };


    return (
        <div className="w-full">
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <h3 className="text-[22px] font-semibold text-text-primary">LOGIN</h3>

                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-text-primary text-[15px]">Email <span className="text-red-500">*</span></label>
                    <input type="text" id="email" name="Email" className="border-2 border-black/10 bg-transparent px-4 py-2 focus:outline-none" />
                    <span className="text-sm text-red-500">{error?.name}</span>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="password" className="text-text-primary text-[15px]">Password <span className="text-red-500">*</span></label>
                    <div className="relative ">
                        <input type={isPassword ? 'password' : 'text'} id="password" name="password" className="border-2 border-black/10 bg-transparent px-4 py-2 focus:outline-none w-full" />
                        <button
                            className="absolute right-0 px-2.5 top-1/2 -translate-y-1/2 h-full"
                            type="button"
                            onClick={() => setIsPassword((state) => !state)}
                        >
                            <Eye className="w-5 text-paragraph" strokeWidth={1.5} />
                        </button>
                    </div>
                    <span className="text-sm text-red-500">{error?.password}</span>
                </div>
                <button type="submit" className="bg-primary text-sm font-semibold py-3 hover:bg-primary-muted text-white">LOGIN</button>
                <div className="flex justify-end">
                    <Link href='/forgot-password' className="text-sm text-primary hover:text-primary-muted font-medium">Lost your password?</Link>
                </div>
            </form>
        </div>
    );
};

export default LoginForm; 