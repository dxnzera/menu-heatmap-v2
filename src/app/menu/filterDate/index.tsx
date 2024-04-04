import React, {useState} from "react"; 
import Datepicker from "react-tailwindcss-datepicker"; 

export function FilterDate () { 
  const [value, setValue] = useState({ 
    startDate: null,
    endDate: null 
  }); 

  const handleValueChange = (newValue:any) => {
    console.log("newValue:", newValue); 
    setValue(newValue); 
  } 

  return (
    <div className="w-2/6">
      <Datepicker
        useRange={true} 
        value={value} 
        onChange={handleValueChange} 
        displayFormat={"DD/MM/YYYY"} 
      /> 
    </div>
  );
}; 