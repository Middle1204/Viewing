import React, { useState } from 'react';
import Nav from '../Nav/Navbar';
import { RegisterContainer, Form, Input, Button, Title } from './style';

const Register = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    realName: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 회원가입 로직
  };

  return (
    <RegisterContainer>
      <Nav isLoggedIn={false} />
      <Title>Register</Title>
      <Form onSubmit={handleSubmit}>
        <Input name="username" value={form.username} onChange={handleChange} placeholder="아이디" />
        <Input type="password" name="password" value={form.password} onChange={handleChange} placeholder="비밀번호" />
        <Input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} placeholder="비밀번호 확인" />
        <Input name="email" value={form.email} onChange={handleChange} placeholder="이메일" />
        <Input name="realName" value={form.realName} onChange={handleChange} placeholder="실명" />
        <Button type="submit">Register</Button>
      </Form>
    </RegisterContainer>
  );
};

export default Register;
