import React, { useState } from 'react';
import {BsFillEyeSlashFill} from "react-icons/bs";
import {AnchorText, Button, Heading, Img, LoginCard, LoginContainers, LoginForm, LoginPageContainers, LoginPasswordContainers, LoginPasswordLabel, PasswordContainers, PasswordInput, RegisterText, RegisterText2, RememberMeAgreeToLabel, RememberMeContainers, RememberMeText, UsernameInput} from "./styledIndex.js";

const LoginPage = () =>{

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return(
    <LoginPageContainers>
      <Img src="https://res.cloudinary.com/dxsppjwqc/image/upload/v1698505940/Group_3608_e6mzmw.png" alt="" />
    <LoginCard>
      <Heading>Login</Heading>
      <LoginForm>
        <LoginPasswordContainers>
          <LoginPasswordLabel>Login ID</LoginPasswordLabel>
          <UsernameInput
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeHolder="Enter Login ID"
          />
        </LoginPasswordContainers>
        <LoginPasswordContainers>
          <LoginPasswordLabel>Password</LoginPasswordLabel>
          <PasswordContainers>
          <PasswordInput
          placeholder='Enter Password'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <BsFillEyeSlashFill />
          </PasswordContainers>
        </LoginPasswordContainers>
        <RememberMeContainers>
        <div>
          <input type="checkbox" />
          <RememberMeAgreeToLabel>Remember Me</RememberMeAgreeToLabel>
        </div>
        <RememberMeText>Change Password</RememberMeText>
        </RememberMeContainers>
        <div className='agree-to-containers'>
          <input type="checkbox" />
          <RememberMeAgreeToLabel>Agree to <AnchorText>Terms & Conditions</AnchorText></RememberMeAgreeToLabel>
        </div>
        <Button type="button" onClick={handleLogin}>
          Login
        </Button>
        <RegisterText className="register-text">Don't have a account? <RegisterText2>Register Here</RegisterText2></RegisterText>
      </LoginForm>
    </LoginCard>
    </LoginPageContainers>
  );


}
export default LoginPage;
