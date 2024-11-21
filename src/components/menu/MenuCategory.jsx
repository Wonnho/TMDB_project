import React from "react";
import MenuCategoryItem from "./MenuCategoryItem";

export default function MenuCategory({ category, beverages }) {
  const menuList = beverages.map((beverage) => {
    return <MenuCategoryItem key={beverage.name} {...beverage} />;
  });
  return (
    <section>
      <h1 className="text-center">{category}</h1>
      <ul>{menuList}</ul>
    </section>
  );
}
