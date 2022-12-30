import React from 'react';
import Form from '../../components/Form/Form';
import styles from './Contact.module.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Contact me</h1>
      <Form />
    </div>
  );
};

export default Home;
