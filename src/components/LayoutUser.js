import React from 'react'
import HeaderUser from './HeaderUser'
import Footer from './Footer'

function LayoutUser({children}) {
    return (
        <div>
            <HeaderUser />
            {children}
            <Footer />
        </div>
    )
}

export default LayoutUser;
