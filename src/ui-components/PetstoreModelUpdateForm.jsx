/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getPetstoreModel } from "../graphql/queries";
import { updatePetstoreModel } from "../graphql/mutations";
const client = generateClient();
export default function PetstoreModelUpdateForm(props) {
  const {
    id: idProp,
    petstoreModel: petstoreModelModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Name: "",
    About: "",
    Age: "",
    Colour: "",
    Image: "",
    Breed: "",
  };
  const [Name, setName] = React.useState(initialValues.Name);
  const [About, setAbout] = React.useState(initialValues.About);
  const [Age, setAge] = React.useState(initialValues.Age);
  const [Colour, setColour] = React.useState(initialValues.Colour);
  const [Image, setImage] = React.useState(initialValues.Image);
  const [Breed, setBreed] = React.useState(initialValues.Breed);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = petstoreModelRecord
      ? { ...initialValues, ...petstoreModelRecord }
      : initialValues;
    setName(cleanValues.Name);
    setAbout(cleanValues.About);
    setAge(cleanValues.Age);
    setColour(cleanValues.Colour);
    setImage(cleanValues.Image);
    setBreed(cleanValues.Breed);
    setErrors({});
  };
  const [petstoreModelRecord, setPetstoreModelRecord] = React.useState(
    petstoreModelModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getPetstoreModel.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getPetstoreModel
        : petstoreModelModelProp;
      setPetstoreModelRecord(record);
    };
    queryData();
  }, [idProp, petstoreModelModelProp]);
  React.useEffect(resetStateValues, [petstoreModelRecord]);
  const validations = {
    Name: [{ type: "Required" }],
    About: [{ type: "Required" }],
    Age: [{ type: "Required" }],
    Colour: [{ type: "Required" }],
    Image: [{ type: "Required" }],
    Breed: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          Name,
          About,
          Age,
          Colour,
          Image,
          Breed,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updatePetstoreModel.replaceAll("__typename", ""),
            variables: {
              input: {
                id: petstoreModelRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "PetstoreModelUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={Name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name: value,
              About,
              Age,
              Colour,
              Image,
              Breed,
            };
            const result = onChange(modelFields);
            value = result?.Name ?? value;
          }
          if (errors.Name?.hasError) {
            runValidationTasks("Name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("Name", Name)}
        errorMessage={errors.Name?.errorMessage}
        hasError={errors.Name?.hasError}
        {...getOverrideProps(overrides, "Name")}
      ></TextField>
      <TextField
        label="About"
        isRequired={true}
        isReadOnly={false}
        value={About}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              About: value,
              Age,
              Colour,
              Image,
              Breed,
            };
            const result = onChange(modelFields);
            value = result?.About ?? value;
          }
          if (errors.About?.hasError) {
            runValidationTasks("About", value);
          }
          setAbout(value);
        }}
        onBlur={() => runValidationTasks("About", About)}
        errorMessage={errors.About?.errorMessage}
        hasError={errors.About?.hasError}
        {...getOverrideProps(overrides, "About")}
      ></TextField>
      <TextField
        label="Age"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={Age}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              Name,
              About,
              Age: value,
              Colour,
              Image,
              Breed,
            };
            const result = onChange(modelFields);
            value = result?.Age ?? value;
          }
          if (errors.Age?.hasError) {
            runValidationTasks("Age", value);
          }
          setAge(value);
        }}
        onBlur={() => runValidationTasks("Age", Age)}
        errorMessage={errors.Age?.errorMessage}
        hasError={errors.Age?.hasError}
        {...getOverrideProps(overrides, "Age")}
      ></TextField>
      <TextField
        label="Colour"
        isRequired={true}
        isReadOnly={false}
        value={Colour}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              About,
              Age,
              Colour: value,
              Image,
              Breed,
            };
            const result = onChange(modelFields);
            value = result?.Colour ?? value;
          }
          if (errors.Colour?.hasError) {
            runValidationTasks("Colour", value);
          }
          setColour(value);
        }}
        onBlur={() => runValidationTasks("Colour", Colour)}
        errorMessage={errors.Colour?.errorMessage}
        hasError={errors.Colour?.hasError}
        {...getOverrideProps(overrides, "Colour")}
      ></TextField>
      <TextField
        label="Image"
        isRequired={true}
        isReadOnly={false}
        value={Image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              About,
              Age,
              Colour,
              Image: value,
              Breed,
            };
            const result = onChange(modelFields);
            value = result?.Image ?? value;
          }
          if (errors.Image?.hasError) {
            runValidationTasks("Image", value);
          }
          setImage(value);
        }}
        onBlur={() => runValidationTasks("Image", Image)}
        errorMessage={errors.Image?.errorMessage}
        hasError={errors.Image?.hasError}
        {...getOverrideProps(overrides, "Image")}
      ></TextField>
      <TextField
        label="Breed"
        isRequired={true}
        isReadOnly={false}
        value={Breed}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              About,
              Age,
              Colour,
              Image,
              Breed: value,
            };
            const result = onChange(modelFields);
            value = result?.Breed ?? value;
          }
          if (errors.Breed?.hasError) {
            runValidationTasks("Breed", value);
          }
          setBreed(value);
        }}
        onBlur={() => runValidationTasks("Breed", Breed)}
        errorMessage={errors.Breed?.errorMessage}
        hasError={errors.Breed?.hasError}
        {...getOverrideProps(overrides, "Breed")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || petstoreModelModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || petstoreModelModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
