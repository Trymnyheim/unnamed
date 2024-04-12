import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const submitLogin = (event) => {
      event.preventDefault();
      //Authenticating login details
      if (formData.email === "trym.haakon.nyheim@gmail.com" && formData.password === "Trym") {
          alert("Login OK");
      } else {
          alert("Login not OK");
      }
  };
  return (
    <Form className="login" onSubmit={submitLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
      </Form.Group>
      <Button variant="success" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Login;