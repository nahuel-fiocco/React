import React from 'react';
import { BounceLoader } from 'react-spinners';
import './Loading.css';

function Loading() {
    return (
        <div className="loading-spinner">
            <BounceLoader color="#36d7b7" />
        </div>
    );
}

export default Loading;