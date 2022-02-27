import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    EditButton,
} from 'react-admin';

const ProductList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <TextField source="price" />
            <TextField source="description" />
            <TextField label='Category name' source="category.name" />
            <EditButton />
        </Datagrid>
    </List>
);

export default ProductList;
