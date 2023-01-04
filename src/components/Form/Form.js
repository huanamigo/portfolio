import React from 'react';
import styles from './Form.module.scss';

const Form = () => {
  return (
    <form
      className={styles.form}
      autoComplete="off"
      method="POST"
      action="https://formsubmit.io/send/148d4ece-491f-4206-a9f4-7c42b4c583f2"
    >
      <div className={styles.container}>
        <input
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
        <textarea
          name="message"
          className={styles.message}
          required
          placeholder="message"
        />
        <input
          type="hidden"
          name="_redirect"
          value="https://arturfurtak.online/#/thanks"
        />
      </div>

      <div className={styles.submitContainer}>
        <button className={styles.submit} type="submit">
          send
        </button>
      </div>
    </form>
  );
};

export default Form;
