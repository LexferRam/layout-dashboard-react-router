import React from 'react'
import NotFoundImage from 'assets/images/page_not_found.svg'

const NotFoundPage = () => {
    return (
        <div style={{display:'flex', justifyContent:'center'}}>
            <img src={NotFoundImage} style={{width:'70vw', justifyContent:'70vh',marginTop:'5%'}} alt="Not Found Page"/>
        </div>
    )
}

export default NotFoundPage
