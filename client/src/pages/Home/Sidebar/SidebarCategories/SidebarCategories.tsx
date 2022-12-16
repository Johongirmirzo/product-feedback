import React, { useState } from "react";
import {
  SidebarCategoriesBox,
  SidebarCategoriesList,
  SidebarCategoriesItem,
} from "./SidebarCategories.styled";
import { categories } from "./data";

type SidebarCategoriesProps = {
  getActiveCategory: (category: string) => void;
};
const SidebarCategories = ({ getActiveCategory }: SidebarCategoriesProps) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const changeActiveCategory = (category: string) => {
    setActiveCategory(category.toLowerCase());
    getActiveCategory(category.toLowerCase());
  };
  return (
    <SidebarCategoriesBox>
      <SidebarCategoriesList>
        {categories.map((category) => (
          <SidebarCategoriesItem
            key={category}
            className={
              activeCategory === category.toLowerCase() ? "active" : ""
            }
            onClick={changeActiveCategory.bind(null, category)}
          >
            {category}
          </SidebarCategoriesItem>
        ))}
      </SidebarCategoriesList>
    </SidebarCategoriesBox>
  );
};

export default SidebarCategories;
