import _ from 'lodash';
import React, { useState } from 'react';
import {
  Search, Label, Icon, Button,
} from 'semantic-ui-react';
import axios from 'axios';
import styles from '../../../styles/profile.module.css';

const AddSkills = ({
  existingSkills = [],
  closeModal,
  onSubmit,
}) => {
  const initialState = {
    isLoading: false,
    value: '',
    results: null,
    selected: [],
  };

  const [skillsState, setState] = useState(initialState);

  const selectSkill = (e, { result }) => setState((state) => ({
    ...state,
    value: '',
    selected: [...state.selected, result],
  }));

  const removeSkill = (skill) => setState((state) => ({
    ...state,
    selected: state.selected.filter((item) => item !== skill),
  }));

  const fetchSkills = (e, { value }) => {
    setState((state) => ({
      ...state,
      isLoading: true,
      value,
    }));

    if (value.length < 1) {
      return setState((state) => ({
        ...state,
        isLoading: false,
        value: '',
        results: null,
      }));
    }

    return axios.get('/skills/search', { params: { q: value } })
      .then((res) => {
        const existingIds = existingSkills.map((skill) => skill.id);

        setState((state) => ({
          ...state,
          isLoading: false,
          results: res.data.filter((item) => !existingIds.includes(item.id))
            .filter((item) => !state.selected.map((result) => result.id)
              .includes(item.id))
            .map((item) => ({
              title: item.name,
              id: item.id,
            })),
        }));
      })
      .catch(() => {
        setState((state) => ({
          ...state,
          isLoading: false,
          results: null,
        }));
      });
  };

  const handleOnSet = () => {
    onSubmit(skillsState.selected);
    closeModal();
  };

  // Custom css has used as model attributes doesn't work
  return (
    <div className={styles.add_skill_container}>
      <h3>
        Add Skills
      </h3>

      <div className={styles.row}>
        <Search
          loading={skillsState.isLoading}
          onResultSelect={selectSkill}
          onSearchChange={_.debounce(fetchSkills, 500, {
            leading: true,
          })}
          results={skillsState.results}
          value={skillsState.value}
          fluid
        />
      </div>

      <h4>Selected Skills</h4>
      {skillsState.selected.length > 0 ? (
        <div>
          {skillsState.selected.map((selected) => (
            <Label as="a" key={selected.id}>
              {selected.title}
              <Icon name="delete" onClick={() => removeSkill(selected)} />
            </Label>
          ))}
        </div>
      ) : <div>No skills selected yet.</div>}
      {existingSkills.length > 0 ? (
        <div>
          <div className="v-spacer-1" />
          <h4>Existing Skills</h4>
          <div>
            {existingSkills.map((skill) => (
              <Label as="a" key={skill.id}>
                {skill.name}
              </Label>
            ))}
          </div>
        </div>
      ) : null}

      <div className={styles.actions}>
        <Button
          onClick={handleOnSet}
          disabled={skillsState.selected.length === 0}
        >
          Set
        </Button>
      </div>
    </div>
  );
};

export default AddSkills;
