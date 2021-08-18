import styled from 'styled-components';

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  height: calc(100vh - 70px);
  position: relative;
  display: flex;
  align-items: top;
  justify-content: center;
  &::before {
    content: '';
    position: absolute;
    inset: 0px;
    background: url('/images/login-background.png');
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.7;
    z-index: -1;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 40px;
  margin-top: 100px;
`;

const CTALogoOne = styled.img``;

const SignUp = styled.a`
  width: 100%;
  color: #f9f9f9;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 1.5px;
  text-align: center;
  background-color: #0063e5;
  border-radius: 4px;
  padding: 17px 0;
  margin-top: 8px;
  margin-bottom: 12px;
  cursor: pointer;
  transition: all 250ms;

  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
  margin-bottom: 30px;
`;

const CTALogoTwo = styled.img`
  width: 90%;
`;
