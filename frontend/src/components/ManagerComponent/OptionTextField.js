// mui import
import { TextField } from "@mui/material";

//react import
import {useState} from "react";

const OptionTextField = ({setOptions, num, options}) => {
    //set state
    
    //function define
    const handleSetOptions = (value) => {
        let newArr = [...options];
        newArr[num]=value;
        setOptions(newArr);
    }

    //return
    return(
        <TextField
        autoFocus
        required
        margin="dense"
        id="category_name"
        label={"選項"+(num+1)}
        type="text"
        fullWidth
        variant="outlined"
        value={options[num]}
        onChange={(e)=>{handleSetOptions(e.target.value)}}
        />
    )
}

//export
export default OptionTextField;