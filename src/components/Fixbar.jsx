import React from "react";

import TransitionLink from '../utils/TransitionLink'

const Fixbar = ({ links }) => {
  const id = window.location.pathname.split("/")[1];

  return (
    <div className=" fixed bottom-6 left-[50%] translate-x-[-50%] z-50 flex items-center gap-4 bg-primary-dark py-3 px-4 rounded-[1.5rem] shadow-md">
      {links?.map((item, i) => (
        <>
          {(item.link || item.link === "") ? (
            <TransitionLink 
              key={i}
              href={`/${item.link}`}
              className={`${
                id === item.link ? "bg-primary-light" : ""
              } w-fit p-2 px-3 rounded-full flex items-center gap-2 `}
            >
              <span>{item.icon}</span>
              <span className="text-white">
                {item.link === id && item.link}
              </span>
            </TransitionLink>
          ) : (
            <span
              key={i}
              className={`${
                item.active ? "bg-primary-light" : ""
              } w-fit p-2 px-3 rounded-full flex items-center gap-2 `}
              onClick={item.onClick}
            >
              <span>{item.icon}</span>
            </span>
          )}
        </>
      ))}
    </div>
  );
};

export default Fixbar;
