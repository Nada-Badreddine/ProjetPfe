import * as React from "react";
import {
    Edit,
    SimpleForm,
    TextInput,
} from 'react-admin';


const EditCategory = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput multiline source="reference" />
        </SimpleForm>
    </Edit>
);

export default EditCategory;