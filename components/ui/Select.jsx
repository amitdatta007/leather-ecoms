"use client";

import { cn } from "@/utils/utils";
import { Check, ChevronDown } from "lucide-react";
import { Children, cloneElement, useState } from "react";


export const Option = ({ label, value, onClick, selected, endElement }) => {
    return (
        <button
            value={value}
            className={cn(
                "px-2 h-7 rounded text-xs md:text-sm flex items-center justify-between hover:bg-secondary hover:text-white hover:opacity-80 hover:bg-primary", selected && 'font-medium bg-primary text-white'
            )}
            onClick={onClick}
        >
            <div className="flex items-center gap-1.5">
                {
                    selected && <Check strokeWidth={2.5} height={16} width={16} />
                }
                <span className="leading-none">{label}</span>
            </div>
            <>
                {endElement}
            </>
        </button>
    );
}

// Select component
export const Select = ({ className, children, onChange }) => {
    // Initialize selectedLabel and selectedValue based on the default selected child
    const initialSelection = Children.toArray(children).find(child => child.props.selected) || {};
    const [selectedLabel, setSelectedLabel] = useState(initialSelection.props?.label || '');
    const [selectedValue, setSelectedValue] = useState(initialSelection.props?.value || '');
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (value, label) => {
        setSelectedValue(value);
        setSelectedLabel(label);
        setIsOpen(false);

        if(onChange){
            onChange(value);
        }
    };

    return (
        <div className="relative">
            <button
                className={cn("flex items-center justify-between gap-4 border-b rounded text-sm md:text-base pl-4 pr-2 py-2", className)}
                onClick={() => setIsOpen((prevState) => !prevState)}
            >
                <span>{selectedLabel || "Select"}</span>
                <ChevronDown
                    className={cn("mt-0.5 animate", isOpen && 'rotate-180')}
                    height={16} width={16}
                    strokeWidth={1.5}
                />
            </button>
            <div
                className={cn("bg-white absolute w-full p-1.5 max-h-80 top-[calc(100%+8px)] z-[91] shadow-lg rounded hidden flex-col gap-1", isOpen && 'flex')}
            >
                {Children.map(children, (child) => {
                    return cloneElement(child, {
                        onClick: () => handleOptionClick(child.props.value, child.props.label),
                        selected: selectedValue === child.props.value,
                    });
                })}
            </div>
        </div>
    );
};
