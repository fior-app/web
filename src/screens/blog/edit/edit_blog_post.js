import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  Button, Form, Container, Message, Modal, Icon, Header, Label,
} from 'semantic-ui-react';
import {
  initiateCreatingBlogPost,
  initiateUpdatingBlogPost,
  createBlogPost,
  updateBlogPost,
} from '../../../store/actions/blogActions';
import styles from '../../../styles/profile.module.css';
import SelectCategories from '../../../components/categories/select_categories';

const EditBlogPost = ({
  loading,
  error,
  success,
  post,
  handleCreateBlogPost,
  handleUpdateBlogPost,
  dispatchInitiateCreating,
  dispatchInitiateUpdating,
}) => {
  const initialState = {
    title: '',
    text: '',
    skills: [],
  };

  const { postId } = useParams('postId');

  const [postState, setPostState] = useState(initialState);
  const [categoriesModelState, setCategoriesModelState] = useState(false);

  useEffect(() => {
    if (postId) {
      dispatchInitiateUpdating(postId);
    } else {
      dispatchInitiateCreating();
    }
  }, [postId, dispatchInitiateCreating, dispatchInitiateUpdating]);

  useEffect(() => {
    if (post != null) {
      setPostState((state) => ({
        ...state, title: post.title, text: post.text, skills: post.skills,
      }));
    } else {
      setPostState(initialState);
    }
  }, [post]);

  const handleOnChangeInput = (e, { name, value }) => {
    setPostState((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const closeCategoriesModal = () => {
    setCategoriesModelState(false);
  };

  const handleCategoriesSubmit = (skills) => {
    setPostState((state) => ({ ...state, skills: state.skills.concat(skills) }));
  };

  const handleCategoriesRemove = (skill) => {
    setPostState((state) => ({ ...state, skills: state.skills.filter((item) => item !== skill) }));
  };

  const handleSubmit = () => {
    if (postId) {
      handleUpdateBlogPost(postId, {
        ...postState,
        skills: postState.skills.map((skill) => skill.id),
      });
    } else {
      handleCreateBlogPost({
        ...postState,
        skills: postState.skills.map((skill) => skill.id),
      });
    }
  };

  return (
    <Container>
      <h3>{!postId ? 'Create Post' : 'Edit Post'}</h3>
      <Form
        className="spacer"
        onSubmit={handleSubmit}
        success={success}
        error={error}
      >
        <Form.Field>
          <Form.Input
            label="Title"
            type="text"
            placeholder="Give a catchy title"
            name="title"
            value={postState.title}
            onChange={handleOnChangeInput}
          />
        </Form.Field>
        <Form.Field>
          <Form.TextArea
            label="Post"
            name="text"
            placeholder="Tell more about this..."
            value={postState.text}
            onChange={handleOnChangeInput}
          />
        </Form.Field>
        <div>
          <Header as="h5">Skills</Header>
          <Modal
            trigger={
              <Icon className={styles.add_icon} name="add" onClick={() => setCategoriesModelState(true)} />
            }
            size="mini"
            onClose={closeCategoriesModal}
            open={categoriesModelState}
            closeIcon
          >
            <SelectCategories
              existingSkills={postState.skills}
              closeModal={closeCategoriesModal}
              onSubmit={handleCategoriesSubmit}
            />
          </Modal>
          {postState.skills.map((category) => (
            <Label key={category.id}>
              {category.name}
              <Icon
                name="delete"
                onClick={() => handleCategoriesRemove(category)}
              />
            </Label>
          ))}
        </div>
        <Message
          error
          header="Hmm... Something went wrong"
          content={error}
        />
        <Message
          success
          header="Success"
          content="Post successfully added"
        />
        <Form.Field>
          <Button
            type="submit"
            disabled={loading}
            loading={loading}
          >
            Save
          </Button>
        </Form.Field>
      </Form>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  loading: state.blog.writePost.loading,
  success: state.blog.writePost.success,
  error: state.blog.writePost.error,
  post: state.blog.writePost.post,
});

const mapDispatchToProps = (dispatch) => ({
  handleCreateBlogPost: (post) => dispatch(createBlogPost(post)),
  handleUpdateBlogPost: (postId, post) => dispatch(updateBlogPost(postId, post)),
  dispatchInitiateCreating: () => dispatch(initiateCreatingBlogPost()),
  dispatchInitiateUpdating: (postId) => dispatch(initiateUpdatingBlogPost(postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditBlogPost);
