import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from '../Button/Button';
import FormControl from 'react-bootstrap/FormControl';
import classes from './Searchbar.module.css';

const searchbar = () => {
    const btnBorderRadiusStyle = {
        borderTopRightRadius: "5px",
        borderBottomRightRadius: "5px"
    }
    return (
        <div className={classes.Searchbar}>
            <InputGroup>
                <FormControl
                    placeholder="Search..."
                    aria-label="Search Input"
                    aria-describedby="search-input"
                />
                <InputGroup.Append>
                    <Button>Search By User</Button>
                    <Button style={btnBorderRadiusStyle}>Search By Topic</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    );
};

export default searchbar;