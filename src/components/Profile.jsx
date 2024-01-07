import styled from "styled-components";
import profile from "../assets/profile.png";

const Profile = () => {
  return (
    <ProfileWrapper>
      <Container>
        <UserInformation>
          <img src={profile} alt="ProfileImg" />
          <div>
            <h2>Hi Mike,</h2>
            <p>welcome back.</p>
          </div>
        </UserInformation>

        <AccountSection>
          <h3>Today</h3>
          <MainBalance>
            <h1>$ 19,892</h1>
            <small>Account Balance</small>
          </MainBalance>
          <Contributions>
            <h2>$ 4,000</h2>
            <small>Year-to-date Contributions</small>
          </Contributions>

          <Interest>
            <h2>$ 1,892</h2>
            <small>Total Interest</small>
          </Interest>
          <button>
            <select name="dd">
              <option value="some text">I want to</option>
              <option value="some text">some text</option>
            </select>
          </button>
        </AccountSection>

        <RecentTransaction>
          <h4>Recent Transactions</h4>
          <div>
            <small>2020-8-7</small>
            <p>Withdrawal Transfer to Bank-XXX12</p>
          </div>
          <div>
            <small>2020-8-5</small>
            <p>Withdrawal Transfer to Bank-XXX11</p>
          </div>
          <div>
            <small>2020-8-1</small>
            <p>Withdrawal Transfer to Bank-XXX13</p>
          </div>
        </RecentTransaction>
      </Container>
    </ProfileWrapper>
  );
};

export default Profile;

const ProfileWrapper = styled.div`
  flex: 1;
  background-color: #fafafa;
  padding: 10px;
  margin-left: 60px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  margin-left: 30px;
  color: #363636;
`;

const UserInformation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-warp: warp;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 40px;
  color: #363636;

  & > img {
    width: 70px;
  }
`;

const AccountSection = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  color: #363636;

  & > h3 {
    margin-bottom: 10px;
  }

  & > button {
    margin-top: 15px;
    padding: 10px 15px 10px 15px;
    border: none;
    background-color: #4935ff;
    border-radius: 8px;
    color: #fff;

    & > select {
      background: transparent;
      border: none;
      outline: none;
      color: #fff;
    }
  }
`;

const MainBalance = styled.div`
  padding: 5px 0;
  font-size: 14px;

  & > small {
    color: #c3c3c3;
    font-size: 12px;
  }
`;

const Contributions = styled.div`
  margin-top: 10px;
  & > small {
    color: #c3c3c3;
  }
`;

const Interest = styled.div`
  margin-top: 20px;
  color: #363636;
  & > small {
    color: #c3c3c3;
  }
`;

const RecentTransaction = styled.div`
  margin-top: 40px;
  color: #363636;
  padding: 10px;
  & > h4 {
    margin-bottom: 10px;
  }

  & > div {
    margin-bottom: 10px;
    border-bottom: 1px solid lightgrey;

    & > small {
      color: #c3c3c3;
    }

    & > p {
      font-size: 12px;
      margin-bottom: 10px;
    }
  }
`;
