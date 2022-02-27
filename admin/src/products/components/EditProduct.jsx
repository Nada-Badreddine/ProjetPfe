import * as React from "react";
import {
    Edit,
    SimpleForm,
    TextInput,
    ReferenceInput,
    SelectInput,
} from 'react-admin';


const EditProduct = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="price" />
            <TextInput source="description" />
            <ReferenceInput source="category" reference="categories">
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export default EditProduct;