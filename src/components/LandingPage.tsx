import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;

  @media (max-width: 768px) {
    height: calc(var(--vh, 1vh) * 100);
  }
`

const TitleContainer = styled.div`
  padding-bottom: 5rem;

  @media (max-width: 1440px) {
    padding-bottom: 5rem;
  }

  @media (max-width: 768px) {
    padding-bottom: 2rem;
  }

  @media (max-width: 375px) {
    padding-bottom: 1rem;
  }
`

const Title = styled.h1`
  font-size: 8rem;
  margin: 0;

  @media (max-width: 1440px) {
    font-size: 10rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 375px) {
    font-size: 2rem;
  }
`

const Subtitle = styled.h2`
  font-size: 2.5rem;

  @media (max-width: 1440px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 375px) {
    font-size: 0.5rem;
  }
`

function LandingPage() {

  return (
    <Container>
      <TitleContainer>
        <Title>Eliott Le Duc</Title>
        <Subtitle>Creative and Full Stack Developer</Subtitle>
      </TitleContainer>
    </Container>
  )
}

export default LandingPage
