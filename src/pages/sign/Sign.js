import React,{useState}  from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  Text,
  FormButton,
  FormBtn,
  FormBtnLink,
  VideoBg,
  HeroBg,
} from "./SignContainer";
import Video from './1.mp4'
import Video2 from './Avengers.mp4'
 


// sign up 클릭시 나오는 로그인 페이지
const SignIn = () =>  {
       const [random,setRandom] = useState();
       
       const Next = () => {
         setRandom(random => random + 1);
       }
      return (
      <Container>
        <FormWrap>
          <HeroBg>
            <VideoBg autoPlay muted src={Video2}  type="video/mp4" random={random} exact/>
            <VideoBg autoPlay muted src={Video}  type="video/mp4" random={Next} />
          </HeroBg>
            <Icon to="/Movies">NIF</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>로그인</FormH1>
              <FormLabel htmlFor="for">아이디</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">비밀번호</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">로그인</FormButton>
              <FormBtn>
                <FormBtnLink to="/requiset">가입하기</FormBtnLink>
              </FormBtn>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
  );
 }


export default SignIn;
