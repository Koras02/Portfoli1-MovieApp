import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Container = styled.div`
  background:red;
  min-height: 690px;
  position: fixed;
  display:inline-block;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
`;
export const HeroBg = styled.div`
  position: absolute;
  display: inline-block;
  top:-0px;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 120%;
  display:inline-block;
  object-fit: cover;
  background: #232a34;
`;

export const Icon = styled(LinkR)`
  margin-left: 32px;
  margin-top: 12px;
  text-decoration: none;
  display:inline;
  color: #fff;
  position:absolute;
  top:10px;
  font-weight: 700;
  font-size: 32px;
  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #010101;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  @media screen and(max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;
export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  background: #01bf71;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;
export const Text = styled.span`
  text-align: center;
  margin-top: 12px;
  color: #fff;
  font-size: 14px;
`;

export const FormBtnWrap = styled.div`
  width: 50%;
  border: 1px solid #000;
`;

export const FormBtn = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #000;
  color: red;
`;

export const FormBtnLink = styled(LinkR)`
  border: 1px solid #000;
  padding-top: 12px;
  margin: auto;
  text-align: center;
  color: #fff;
`;
