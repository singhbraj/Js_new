import React from "react";
import img from '../assets/HomeBack.png';
import styled from "styled-components";

const Login = () => {
  const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    overflow-x: hidden;
  `;
  const Left = styled.div`
    width: 35%;
  `;

  const Logo = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
  `;

  const SideBar = styled.div`
    width: 100%;
    height: 100%;
  `;

  const Right = styled.div`
    width: 65%;
  `;

  const BackImg = styled.div`
 


  `;

  return (
    <Wrapper>
      <Left>
        <Logo>
          <img src={require("../assets/logo.png")} />
        </Logo>
        <SideBar>
          <img src={require("../assets/sideimg.png")} />
        </SideBar>
      </Left>
      <Right>
        <BackImg></BackImg>
      </Right>
    </Wrapper>
  );
};

export default Login;
