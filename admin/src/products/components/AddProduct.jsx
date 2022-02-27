import * as React from "react";
import {
    SimpleForm,
    TextInput,
    Create,
    ReferenceInput,
    SelectInput,
} from 'react-admin';

const AddProduct = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="price" />
            <TextInput source="description" />
            <ReferenceInput source="category" reference="categories">
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);

export default AddProduct;