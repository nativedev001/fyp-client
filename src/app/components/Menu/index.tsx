import React from "react";
import menu from "./menu.module.scss";
import { MenuData } from "@/app/libs/dummyData";
import Link from "next/link";

const Menu = () => {
  return (
    <div className={`${menu.mainNav}`}>
      <div className={`${menu.container} flex flex-row gap-8 items-center`}>
        {MenuData.map((item) => (
          <>
            <Link href={item.link} className={`${menu.textstyle}`} key={item.id}>{item.title}</Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default Menu;
