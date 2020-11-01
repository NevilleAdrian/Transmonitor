import { useState } from "react";


//Custom reusable hooks

export const useCustomHook = (initialstate) => {

    const [input, setInput] = useState(initialstate);
  
    const handleInputChange = () => {
      setInput(!input);
      console.log('input', input)
    };

  
    return [input, handleInputChange]
  } 
  