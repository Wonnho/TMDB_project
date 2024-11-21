import React from "react";
import MenuCategory from "./MenuCategory";

export default function Menu() {
  const beverages = {
    categories: ["coffee", "ade", "tea","traditiontea"],
    result: [
      { name: "아메리카노", price: "5.0/5.5", category: "coffee" },
      { name: "카페 라떼", price: "6.0/6.5", category: "coffee" },
      { name: "바닐라 라떼", price: "6.0/6.5", category: "coffee" },
      { name: "레몬에이드", price: "6.0", category: "ade" },
      { name: "자몽에이드", price: "6.0", category: "ade" },
      { name: "유자에이드", price: "6.0", category: "ade" },
      { name: "홍차", price: "6.0", category: "tea" },
      { name: "녹차", price: "6.0", category: "tea" },
      { name: "쌍화차", price: "6.0", category: "tea" },
      { name: "홍차", price: "6.0", category: "traditiontea" },
      { name: "녹차", price: "6.0", category: "traditiontea" },
      { name: "쌍화차", price: "6.0", category: "traditiontea" },
    ],
  };
  const { categories, result } = beverages;
  const beveragesObj = {};

  categories.forEach((category) => {
    beveragesObj[category] = result.filter((beverage) => {
      return beverage.category === category;
    });
  });
  console.log("beveragesObj", beveragesObj);
  console.log("beveragesObj entries:", Object.entries(beveragesObj));

  const beverageList = Object.entries(beveragesObj);

  const menuCategories = beverageList.map((el) => {
    // el은 배열
    const [category, beverage] = el;
    // console.log(category, beverage);
    return (
      <MenuCategory key={category} category={category} beverages={beverage} />
    );
  });

  return (
    <div>
      <h1 className="text-center">Menu</h1>
      <main>{menuCategories}</main>
    </div>
  );
}
