import React from 'react';
import FormInput from './FormInput/FormInput';
import styles from './Form.module.scss';

const Form = () => {
  return (
    <form className={styles.form}>
      {/* <input
        className={styles.name}
        type="text"
        name="name"
        required
        placeholder="name"
      />
      <input
        className={styles.email}
        type="email"
        name="email"
        required
        placeholder="email"
      />
      <input
        type="text"
        name="subject"
        className={styles.subject}
        required
        placeholder="subject"
      />
      <input
        type="textarea"
        name="message"
        className={styles.message}
        required
        placeholder="message"
      /> */}

      <FormInput name="name" type="text" />
      <FormInput name="email" type="email" />
      <FormInput name="subject" type="text" />
      <FormInput name="message" type="textarea" />
    </form>
  );
};

export default Form;
