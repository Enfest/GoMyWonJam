//react import
import {useState} from "react";

//mui import
import { IconButton, ListItem, ListItemText, Box, Divider, Card, List } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

//component import
import AddProductForm from "./AddProductForm";
import ProductinCat from "./ProductsinCategory";

//test data improt 
import Products from "../../test datas/Products";

//functional component
const CategoryListItem = ({item, }) =>{
    //set state
    const [open, setOpen] = useState(false)
    //function define
    const handleModify = () => {
        console.log("handlemodify");
    }

    const handleDelete = () => {
        console.log("handle Delete");
    }

    const handleExpand = () => {
        console.log("handle expand");
        setOpen(!open);
    }

    //return
    return(
        <Card sx={{width: "100%"}}>
            <ListItem>
                <ListItemText primary={item.name} secondary={item.deadline} />
                <IconButton
                    onClick={()=>{handleExpand()}}
                >
                    <ExpandMoreIcon />
                </IconButton>
                <IconButton
                    onClick={()=>{handleModify()}}
                >
                    <EditIcon />
                </IconButton>
                <IconButton
                    onClick={()=>{handleDelete()}}
                >
                    <DeleteIcon />
                </IconButton>
                {open? <AddProductForm />:<></>}
            </ListItem>
            {open? 
            <Box sx={{width: "100%"}}>
                <Divider />
                <List>
                {Products.map((value, index)=>(
                    <ProductinCat item={value} key={index} />
                ))}
                </List>
            </Box>
            :<></>}
        </Card>
    )
}

export default CategoryListItem;