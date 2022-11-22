import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1>&#9940;</h1>
            <h1>You lost? Go <Link to='/'>home!</Link></h1>
        </div>
    );
};

export default NotFound;