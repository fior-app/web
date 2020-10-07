import React, { useState } from "react";
import { Button, Card, Confirm, Divider, Dropdown, Header, Icon, List } from "semantic-ui-react";
import Uploader from "./uploader";
import { Link, useParams } from "react-router-dom";
import { compose } from "redux";
import { firestoreConnect, useFirebase } from "react-redux-firebase";
import { connect } from "react-redux";
import styles from '../../../../styles/mentorspace-files.module.css';

const filesPath = 'uploadedFiles'
const dbPath = 'files'

const Files = ({
  files
}) => {
  const firebase = useFirebase()

  const { mentorspaceId } = useParams();

  const [deleteId, setDeleteId] = useState(null);

  const onOpenDeleteFile = (key) => {
    setDeleteId(key);
  }

  const onCloseDeleteFile = () => {
    setDeleteId(null);
  }

  const handleOnDelete = (fullPath, key) => {
    onCloseDeleteFile();
    return firebase.deleteFile(fullPath, `${dbPath}/${key}`);
  }

  return (
    <>
      <Header as={"h2"}>Files</Header>
      <Divider/>
      <Uploader mentorspaceId={mentorspaceId}/>
      <div className={styles.files}>
        <Card.Group>
          {files && Object.keys(files).map((key) => {
            const file = files[key];

            return (
              <Card className={styles.file} key={key}>
                <Card.Content>
                  <Card.Header>{file.title}</Card.Header>
                  <Card.Description>{file.description}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className='ui two buttons'>
                    <Button
                      basic color='green' as={Link}
                      to={{ pathname: file.fileUrl }}
                      target="_blank">
                      View
                    </Button>
                    <Button basic color='red' onClick={() => onOpenDeleteFile(key)}>
                      Delete
                    </Button>
                    <Confirm
                      open={deleteId === key}
                      onCancel={onCloseDeleteFile}
                      onConfirm={() => {
                        return handleOnDelete(file.fullPath, key);
                      }}
                    />
                  </div>
                </Card.Content>
              </Card>
            );
          })}
        </Card.Group>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  files: state.firestore.data.files,
});

const mapDispatchToProps = (dispatch) => ({});

export default compose(
  firestoreConnect((props) => [
    {
      collection: 'files',
      limit: 25,
      where: ['groupId', '==', props.match.params.mentorspaceId],
    },
  ]),
  connect(mapStateToProps, mapDispatchToProps)
)(Files);
