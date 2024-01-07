import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";

const LeftSection = () => {
  return (
    <LeftWrapper>
      <Sidebar />
      <Profile />
    </LeftWrapper>
  );
};

export default LeftSection;

const LeftWrapper = styled.div`
  display: flex;
  flex: 1;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
