import React from 'react';
import {Link} from 'react-router-dom';

export default function Detail() {
    return (
        <div>
            <p>This is detail page.</p>
            <Link to={"/"}><button>Go to Home</button></Link>
        </div>
    )
}
