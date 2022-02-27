import * as React from "react";
import {
    SimpleForm,
    TextInput,
    Create,
} from 'react-admin';

const AddCategory = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput multiline source="reference" />
        </SimpleForm>
    </Create>
);

export default AddCategory;