import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

// This component contains the form to fill out the start of the character
//  Requires: name
// Requires: character level
// Requires: character Race
// Optional: character subrace
// Requires a character class


const Creation = () => {
  const {
    register,
    handleSubmit,
    watch,
    errors,
  } = useForm();
  const [character, setCharacter] = useState({ characterName: '', characterLevel: 1 });

  const onSubmit = (data) => { console.log(data); };

  const handleChange = (evt) => {
    setCharacter({ ...character, [evt.target.name]: evt.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="characterName">
          Character Name:
          <input type="text" onChange={handleChange} name="characterName" id="characterName" ref={register({ required: true })} value={character.characterName} />
        </label>
        <label htmlFor="characterLevel">
          Character Level:
          <select name="characterLevel" value={character.characterLevel} id="characterLevel" ref={register({ required: true })} onChange={handleChange}>
            <Levels numberOfLevels={20} />
          </select>
        </label>
        <button type="submit">Next</button>
      </form>
    </>
  );
};

const Levels = (props) => {
  const { numberOfLevels } = props;
  const options = []
  for (let i = 0; i < numberOfLevels; i += 1) {
    options.push(
      <option value={i + 1} key={i}>
        {i + 1}
      </option>,
    );
  }
  return (
    <>
      {options}
    </>
  );
};

Levels.propTypes = {
  numberOfLevels: PropTypes.number,
};

Levels.defaultProps = {
  numberOfLevels: 20,
};

export default Creation;
