import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/PageNotFound.css'
function PageNotFound() {
    return(
        <Link to = {{pathname:`/`}}>
            <React.Fragment className="ddd">
                <img className="image__notFound" src={`${process.env.PUBLIC_URL}/404Image.png`} alt="Page Not Found" />
            </React.Fragment>
        </Link>
    );
}
export default PageNotFound;