import {useState, useEffect} from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [isLogin, setIsLogin] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    // console.log('name:', name);
    // console.log('value:', value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsLogin(true);
    // console.log(errors);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isLogin) {
      callback();
    }
  }, [errors]);

  return {handleChange, values, handleSubmit, errors};
};

export default useForm;
