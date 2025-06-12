import { cn } from "@/utils/utils";

const Skeleton = ({ children, className }) => {
    return (
        <div className={cn(
            "bg-gray-300 w-full animate-pulse grid place-items-center",
            className
        )}>
            {children}
        </div>
    );
};

export default Skeleton;