import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 20px;
  background: #ffffff;
`;

export const TitleContainer = styled.View`
  flex: 1;
`;

export const InputContainer = styled.View`
  margin: 24px 0px;
`

export const Input = styled.TextInput`
background: #fff;
  height: 50px;
  border: 1px solid rgba(204, 204, 204, 0.5);
  margin-bottom: 10px;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 24px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: contain;
`;
