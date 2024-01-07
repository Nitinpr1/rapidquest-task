import styled from "styled-components";

const Hero = () => {
  return (
    <MainWrapper>
      <Container>
        <div>
          <p>Retirement Income</p>
          <h3>Starting Year 2056</h3>
        </div>

        <GoalWrapper>
          <div>
            <h2>$300,000</h2>
            <small>My Goal</small>
          </div>
          <div>
            <h2>59%</h2>
            <small>Goal Achieved</small>
          </div>
          <div>
            <h2>$300 </h2>
            <small>Est. Monthly income</small>
          </div>
        </GoalWrapper>

        <ContributionWrapper>
          <h4>Contribution Overtime</h4>
        </ContributionWrapper>

        <PeersWrapper>
          <h4>How do I compare my peers?</h4>
        </PeersWrapper>
      </Container>
    </MainWrapper>
  );
};

export default Hero;

const MainWrapper = styled.div`
  flex: 2;
  background-color: white !important;
  padding: 10px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  margin: 20px;
  border: 1px solid black;
  padding: 10px;

  & > div {
    & > p {
      color: #7e70fd;
      margin-bottom: 3px;
    }
  }
`;

const GoalWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 30px;

  & > div {
    flex: 1;
    border-bottom: 2px solid #7e70fd;
    padding: 10px;
    color: #363636;
    & > small {
      color: #c3c3c3;
    }
  }
`;

const ContributionWrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`;

const PeersWrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`;
