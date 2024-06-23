import {SimpleForm,Edit,TextInput,ReferenceInput,required,NumberInput } from "react-admin";
 
export const  UnitEdit =() =>{
    return (
        <Edit>
        <SimpleForm > 
        <NumberInput  source="id"  validate={[required()]} label="Id" />
        <TextInput  source="title"  validate={[required()]} label="Title" />
        <TextInput  source="description"  validate={[required()]} label="Description"  />
        <ReferenceInput 
         source="courseId"
         reference="courses"
        />
        <NumberInput 
        source="order"
        validate={[required()]}
        label="order"
        />
        </SimpleForm>
     </Edit>

    );
}