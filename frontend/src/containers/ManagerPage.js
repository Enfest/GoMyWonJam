//react import 
import {useState} from "react";

//mui import
import { Typography, Box, Chip, Divider, Stack } from '@mui/material';

//component import 
import AppendProduct from '../components/ManagerComponent/AppendProduct';
import AdjustProduct from "../components/ManagerComponent/AdjustProduct";

//router import
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//functional component
const ManagerPage = () => {
    //set state
    const [open, setOpen] = useState([false, false, false, false]);
    const [atWhich, setAtWhich] = useState(0);

    //function define
    const handleClick = (which) => {
        let newopen = [...open]
        newopen[atWhich] = false;
        newopen[which] = true;
        setOpen(newopen);
        setAtWhich(which);
    }

    //return
    return(
        <Box sx={{
            width: "100%",
            display: "grid",
            gap: 2
            }}>
            <Typography variant="h5" component="div">
                管理者介面
            </Typography>
            <Divider />
            <Stack direction="row" spacing={1}>
                <Chip label="商品種類" variant="outlined" onClick={()=>{handleClick(0)}} />
                <Chip label="修改商品" variant="outlined" onClick={()=>{handleClick(1)}} />
                <Chip label="更新訂單狀態" variant="outlined" onClick={()=>{handleClick(2)}} />
                <Chip label="修改訂單" variant="outlined" onClick={()=>{handleClick(3)}} />
            </Stack>
            {open[0]? <AppendProduct />:<></>}
            {open[1]? <AdjustProduct />:<></>}
            {open[2]? <AppendProduct />:<></>}
            {open[3]? <AppendProduct />:<></>}
        </Box>
    )
}

//export
export default ManagerPage;

