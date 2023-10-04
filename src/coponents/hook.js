import { useState } from "react";

export function useFormInputs(initialvalue){
    const [value, setValue] = useState(initialvalue);

    function hadleChange(e){
        if(!e.target){
            setValue("")
            return
        }
        setValue(e.target.value)
    }

    return{
        value,
        onChange:hadleChange
    }
}