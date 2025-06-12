import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const initialValues = {
  email: '',
  password: '',
};

export default function Login() {
  const [formData, setFormData] = useState(initialValues);
  let history = useHistory();

  function handleChange(event) {
    const { name, value } = event.target;
    const newState = { ...formData, [name]: value };
    setFormData(newState);
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .get('https://6540a96145bedb25bfc247b4.mockapi.io/api/login')
      .then((res) => {
        const user = res.data.find(
          (item) =>
            item.email === formData.email && item.password === formData.password
        );
        if (user) {
          history.push('/main');
        } else {
          history.push('/error');
        }
      })
      .catch((err) => {
        console.warn(err);
      });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="Enter your email"
          type="email"
          onChange={handleChange}
          value={formData.email}
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="Enter your password "
          type="password"
          onChange={handleChange}
          value={formData.password}
        />
      </FormGroup>
      <Button color="primary">Sign In</Button>
    </Form>
  );
}
