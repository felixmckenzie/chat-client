import React from 'react';


export const NavCard = ({heading, subtext}) => {
    return(
        <div className="flex flex-col justify-center items-center p-4 md:w-38 md:h-38 lg:w-48 lg:h-48 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
      <h3 className="text-lg font-medium text-headline-text">{heading}</h3>
      <p className="text-sm text-body-text-light">{subtext}</p>
    </div>
    )
}