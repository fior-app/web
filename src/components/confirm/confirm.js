import React, { useEffect, useState } from "react";
import { Modal, Button } from "semantic-ui-react";

const ConfirmModal = (trigger, what, callback) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClose = () => {
    setIsOpen(false);
  }

  const handleOnConfirm = () => {
    callback();
    handleOnClose();
  }

  return (
    <Modal
      trigger={trigger}
      size={'mini'}
      open={isOpen}
      onClose={handleOnClose}
    >
      <Modal.Header>{`Delete ${what}`}</Modal.Header>
      <Modal.Content>
        <p>Are you sure?</p>
      </Modal.Content>
      <Modal.Actions>
        <Button negative onClick={handleOnClose}>
          No
        </Button>
        <Button positive onClick={handleOnConfirm}>
          Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ConfirmModal;
