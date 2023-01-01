//react import

//mui import
import { List, ListItemText, ListItem } from "@mui/material";

//component import 
import CategoryListItem from "./CategoryListItem";

//testData import 
import Category from "../../test datas/Category";

const CategoryList = () => {
    //set state

    //return
    return(
        <List sx={{
            display: "grid",
            gap: 1
        }}>
            {Category.map((value, index)=>(
                <CategoryListItem item={value} key={index} />
            ))}
        </List>
    )
}

//export 
export default CategoryList;