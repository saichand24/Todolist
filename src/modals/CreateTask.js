import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CreateTask = ({modal, toggle}) => {
    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>create Task</ModalHeader>
            <ModalBody>
                <form>

                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={toggle}>create</Button>
                <Button color="secondary" onClick={toggle}>cancel</Button>
            </ModalFooter>

        </Modal>
    );
};

export default CreateTask;