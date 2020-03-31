import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();

  const onNavigate = (route) => (evt) => {
    evt.preventDefault();
    history.push(route);
  };

  return (
    <div>
      <button type="button" onClick={onNavigate('/create')}>
        <h2>Create New Character</h2>
      </button>
      <button type="button" onClick={onNavigate('/view')}>
        <h2>View Saved Characters</h2>
      </button>
    </div>
  );
};

export default Home;
