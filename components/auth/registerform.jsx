"use client"

import { registerUser } from "@/actions/authActions";
import { Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "react-toastify";

const Registerform = () => {
    const [error, setError] = useState({});
    const [isPending, startTransition] = useTransition();
    const [isPassword, setIsPassword] = useState(true);
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();

        const formError = {};

        const formData = new FormData(e.target);
        const rawEmailInput = formData.get("Email")?.trim();

        const data = {
            name: formData.get("name")?.trim(),
            email: rawEmailInput,
            password: formData.get("password"),
            isEmail: null, // Will be set based on validation
        };

        // Basic validations
        if (!data.name) {
            formError['name'] = "Name is required.";
        }

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
        } else if (data.password.length < 8) {
            formError['password'] = "Password must be at least 8 characters long.";
        }

        if (Object.keys(formError).length > 0) {
            setError(formError);
            return;
        }


        startTransition(async () => {
            const result = await registerUser(data);

            if (result?.status) {
                toast.success("Registation Success");
                router.push('/login')
            } else {
                toast.error(result?.message)
            }
        });

    };



    return (
        <div className="w-full">
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <h3 className="text-[22px] font-semibold text-text-primary">REGISTER</h3>
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-text-primary text-[15px]">Name <span className="text-red-500">*</span></label>
                    <input type="text" id="name" name="name" className="border-2 border-black/10 bg-transparent px-4 py-2 focus:outline-none" />
                    <span className="text-sm text-red-500">{error?.name}</span>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-text-primary text-[15px]">Email <span className="text-red-500">*</span></label>
                    <input type="text" id="email" name="Email" className="border-2 border-black/10 bg-transparent px-4 py-2 focus:outline-none" />
                    <span className="text-sm text-red-500">{error?.email}</span>
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
                <p className="text-sm text-paragraph">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                <button type="submit" disabled={isPending} className="bg-primary text-sm font-semibold py-3 hover:bg-primary-muted text-white">REGISTER</button>
            </form>
        </div>
    );
};

export default Registerform; 