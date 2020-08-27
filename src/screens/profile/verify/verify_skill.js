import React, { useState } from 'react';
import {
  LabelDetail, Modal, Header, Step, Icon, Button, Form, Radio,
} from 'semantic-ui-react';
import { connect } from 'react-redux';

import styles from '../../../styles/profile.module.css';
import { getSkillQuestions, verifyUserSkill } from '../../../store/actions/skillActions';

const VerifySkill = ({
  userskillId,
  skill,
  loading,
  error,
  questions,
  dispatchGetSkillQuestions,
  dispatchVerifyUserSkill,
}) => {
  const initState = {
    activeStep: 0,
    isStartDone: false,
    isQuestionsDone: false,
    answers: {},
  };

  const [verifySkillState, setVerifySkillState] = useState(initState);

  const [isModelOpen, setModelOpen] = useState(false);

  const openModal = () => {
    dispatchGetSkillQuestions(skill.id);
    setModelOpen(true);
  };

  const closeModal = () => {
    setModelOpen(false);
  };

  const steps = questions.map((question, index) => ({
    number: index + 1,
    ...question,
  }));

  const setStep = (step) => {
    setVerifySkillState((state) => ({ ...state, activeStep: step }));
  };

  const handleOnStart = () => {
    setVerifySkillState((state) => ({ ...state, activeStep: 1, isStartDone: true }));
  };

  const handleAnswer = (question, answer) => {
    setVerifySkillState((state) => ({
      ...state,
      answers: { ...state.answers, [question]: answer },
    }));
  };

  const handleOnNext = () => {
    setVerifySkillState((state) => ({ ...state, activeStep: state.activeStep + 1 }));
  };

  const handleOnEnd = () => {
    setVerifySkillState((state) => ({
      ...state,
      activeStep: steps.length + 1,
      isQuestionsDone: true,
    }));
  };

  const handleOnSubmit = () => {
    const data = [];

    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const key in verifySkillState.answers) {
      const value = verifySkillState.answers[key];
      const question = steps[Number(key) - 1];

      data.push({ questionId: question.id, answer: value });
    }

    dispatchVerifyUserSkill(userskillId, { answers: data });
  };

  return (
    <Modal
      trigger={
        <LabelDetail className={styles.add_icon} name="add" onClick={openModal}>Verify</LabelDetail>
      }
      size="large"
      onClose={closeModal}
      open={isModelOpen}
      closeIcon
    >
      <Modal.Header>Verify Skill</Modal.Header>
      <Modal.Content>
        <Step.Group fluid>
          <Step
            active={verifySkillState.activeStep === 0}
            disabled={verifySkillState.isStartDone}
            onClick={() => setStep(0)}
          >
            <Icon name="info" />
            <Step.Content>
              <Step.Title>Start</Step.Title>
            </Step.Content>
          </Step>

          {steps.map((step) => (
            <Step
              key={step.id}
              active={verifySkillState.activeStep === step.number}
              disabled={!verifySkillState.isStartDone || verifySkillState.isQuestionsDone}
              onClick={() => setStep(step.number)}
            >
              <Icon name="question" />
              <Step.Content>
                <Step.Title>{`Question ${step.number}`}</Step.Title>
              </Step.Content>
            </Step>
          ))}

          <Step
            active={verifySkillState.activeStep === steps.length + 1}
            onClick={() => setStep(steps.length + 1)}
          >
            <Icon name="check" />
            <Step.Content>
              <Step.Title>Finish</Step.Title>
            </Step.Content>
          </Step>
        </Step.Group>
        {verifySkillState.activeStep === 0 && (
          <Modal.Description>
            <Header>Start</Header>
            <p>Start description</p>
            <Button onClick={handleOnStart} primary>Start</Button>
          </Modal.Description>
        )}
        {steps.map((step) => (
          verifySkillState.activeStep === step.number ? (
            <Modal.Description key={step.id}>
              <Header>{step.question}</Header>
              <Form>
                <Form.Group grouped>
                  <Form.Field
                    label={step.choice1}
                    control={Radio}
                    value={1}
                    checked={verifySkillState.answers[`${step.number}`] === 1}
                    onChange={(e, { value }) => handleAnswer(step.number, value)}
                  />
                  <Form.Field
                    label={step.choice2}
                    control={Radio}
                    value={2}
                    checked={verifySkillState.answers[`${step.number}`] === 2}
                    onChange={(e, { value }) => handleAnswer(step.number, value)}
                  />
                  <Form.Field
                    label={step.choice3}
                    control={Radio}
                    value={3}
                    checked={verifySkillState.answers[`${step.number}`] === 3}
                    onChange={(e, { value }) => handleAnswer(step.number, value)}
                  />
                  <Form.Field
                    label={step.choice4}
                    control={Radio}
                    value={4}
                    checked={verifySkillState.answers[`${step.number}`] === 4}
                    onChange={(e, { value }) => handleAnswer(step.number, value)}
                  />
                </Form.Group>
              </Form>
              <Button onClick={handleOnNext} primary>Next</Button>
            </Modal.Description>
          ) : <div key={step.id} />
        ))}
        {verifySkillState.activeStep === steps.length + 1 && !verifySkillState.isQuestionsDone && (
          <Modal.Description>
            <Header>Finish</Header>
            <p>Finish description</p>
            <Button onClick={handleOnEnd} primary>End</Button>
          </Modal.Description>
        )}
        {verifySkillState.activeStep === steps.length + 1 && verifySkillState.isQuestionsDone && (
          <Modal.Description>
            <Header>Done</Header>
            <p>Done description</p>
            <Button onClick={handleOnSubmit} primary>Submit</Button>
          </Modal.Description>
        )}
        {loading && (<div>Loading</div>)}
      </Modal.Content>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  loading: state.skills.verify.loading,
  error: state.skills.verify.error,
  questions: state.skills.verify.questions,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchGetSkillQuestions: (skillId) => dispatch(getSkillQuestions(skillId)),
  dispatchVerifyUserSkill: (userskillId, data) => dispatch(verifyUserSkill(userskillId, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VerifySkill);
