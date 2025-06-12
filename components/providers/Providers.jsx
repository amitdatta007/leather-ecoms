'use client'

import store from "@/lib/app/store";
import { Provider } from "react-redux";
import LocalStorage from "./LocalStorage";

const Providers = ({ children }) => {
    return (
        <>
            <Provider store={store}>
                <LocalStorage>
                    {children}
                </LocalStorage>
            </Provider>
        </>
    );
};

export default Providers;