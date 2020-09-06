import React from 'react';
import classes from './Modal.module.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import TwitterCard from '../TwitterCards/TwitterCard/TwitterCard';

const modal = (props) => {
    const title = props.title ? <Modal.Title>{props.title}</Modal.Title>: null;

    return (
        <Modal centered={props.centered} show={props.show} onHide={props.close}>
            <Modal.Header closeButton>
                {title}
            </Modal.Header>
            <Modal.Body>
                {props.children}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.close}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default modal;