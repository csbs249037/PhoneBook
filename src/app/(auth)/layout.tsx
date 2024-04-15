import React from 'react';

const AuthLayout = ({ children }:{children:React.ReactNode}) => {
    return (
        <div className="bg-gradient-to-r from-violet-200 to-pink-200 min-h-screen flex items-center justify-center">{children}</div>
    );
}

export default AuthLayout;
