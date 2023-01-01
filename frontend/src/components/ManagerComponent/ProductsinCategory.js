//react import 

//mui import 
import { ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

//test data import 


//functional component
const ProductinCat = ({item}) => {
    //set state

    //function defince
    const handleModify = () => {
        console.log("product handle modify")
    }

    const handleDelete = () => {
        console.log("product handle delete")
    }

    //return
    return(
        <ListItem>
            <ListItemText primary={item.name}/>
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
        </ListItem>
    )

}

//export
export default ProductinCat;