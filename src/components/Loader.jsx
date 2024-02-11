import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
  return (
    <div style={styles.container}>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
};

export default Loader;
