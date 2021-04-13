import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const MainLayout = props => {
    
    return (

        <div>
            <Header {...props} />
                <div className='main'>
                    {props.children}
                </div>
            <Footer />
        </div>
        
    );
};

export default MainLayout;