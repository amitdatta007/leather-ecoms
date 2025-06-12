"use client"

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const OrderCodeInputForm = () => {
    const [trackId, setTrackId] = useState(null);
    const { push } = useRouter();
    const input = useRef();

    const handleInput = (e) => {
        const value = e.target.value;
        setTrackId(value);
    }

    const handleSearch = () => {
        push(`/track-order?track_number=${trackId}`);
        input.current.value = '';
    }

    return (
        <section className="py-8 wrapper">
            <div className="w-full mx-auto max-w-5xl p-4 rounded shadow-md">
                <label htmlFor="order_id" className="text-sm font-medium">Order / Tracking Number</label>
                <div className="flex flex-col sm:flex-row gap-2 mt-2">
                    <input type="text" ref={input} onKeyUp={handleInput} className="w-full border border-border py-2 px-4 rounded outline-none focus:border-primary text-sm" placeholder="Enter The Order/Tracking Number" id="order_id" />
                    <button onClick={handleSearch} className="btn-sm text-nowrap font-medium">Track Order</button>
                </div>
            </div>
        </section>
    );
};

export default OrderCodeInputForm;