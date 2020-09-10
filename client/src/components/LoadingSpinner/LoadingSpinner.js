import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const loadingSpinner = () => {
    return (
        <Spinner variant="success" animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>
    );
};

export default loadingSpinner;