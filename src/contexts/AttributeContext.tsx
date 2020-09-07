import React, { createContext } from "react";

const AttributeContext = createContext({
  "currentElementPage": 1
})

const AttributeContextProvider = ({current, children}) => {

  function showContext(current) {
    console.log(current);
  }

  return (
    <AttributeContext.Provider value={
      {"currentElementPage": current}
    }>
      {showContext("context=" + current)}
      {children}
    </AttributeContext.Provider>
  )
}

export default AttributeContext;