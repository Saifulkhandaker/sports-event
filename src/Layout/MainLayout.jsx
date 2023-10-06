import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Components/Navber';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navber></Navber>
           <Outlet></Outlet>
           <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;