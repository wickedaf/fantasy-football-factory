import React from 'react';
import NotFoundImg from '../../images/notFound.gif'

const NotFound = () => {
    return (
        <div className="text-center">
            <h1>Sorry!!! Nothing Found...</h1>
            <img src={NotFoundImg} class="img-fluid" alt="Not Found" />
        </div>
    );
};

export default NotFound;