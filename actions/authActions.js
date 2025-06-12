"use server";
import { signIn } from "@/lib/auth";
import bcrypt from "bcryptjs";


export const registerUser = async (data) => {
    try {

        let email = '';
        let phone = '';

        if (data?.isEmail) {
            email = data.email
        } else {
            phone = data.phone
        }



        const alreadyExistRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            cache: "no-cache", // Optional: prevents caching
            body: JSON.stringify({
                email: email,
                phone: phone,
            }),
        });

        const alreadyExist = await alreadyExistRes.json();



        if (alreadyExist?.status === 'success') {

            return { status: false, message: 'Email or phone already Exist' }
        }

        const newUser = {
            email: email ? email : null,
            phone: phone ? phone : null,
            name: data.name,
            address: 'fdsf',
            user_password: await bcrypt.hash(data.password, 10),
        }


        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            cache: "no-cache", // Optional: prevents caching
            body: JSON.stringify(newUser),
        });

        return {
            status: true,
        }

    } catch (error) {
        return {
            status: false,
            message: 'Internal Server Error!'
        }
    }
}

export const loginUser = async (data) => {
    try {



        let email = '';
        let phone = '';

        if (data?.isEmail) {
            email = data.email
        } else {
            phone = data.phone
        }



        const result = await signIn("credentials", {
            redirect: false,
            email: email,
            phone: phone,
            password: data.password
        });


        return {
            status: true,
            message: "Login successful"
        };

    } catch (error) {
        return {
            status: false,
            message: 'Internal Server Error!'
        }
    }
}




export const getUser = async (data) => {
    try {

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            cache: "no-cache", // Optional: prevents caching
            body: JSON.stringify(data),
        });

        const user = await res.json();



        if (user?.status === 'success') {
            return {
                status: true,
                user: user?.user
            }
        }



        return {
            status: false,
        }

    } catch (error) {
        return {
            status: false,
            error: 'Internal Server Error!'
        }
    }
}