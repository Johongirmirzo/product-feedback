import styled from "styled-components";

const SidebarCategoriesBox = styled.div`
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 30px 0;
  padding: 15px;
  background: #f7f7f7;
`;
const SidebarCategoriesList = styled.ul`
  height: 200px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  & > * {
    align-self: center;
  }
`;
const SidebarCategoriesItem = styled.li`
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 8px 12px;

  background: hsla(219, 100%, 50%, 0.1);
  cursor: pointer;
  font-weight: 600;
  color: #0059ff;

  &.active {
    background: hsl(219, 81%, 44%);
    color: #fff;
  }
`;

export { SidebarCategoriesBox, SidebarCategoriesList, SidebarCategoriesItem };
