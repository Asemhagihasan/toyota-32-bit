import { Box, Button, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Input from "../../ui/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomKeyboardIcon from "./CustomKeyboardIcon";
import { useRef, useState } from "react";
import VirtualKeyboard from "../VirtualKeyboard/Keyboard";
import { useAuth } from "../../context/AuthContext";
import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import toast from "react-hot-toast";
import getUsers from "../../services/apiUsers";
import Loader from "../../ui/Loader";
import LinkButton from "../../ui/LinkButton";

function LoginForm() {
  const { t: translate } = useTranslation();
  const [focusedInput, setFocusedInput] = useState("");
  const [error, setError] = useState(null);
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const keyboard = useRef();
  const users = useLoaderData();
  const formik = useFormik({
    initialValues: {
      userCode: "",
      userPass: "",
    },
    // .email("Invalid user address")
    validationSchema: Yup.object({
      userCode: Yup.string().required("UserCode is required!"),
      userPass: Yup.string().min(5).required("Password is required"),
    }),
    onSubmit: async (values) => {
      if (user.isAuthenticated) {
        toast.error(translate("errors.alreadyLoggedInMessage"));
        return;
      }
      const { userCode, userPass } = values;
      const authenticatedUser = users.find(
        (u) => u.userCode === +userCode && u.userPass === userPass
      );
      if (authenticatedUser) {
        const updatedUser = { ...authenticatedUser, isAuthenticated: true };
        setUser(updatedUser);
        setFocusedInput("");
        toast.success(translate("auth.loginSuccessMessage"));
        navigate("/");
      } else {
        setError(translate("errors.notFoundErr"));
      }
    },
  });

  function handleKeyboardToggle(inputName) {
    setFocusedInput((prev) => (prev === inputName ? "" : inputName));
  }


  return (
    <>
      <Loader isLoading={isLoading} />
      <Box
        onSubmit={formik.handleSubmit}
        component="form"
        sx={{
          backgroundColor: "var(--color-grey-0)",
          borderRadius: "16px",
          boxShadow: "0 3px 5px rgba(0,0,0,.15)",
          padding: "2.8rem 2rem",
          width: "550px",
          minWidth: "375px",
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
          overflow: "hidden",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "var(--color-grey-700)",
            fontWeight: "bold",
            textAlign: "center",
            mb: "1rem",
          }}
        >
          {translate("auth.welcome")}
        </Typography>
        <Stack sx={{ position: "relative" }}>
          <Input
            placeholder="User code"
            name="userCode"
            type="text"
            onChange={formik.handleChange}
            onFocus={() => setFocusedInput("userCode")}
            onBlur={formik.handleBlur}
            value={formik.values.userCode}
            label="User Code"
          />
          <CustomKeyboardIcon
            onClick={() => handleKeyboardToggle("userCode")}
            showKeyboard={focusedInput === "userCode"}
          />
          {formik.touched.userCode && formik.errors.userCode ? (
            <Typography color="error">{formik.errors.userCode}</Typography>
          ) : null}
        </Stack>
        <Stack sx={{ position: "relative" }}>
          <Input
            placeholder="Password"
            name="userPass"
            type="password"
            onChange={formik.handleChange}
            onFocus={() => setFocusedInput("userPass")}
            onBlur={formik.handleBlur}
            value={formik.values.userPass}
            label="Password"
          />
          <CustomKeyboardIcon
            onClick={() => handleKeyboardToggle("userPass")}
            showKeyboard={focusedInput === "userPass"}
          />
          {error || (formik.touched.userPass && formik.errors.userPass) ? (
            <Typography color="error" mt={1}>
              {error || formik.errors.userPass}
            </Typography>

        </Stack>
        {focusedInput && (
          <VirtualKeyboard
            setInput={handleVirtualKeyboardInput}
            keyboard={keyboard}
          />
        )}

        <Button
          variant="contained"
          fullWidth
          disableElevation
          type="submit"
          sx={{
            backgroundColor: "var(--color-brand-600)",
            "&:hover": { backgroundColor: "var(--color-brand-700)" },
          }}
        >
          Sign in
        </Button>
        {user.isAuthenticated && (
          <LinkButton sx={{ color: "var(--color-brand-600)" }} to="/">
            &larr;{translate("auth.goBack")}
          </LinkButton>
        )}
      </Box>
    </>
  );
}

export default LoginForm;
export async function loader() {
  const users = await getUsers();
  return users;
}
