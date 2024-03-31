import React from "react";
import styles from "./style.module.scss";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";

const Category = () => {
  return (
    <div className="w-[80%] mx-auto flex flex-row mt-16 mb-10 gap-x-10">
    <Sidebar />
    <div className="w-[100%] flex flex-row flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
    </div>
  );
};

export default Category;
