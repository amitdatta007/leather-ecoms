"use client"

import { cn } from "@/utils/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";


const NavLink = ({ children, activeClassName, href, exact, disabled, data, ...props }) => {
    const path = usePathname();

    const active = (exact ? path === href : path.startsWith(href));
    const classes = cn(props.className, active && activeClassName);

    if (classes) {
        props.className = classes;
    }

    return (
        <Link href={href} onClick={(e) => {
            disabled && e.preventDefault()
        }} {...props}>
            {children}
        </Link>
    );
};

export default NavLink;
