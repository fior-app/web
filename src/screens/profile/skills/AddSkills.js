import _ from 'lodash';
import React, { useState } from 'react';
import {
  Search, Modal, Label, Icon,
} from 'semantic-ui-react';
import axios from 'axios';

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

  return (
    <div className="modal">
      <div className="card-header">Add Skills</div>
      <Modal.Content>
        <Modal.Description>
          <Search
            loading={skillsState.isLoading}
            onResultSelect={selectSkill}
            onSearchChange={_.debounce(fetchSkills, 500, {
              leading: true,
            })}
            results={skillsState.results}
            value={skillsState.value}
          />
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
          <div className="row end">
            <button
              type="button"
              className="btn-alternate"
              onClick={handleOnSet}
              disabled={skillsState.selected.length === 0}
            >
              Set
            </button>
          </div>
        </Modal.Description>
      </Modal.Content>
    </div>
  );
};

export default AddSkills;
