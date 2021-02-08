import {useState, useEffect} from 'react';
import {Alert} from 'react-native';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    name: 'irfan',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [isLogin, setIsLogin] = useState(false);

  const handleChange = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    const v = validate(values);
    console.log({v, values});
    if (Object.keys(v).length == 0) {
      callback(values.email, values.password);
      setIsLogin(false);
    } else {
      setErrors(v);
      setIsLogin(true);
    }
    // console.log({v});

    // console.log(errors);
  };

  // useEffect(() => {
  //   if (Object.keys(errors).length === 0 && isLogin) {
  //     // callback();
  //   }
  // }, [isLogin]);

  return [handleChange, values, handleSubmit, errors];
};

export default useForm;
