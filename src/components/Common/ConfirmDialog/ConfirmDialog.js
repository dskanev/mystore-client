import { Modal, Button } from 'react-bootstrap';

const ConfirmDialog = ({
    show,
    onClose,
    onSave,
}) => {
    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Attention!</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>You are about to delete this project.</p>
                <p>Are you sure you wish to continue?</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>Cancel</Button>
                <Button variant="primary" onClick={onSave}>Continue</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmDialog;
