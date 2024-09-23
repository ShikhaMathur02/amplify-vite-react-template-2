/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProfileCardOverridesProps = {
    ProfileCard?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Melinda Marcus"?: PrimitiveOverrideProps<TextProps>;
    "About: \u2028\u2028\u2028"?: PrimitiveOverrideProps<TextProps>;
    "Age:"?: PrimitiveOverrideProps<TextProps>;
    "Colour:"?: PrimitiveOverrideProps<TextProps>;
    "Breed:"?: PrimitiveOverrideProps<TextProps>;
    Button29766907?: PrimitiveOverrideProps<ButtonProps>;
    Button38721101?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ProfileCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    petstoreModel?: any;
} & {
    overrides?: ProfileCardOverridesProps | undefined | null;
}>;
export default function ProfileCard(props: ProfileCardProps): React.ReactElement;
