"use client"

import React from "react";
import { usePathname } from 'next/navigation'

import BreadcrumbsItem from "./BreadcrumbsItem";
import BreadcrumbsSeparator from "./BreadcrumbsSeparator";


const Breadcrumbs: React.FC = () => {
  const pathname = usePathname()
  const items = pathname.split("/").filter(item => item != "")

  if (!items.length) return <></>

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <BreadcrumbsItem title={"home"} url={"/"} />        
        {items.map((item, index) => (
          <>
          <BreadcrumbsSeparator />
          {index < items.length - 1 ? 
          <BreadcrumbsItem title={item} url={`/${item}`} />  :
          <BreadcrumbsItem title={item} />  
          }
          </>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
