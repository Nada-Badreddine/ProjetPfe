import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    EditButton,
} from 'react-admin';

const CategoryList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <TextField source="reference" />
            <EditButton />
        </Datagrid>
    </List>
);

export default CategoryList;
