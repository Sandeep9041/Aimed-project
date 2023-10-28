import styled from 'styled-components';

export const LoginPageContainers = styled.div`
    min-height:100vh;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
`
export const Heading = styled.h1`
font-family: 'Poppins', sans-serif;
font-weight:800;
`
export const Img = styled.img`
    width:355px;
    height:50%;
    @media (max-width:786px){
        display:none;       
    }
    @media  (max-width:1200px){
       width:275px;
       height:35%;
    }
`
export const LoginCard = styled.div`
    //  background-color:red; 
    padding-block:50px;
    max-width:655px;
    width:44%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    font-family: 'Poppins', sans-serif;
    box-shadow: 0px 10px 40px 0px #00000029;
    border-radius:12px;
    @media (max-width:786px){
        width:100%;
    }
`
export const LoginForm = styled.form`
    width:75%;
    display:flex;
    flex-direction:column;
`
export const LoginPasswordContainers = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:21px; 
`
export const LoginPasswordLabel = styled.label`
    font-size:13px;
    margin-bottom:5px;
    font-weight:600;
`
export const PasswordContainers = styled.div`padding-inline:15px;
    padding-block:11px;
    border-radius:2px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    border:1px solid #04072F66;
    border-radius:5px; 
`
export const PasswordInput = styled.input`
    border:0px;
    outline:none;
`
export const UsernameInput = styled.input`
    padding-inline:15px;
    padding-block:11px;
    border-radius:2px;
    border:1px solid #04072F66;
    border-radius:5px;
    outline:none; 
`
export const RememberMeContainers = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-top:5px;
`
export const RememberMeAgreeToLabel = styled.label`
    color:#737B86;
    font-size:13px;
`
export const RememberMeText = styled.p`
    color:#F78719;
    font-size:13px;
`
export const AnchorText = styled.a`
    color:#F78719;
    text-decoration: underline;
    text-decoration-color:#F78719;
`
export const Button = styled.button`
    align-self:center;
    width:70%;
    background-color:#1575A7;
    color:#ffffff;
    text-align: center;
    font-size:13px;
    padding-block:11px;
    border:0px;
    margin-block:35px;
    border-radius:5px;
`
export const RegisterText = styled.p`
    text-align:center;
    font-size:13px;
`
export const RegisterText2 = styled.a`
    font-weight:600;
    color:#F78719;
    text-decoration: underline;
    text-decoration-color:#F78719;
`