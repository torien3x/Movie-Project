import { Icon } from "@iconify/react";
import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background: #1c1c1c;
  display: flex;
  height: 125px;
  justify-content: flex-end;
  width: 100%;
`;

export const HeaderIcons = styled.div`
  display: flex;
  margin-right: 75px;
  justify-content: space-evenly;
  width: 150px;
`;

export const IconWrapper = styled.div`
  border: 1.5px solid #fff;
  border-radius: 100%;
  padding: 2px 4px;
`;

export const InputContainer = styled.div`
  align-items: center;
  background: #1c1c1c;
  border: 2px solid #fff;
  border-radius: 7px;
  display: flex;
  height: 40px;
  justify-content: space-evenly;
  margin-right: 25%;
  width: 25%;
`;

export const Input = styled.input`
  background: none;
  border: none;
  color: #000;
  font-size: 16px;
  font-weight: 600;
  height: 65%;
  width: 85%;

  &::placeholder {
    color: #fff; /* Placeholder text color */
  }
`;

export default function Header() {
  return (
    <Container>
      <InputContainer>
        <Input placeholder="Search Movies, Series, Actors..." />
        <Icon icon="ph:magnifying-glass" height={25} color="#fff" />
      </InputContainer>
      <HeaderIcons>
        <IconWrapper>
          <Icon icon="ph:bell" height={20} color="#fff" />
        </IconWrapper>
        <IconWrapper>
          <Icon icon="tabler:message" height={20} color="#fff" />
        </IconWrapper>
        <IconWrapper>
          <Icon icon="bi:sliders" height={20} color="#fff" />
        </IconWrapper>
      </HeaderIcons>
    </Container>
  );
}
