import React from 'react';

const FormInput = ({ name, type }) => {
  const style = 'styles.' + `${name}`;

  console.log('`${' + style + '}`');

  const styles = `${`${' + style + '}`}`;

  return (
    <input
      className={styles}
      type={type}
      name={name}
      required
      placeholder={name}
    />
  );
};

export default FormInput;
