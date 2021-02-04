import {useState} from 'react';

const useForm = (validate) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    slogan: '',
    jobs: '',
    note: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
    console.log('name:', name);
    console.log('value:', value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
  };

  return {handleChange, values, handleSubmit, errors};
};

export default useForm;
