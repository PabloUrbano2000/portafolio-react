import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "hireMe",
      comment: "",
    },
    onSubmit: (values) => {
      submit("pablo.test", values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("El nombre es requerido."),
      email: Yup.string()
        .email("El email no tiene formato válido.")
        .required("El email es requerido."),
      type: Yup.string().required("El tipo es requerido."),
      comment: Yup.string().required(
        "Deja tu respuesta en la caja de comentarios."
      ),
    }),
  });

  React.useEffect(() => {
    if (!isLoading && response) {
      const type = response.type === "success" ? "success" : "error";
      onOpen(type, response.message);
    }
  }, [isLoading, response]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contáctame
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={false}>
                <FormLabel htmlFor="firstName">Nombre completo</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  className={`${formik.errors.firstName ? "border-red" : ""}`}
                />
                {formik.errors.firstName && (
                  <p style={{ fontSize: 15, color: "red", margin: "2px auto" }}>
                    {formik.errors.firstName}
                  </p>
                )}
              </FormControl>
              <FormControl isInvalid={false}>
                <FormLabel htmlFor="email">Tu correo electrónico</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  className={`${formik.errors.email ? "border-red" : ""}`}
                />
                {formik.errors.email && (
                  <p style={{ fontSize: 15, color: "red", margin: "2px auto" }}>
                    {formik.errors.email}
                  </p>
                )}
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">A qué te dedicas?</FormLabel>
                <Select
                  id="type"
                  name="type"
                  onChange={formik.handleChange}
                  value={formik.values.type}
                  className={`${formik.errors.type ? "border-red" : ""}`}
                >
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              {formik.errors.type && (
                <p style={{ fontSize: 15, color: "red", margin: "2px auto" }}>
                  {formik.errors.type}
                </p>
              )}
              <FormControl isInvalid={false}>
                <FormLabel htmlFor="comment">Tu mensaje</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  onChange={formik.handleChange}
                  value={formik.values.comment}
                  className={`${formik.errors.comment ? "border-red" : ""}`}
                />
                {formik.errors.comment && (
                  <p style={{ fontSize: 15, color: "red", margin: "2px auto" }}>
                    {formik.errors.comment}
                  </p>
                )}
              </FormControl>
              <Button
                type="submit"
                disabled={isLoading}
                colorScheme="purple"
                width="full"
              >
                Enviar
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
