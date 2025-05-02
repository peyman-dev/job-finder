import React, { ReactNode } from 'react'

export const Container = ({ children, className, ...props }: { children: ReactNode, className?: String }) => {
    return (
        <section {...props} className={`container md:space-y-20 space-y-14 mx-auto ${className}`}>
            {children}
        </section>
    )
}
