import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from '../Button/Button';
import FormControl from 'react-bootstrap/FormControl';
import classes from './Searchbar.module.css';

const searchbar = (props) => {
    const btnBorderRadiusStyle = {
        borderTopRightRadius: "5px",
        borderBottomRightRadius: "5px"
    }
    return (
        <div className={classes.Searchbar}>
            <InputGroup>
                <FormControl
                    ref={props.reference}
                    placeholder="Search..."
                    aria-label="Search Input"
                    aria-describedby="search-input"
                />
                <InputGroup.Append>
                    <Button click={props.userSearch}>Search By User</Button>
                    <Button click={props.contentSearch} style={btnBorderRadiusStyle}>Search By Content</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    );
};

export default searchbar;