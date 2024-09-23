/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function ProfileCard(props) {
  const { petstoreModel, overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      direction="column"
      width="466px"
      height="609px"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="24px 24px 24px 24px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "ProfileCard")}
      {...rest}
    >
      <Image
        width="160px"
        height="160px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        borderRadius="160px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={petstoreModel?.Image}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Text
        fontFamily="Langar"
        fontSize="32px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="28px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="418px"
        height="31px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={petstoreModel?.Name}
        {...getOverrideProps(overrides, "Melinda Marcus")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="700"
        color="rgba(64,197,181,1)"
        lineHeight="30px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="322px"
        height="28px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={petstoreModel?.About}
        {...getOverrideProps(overrides, "About: \u2028\u2028\u2028")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="700"
        color="rgba(109,82,82,1)"
        lineHeight="30px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="364px"
        height="28px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={petstoreModel?.Age}
        {...getOverrideProps(overrides, "Age:")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="700"
        color="rgba(107,60,129,1)"
        lineHeight="30px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="338px"
        height="24px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={petstoreModel?.Colour}
        {...getOverrideProps(overrides, "Colour:")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="700"
        color="rgba(181,80,24,1)"
        lineHeight="30px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="338px"
        height="28px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={petstoreModel?.Breed}
        {...getOverrideProps(overrides, "Breed:")}
      ></Text>
      <Button
        width="unset"
        height="unset"
        border="1px SOLID rgba(233,249,252,1)"
        shrink="0"
        alignSelf="stretch"
        backgroundColor="rgba(0,85,102,1)"
        size="large"
        isDisabled={false}
        variation="primary"
        children="View Profile"
        {...getOverrideProps(overrides, "Button29766907")}
      ></Button>
      <Button
        width="unset"
        height="unset"
        border="1px SOLID rgba(233,249,252,1)"
        shrink="0"
        alignSelf="stretch"
        backgroundColor="rgba(0,85,102,1)"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Delete Profile"
        {...getOverrideProps(overrides, "Button38721101")}
      ></Button>
    </Flex>
  );
}
