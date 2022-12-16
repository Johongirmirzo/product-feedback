import styled from "styled-components";

const AdminLogoutBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  margin: 30px 0;
`;
const AdminUsername = styled.p`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 1.2rem;
  & span {
    font-size: 1rem;
    color: #555;
  }
`;
const AdminLogoutBtn = styled.button`
  background: transparent;
  border: 0;
  font-size: 25px;
  cursor: pointer;
`;

export { AdminLogoutBox, AdminUsername, AdminLogoutBtn };
