import React, { useState } from 'react';


export const SidebarToggle = (props) => {
  const {isExpanded, setIsExpanded} = props;

  return (
    <button onClick={() => setIsExpanded(!isExpanded)}>{ isExpanded ? 'ON' : 'OFF' }</button>
  );
}