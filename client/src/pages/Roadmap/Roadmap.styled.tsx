import styled from "styled-components";

const RoadmapBox = styled.div`
  max-width: 1160px;
  width: 100%;
  margin: 50px auto;
`;
const RoadmapBoxHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
  padding: 25px;
  align-self: flex-start;
  border-radius: 10px;
  background: hsl(231, 41%, 10%);
  color: #fff;
`;
const RoadmapHeaderTitle = styled.h3`
  margin-top: 10px;
  font-size: 1.5rem;
  font-weight: 600;
`;
const RoadmapLeft = styled.div`
  & > *:first-child {
    display: flex;
    align-items: center;
    gap: 20px;
    font-weight: 600;
  }
`;
const RoadmapRight = styled.div``;
const RoadmapBtn = styled.button`
  border-radius: 10px;
  padding: 10px 15px;
  background: hsl(279, 87%, 50%);
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  @media (min-width: 768px) {
    padding: 14px 20px;
  }
`;

const RoadmapStatusSwitcherBox = styled.div`
  margin-top: -50px;
  margin-bottom: 50px;
  border-bottom: 1px solid #999;
`;
const RoadmapStatusSwitcherList = styled.ul`
  display: flex;
  align-items: center;
  & > * {
    flex: 1;
  }
`;
const RoadmapStatusSwitcherItem = styled.li`
  position: relative;
  padding: 25px 0;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  &:hover::before {
    background: #cfcfcf;
  }
  &.planned {
    &::before {
      background: orange;
    }
  }
  &.in-progress {
    &::before {
      background: purple;
    }
  }
  &.live {
    &::before {
      background: #00b3ff;
    }
  }
  &::before {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 10px;
    border-radius: 20px;
    font-weight: 700;
    transition: all 0.3s ease-out;
  }
`;

const RoadmapFlexContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  width: 90%;
  margin: 0 auto;

  @media (min-width: 992px) {
    width: 100%;
  }
`;
const RoadmapFeedbackBox = styled.section``;
const RoadmapHeader = styled.header`
  margin-bottom: 30px;
`;
const RoadmapTitle = styled.h1`
  font-size: 1.7rem;
  color: #222;
  font-weight: 600;
`;
const RoadmapDescription = styled.p`
  color: #555;
`;

export {
  RoadmapBox,
  RoadmapBoxHeader,
  RoadmapHeaderTitle,
  RoadmapLeft,
  RoadmapRight,
  RoadmapBtn,
  RoadmapStatusSwitcherBox,
  RoadmapStatusSwitcherList,
  RoadmapStatusSwitcherItem,
  RoadmapFlexContainer,
  RoadmapFeedbackBox,
  RoadmapHeader,
  RoadmapTitle,
  RoadmapDescription,
};
