import React, { useState } from "react";
import {
  FilterFeedbackStatusSelect,
  FilterFeedbackStatusOption,
} from "./FilterFeedbackStatus.styled";

type FilterFeedbackStatusProps = {
  getCurrentFilterStatus: (status: string) => void;
};

const FilterFeedbackStatus = ({
  getCurrentFilterStatus,
}: FilterFeedbackStatusProps) => {
  const [statusVal, setStatusVal] = useState("all");
  const handleUpdateStatusChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setStatusVal(e.target.value);
    getCurrentFilterStatus(e.target.value);
  };
  return (
    <FilterFeedbackStatusSelect
      onChange={handleUpdateStatusChange}
      value={statusVal}
    >
      <FilterFeedbackStatusOption value="all">All</FilterFeedbackStatusOption>
      <FilterFeedbackStatusOption value="planned">
        PLANNED
      </FilterFeedbackStatusOption>
      <FilterFeedbackStatusOption value="in-progress">
        IN-PROGRESS
      </FilterFeedbackStatusOption>
      <FilterFeedbackStatusOption value="live">LIVE</FilterFeedbackStatusOption>
    </FilterFeedbackStatusSelect>
  );
};

export default FilterFeedbackStatus;
