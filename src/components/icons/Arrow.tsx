import { forwardRef, ReactNode } from "react";

interface Props {
    children?: ReactNode;
}

const Arrow = forwardRef<HTMLDivElement, Props>((props, ref) => {
    return (
        <div
            {...props}
            ref={ref}
            className="absolute z-20 h-3 w-3 rotate-45 mt-1 ml-[1.2rem] border-l border-t border-gray-300 bg-white dark:bg-darkPrimary dark:border-slate-600"
        />
    );
});

Arrow.displayName = "Arrow";

export default Arrow;
