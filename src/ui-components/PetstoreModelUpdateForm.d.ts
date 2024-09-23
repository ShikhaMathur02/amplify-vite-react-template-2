/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PetstoreModelUpdateFormInputValues = {
    Name?: string;
    About?: string;
    Age?: number;
    Colour?: string;
    Image?: string;
    Breed?: string;
};
export declare type PetstoreModelUpdateFormValidationValues = {
    Name?: ValidationFunction<string>;
    About?: ValidationFunction<string>;
    Age?: ValidationFunction<number>;
    Colour?: ValidationFunction<string>;
    Image?: ValidationFunction<string>;
    Breed?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PetstoreModelUpdateFormOverridesProps = {
    PetstoreModelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    About?: PrimitiveOverrideProps<TextFieldProps>;
    Age?: PrimitiveOverrideProps<TextFieldProps>;
    Colour?: PrimitiveOverrideProps<TextFieldProps>;
    Image?: PrimitiveOverrideProps<TextFieldProps>;
    Breed?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PetstoreModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: PetstoreModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    petstoreModel?: any;
    onSubmit?: (fields: PetstoreModelUpdateFormInputValues) => PetstoreModelUpdateFormInputValues;
    onSuccess?: (fields: PetstoreModelUpdateFormInputValues) => void;
    onError?: (fields: PetstoreModelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PetstoreModelUpdateFormInputValues) => PetstoreModelUpdateFormInputValues;
    onValidate?: PetstoreModelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PetstoreModelUpdateForm(props: PetstoreModelUpdateFormProps): React.ReactElement;
