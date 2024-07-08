import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../Nav/Navbar';
import { SignInContainer, Form, Input, Button, Title } from './style';

const SignIn = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = form;
    
    // 임시 로그인 검증
    if (username === 'abcd1234' && password === '1234') {
      navigate('/main');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <SignInContainer>
      <Nav isLoggedIn={false} />
      <Title>Sign in</Title>
      <Form onSubmit={handleSubmit}>
        <Input name="username" value={form.username} onChange={handleChange} placeholder="아이디" />
        <Input type="password" name="password" value={form.password} onChange={handleChange} placeholder="비밀번호" />
        <Button type="submit">Sign in</Button>
      </Form>
    </SignInContainer>
  );
};

export default SignIn;
