"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    variant = "primary",
    size = "md",
    isLoading = false,
    children,
    className = "",
    ...props
}) => {
    const baseStyles = "relative inline-flex items-center justify-center font-bold transition-all duration-300 rounded-xl focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group font-sans";

    const variants = {
        primary: "bg-[var(--primary)] text-white hover:opacity-90 shadow-lg shadow-[var(--primary)]/20",
        secondary: "bg-[var(--secondary)] text-[var(--primary)] hover:opacity-90 shadow-md",
        outline: "border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white",
        ghost: "bg-transparent text-gray-600 hover:bg-gray-100 hover:text-[var(--primary)]",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            disabled={isLoading || props.disabled}
            {...props}
        >
            <span className="relative z-10 flex items-center gap-2">
                {isLoading && (
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                )}
                {children}
            </span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </motion.button>
    );
};

export default Button;
