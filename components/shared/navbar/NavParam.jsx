"use client"

import checkParams from '@/utils/checkParams';
import { cn } from '@/utils/utils';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const NavParam = ({ children, activeClassName, href, exact, data, ...props }) => {
    const searchParams = useSearchParams();
    const paramsObject = Object.fromEntries(searchParams.entries());

    const url = new URL(href, process.env.NEXT_PUBLIC_APP_URL);
    const nsp = new URLSearchParams(url.search);
    const hrefParamObject = Object.fromEntries(nsp.entries());

    const active = checkParams(paramsObject, hrefParamObject);

    const classes = cn(props.className, active && activeClassName);

    if (classes) {
        props.className = classes;
    }

    return (
        <Link href={href} {...props}>
            {children}
        </Link>
    );
};

export default NavParam;