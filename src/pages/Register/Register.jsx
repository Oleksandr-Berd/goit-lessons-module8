import { Container } from 'components/Container/Container';
import { useDispatch } from 'react-redux';
import { registerUser } from 'Redux/auth/operations';

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const { currentTarger: formRef } = event;
    const { email, password, name } = formRef.elements;

    const credentials = {
      name: name.value,
      email: email.value,
      password: password.value,
    };

    dispatch(registerUser(credentials));
  };

  return (
    <Container>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" autoComplete="off" />
        <input type="text" name="email" autoComplete="off" />
        <input type="password" name="password" autoComplete="off" />
        <button type="submit">Register</button>
      </form>
    </Container>
  );
};

export default Register;
