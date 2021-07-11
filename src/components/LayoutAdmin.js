import React from 'react'
import HeaderAdmin from './HeaderAdmin'
import Footer from './Footer'

function LayoutAdmin({children}) {
    return (
        <div>
            <HeaderAdmin />
            {children}
            <Footer />
        </div>
    )
}

export default LayoutAdmin;
