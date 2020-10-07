import React, { useState, useCallback } from 'react'
import Dropzone from 'react-dropzone'
import { Button, Header, Icon, Image, Modal, Segment } from "semantic-ui-react";
import { sendGroupImageMessageToFirebase } from "../../../../store/actions/mentorspaceActions";
import { connect } from "react-redux";
import styles from '../../../../styles/chat.module.css';

const ChatImageUploader = ({
  roomId,
  dispatchGroupImageMessageToFirebase
}) => {
  const [imageFile, setFile] = useState(null);

  const [loading, setLoading] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  const onCloseModal = () => {
    setModalOpen(false);
    setFile(null);
  };

  const onFilesDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result

        setFile({ file, image: binaryStr })
      }
      reader.readAsDataURL(file)
    }
  }, [])

  const onFileUpload = () => {
    setLoading(true);
    dispatchGroupImageMessageToFirebase(roomId, [imageFile.file], onCloseModal, () => {
      setLoading(false)
    });
  }

  console.log(imageFile)

  return (
    <div>
      <Modal
        trigger={
          <Button icon onClick={() => setModalOpen(true)}>
            <Icon name="image outline"/>
          </Button>
        }
        size="small"
        onClose={onCloseModal}
        open={modalOpen}
        closeIcon
      >
        <Modal.Header>
          Send Image
        </Modal.Header>
        <Modal.Content>
          {imageFile ? (
            <Image className={styles.image_upload_container} src={imageFile.image} size='medium' bordered rounded/>
          ) : (
            <Dropzone onDrop={onFilesDrop}>
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <Segment placeholder>
                    <Header icon>
                      <Icon name='image outline'/>
                      Drop image to add to chat
                    </Header>
                    <Button primary>Add Image</Button>
                  </Segment>
                </div>
              )}
            </Dropzone>
          )}
        </Modal.Content>
        <Modal.Content>
          <Button
            loading={loading}
            disabled={imageFile === null}
            primary
            onClick={onFileUpload}
          >
            Send
          </Button>
        </Modal.Content>
      </Modal>
    </div>
  )
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  dispatchGroupImageMessageToFirebase: (roomId, files, closeModel, stopLoading) => {
    dispatch(sendGroupImageMessageToFirebase(roomId, files, closeModel, stopLoading))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatImageUploader);
