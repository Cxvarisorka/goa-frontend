import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
    return (
        <main className='w-full'>
            <div className='2xl:container mx-auto text-sm lg:text-base'>
               <Outlet /> 
            </div>
        </main>
    );
};

export default Layout;