import React, { useState } from 'react'
import { useFirebase } from 'react-redux-firebase'
import Dropzone from 'react-dropzone'
import { Button, Form, Header, Icon, Modal, Segment } from "semantic-ui-react";

const filesPath = 'uploadedFiles'
const dbPath = 'files'

const Uploader = ({ mentorspaceId }) => {
  const initialFormState = {
    title: '',
    description: '',
  };

  const firebase = useFirebase()

  const [files, setFiles] = useState(null);

  const [loading, setLoading] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  const [formState, setFormState] = useState(initialFormState);

  const onCloseModal = () => {
    setModalOpen(false);
  };

  const onFilesDrop = (files) => {
    setModalOpen(true);
    setFiles(files);
  }

  const handleOnChangeInput = (e, { name, value }) => {
    // eslint-disable-next-line no-shadow
    setFormState((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const onFileUpload = () => {
    console.log(formState);
    setLoading(true);
    return firebase.uploadFiles(filesPath, files, dbPath, {
      metadataFactory: (uploadRes, firebase, metadata, downloadURL) => {
        const {
          metadata: { fullPath }
        } = uploadRes;

        return { ...formState, fullPath, fileUrl: downloadURL, groupId: mentorspaceId }
      },
    }).then(() => {
      setFiles(null);
      setLoading(false);
      setFormState(initialFormState);
      setModalOpen(false);
    }).catch(() => {
      setLoading(false);
    });
  }

  return (
    <div>
      <Dropzone onDrop={onFilesDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <Segment placeholder>
              <Header icon>
                <Icon name='pdf file outline'/>
                Drop files to share with the mentorspace
              </Header>
              <Button primary>Add File</Button>
            </Segment>
          </div>
        )}
      </Dropzone>
      <Modal
        size="small"
        onClose={onCloseModal}
        open={modalOpen}
        closeIcon
      >
        <Modal.Header>
          Upload File
        </Modal.Header>
        <Modal.Content>
          <Form onSubmit={onFileUpload}>
            <Form.Field>
              <Form.Input
                label="Title"
                type="text"
                name="title"
                value={formState.title}
                onChange={handleOnChangeInput}
              />
            </Form.Field>
            <Form.Field>
              <Form.TextArea
                label="Description"
                name="description"
                placeholder="Description"
                value={formState.description}
                onChange={handleOnChangeInput}
              />
            </Form.Field>
            {/*{error && (<div>{JSON.stringify(error)}</div>)}*/}
            <Button
              loading={loading}
              disabled={formState.title === ''}
              primary
              type="submit"
            >
              Upload
            </Button>
          </Form>
        </Modal.Content>
      </Modal>
    </div>
  )
}

export default Uploader;
