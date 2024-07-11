import { useAuth } from "../../context/AuthContext";
import { Alert, Button } from "@mui/material";
import { useRef, useState } from "react";
import {
  Form,
  useLoaderData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import VirtualKeyboard from "../VirtualKeyboard/Keyboard";
import Loader from "../../ui/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { showToastMessage } from "../../utils/showToastMessage";
import { useTranslation } from "react-i18next";
import LinkButton from "../../ui/LinkButton";
import CustomInput from "../../ui/CustomInput";
import getUsers from "../../services/apiUsers";
import CustomKeyboardIcon from "./CustomKeyboardIcon";

function LoginForm() {
  const { user, setUser } = useAuth();
  const { t: translate } = useTranslation();
  const [formData, setFormData] = useState({ userCode: "", userPass: "" });
  const [focusedInput, setFocusedInput] = useState("");
  const [errors, setErrors] = useState({});
  const keyboard = useRef();
  const regex = /\D/;
  const navigate = useNavigate();
  const users = useLoaderData();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  function validate(values) {
    const errors = {};
    if (!values.userCode) {
      errors.userCode = "UserCode is required!";
    } else if (values.userCode.length !== 6 || regex.test(+values.userCode)) {
      errors.userCode = translate("errors.WrongCodeErr");
    }
    if (!values.userPass) {
      errors.userPass = "Password is required";
    } else if (values.userPass.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.userPass.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    keyboard?.current?.setInput(value);
  }

  function handleKeyboardToggle(inputName) {
    setFocusedInput((prev) => (prev === inputName ? "" : inputName));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (user.isAuthenticated) {
      setErrors((prev) => ({
        ...prev,
        alreadyAuthenticated: translate("errors.alreadyLoggedInMessage"),
      }));
      return;
    }
    const valdiateErrors = validate(formData);
    setErrors({ ...valdiateErrors });
    const { userCode, userPass } = formData;
    const authenticatedUser = users.find(
      (u) => u.userCode === +userCode && u.userPass === userPass
    );

    if (authenticatedUser) {
      const updatedUser = { ...authenticatedUser, isAuthenticated: true };
      setErrors({});
      setUser(updatedUser);
      setFormData({ userCode: "", userPass: "" });
      setFocusedInput("");
      showToastMessage(translate("auth.loginSuccessMessage"), 3000);
      setTimeout(() => navigate("/"), 3000);
    } else {
      !valdiateErrors.userCode &&
        !valdiateErrors.userPass &&
        setErrors({
          formError: translate("errors.notFoundErr"),
        });
    }
  }

  return (
    <>
      <ToastContainer />
      {errors?.alreadyAuthenticated && (
        <Alert
          sx={{
            position: "absolute",
            minWidth: "300px",
            maxWidth: "600px",
            top: "0",
          }}
          severity="error"
        >
          {errors?.alreadyAuthenticated}
        </Alert>
      )}

      <Loader isLoading={isLoading} />
      <Form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
        onSubmit={handleSubmit}
      >
        <Stack
          alignItems="center"
          spacing={3}
          sx={{
            backgroundColor: "var(--color-grey-0)",
            borderRadius: "16px",
            boxShadow: "0 3px 5px rgba(0,0,0,.15)",
            padding: "1rem 2rem",
            width: { md: "550px", xs: "375px" },
            overflow: "hidden",
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: "var(--color-grey-700)", fontWeight: "bold" }}
          >
            {translate("auth.welcome")}
          </Typography>
          <Stack spacing={2} sx={{ width: "90%" }}>
            <Typography sx={{ color: "var(--color-grey-700)" }} variant="h6">
              {translate("auth.prompt")}
            </Typography>
            <Box sx={{ position: "relative" }}>
              <CustomInput
                fullWidth
                name="userCode"
                text={translate("auth.userCode")}
                value={formData.userCode}
                onChange={handleInputChange}
                sx={{ backgroundColor: "var(--color-grey-50)" }}
              />
              <CustomKeyboardIcon
                onClick={() => handleKeyboardToggle("userCode")}
                showKeyboard={focusedInput === "userCode"}
              />
              {errors.userCode && (
                <Typography variant="subtitle2" color="error" mt={1}>
                  {errors.userCode}
                </Typography>
              )}
            </Box>
            <Box sx={{ position: "relative" }}>
              <CustomInput
                fullWidth
                name="userPass"
                text={translate("auth.password")}
                value={formData.userPass}
                onChange={handleInputChange}
                sx={{ backgroundColor: "var(--color-grey-50)" }}
              />
              <CustomKeyboardIcon
                onClick={() => handleKeyboardToggle("userPass")}
                showKeyboard={focusedInput === "userPass"}
              />
              {(errors.userPass || errors.formError) && (
                <Typography variant="subtitle2" color="error" mt={1}>
                  {errors.userPass || errors.formError}
                </Typography>
              )}
            </Box>
            {focusedInput === "userCode" && (
              <VirtualKeyboard
                setInput={(input) =>
                  setFormData({ ...formData, userCode: input })
                }
                keyboard={keyboard}
              />
            )}
            {focusedInput === "userPass" && (
              <VirtualKeyboard
                setInput={(input) =>
                  setFormData({ ...formData, userPass: input })
                }
                keyboard={keyboard}
              />
            )}
          </Stack>
          <Button
            variant="contained"
            type="submit"
            sx={{
              backgroundColor: "var(--color-brand-600)",
              borderRadius: "12px",
              minWidth: "300px",
              "&:hover": { backgroundColor: "var(--color-brand-700)" },
              color: "#fff",
              fontWeight: "bold",
              fontSize: "0.875rem",
            }}
          >
            {translate("auth.signIn")}
          </Button>
        </Stack>
        {user.isAuthenticated && (
          <LinkButton sx={{ color: "var(--color-brand-600)" }} to="/">
            &larr;{translate("auth.goBack")}
          </LinkButton>
        )}
      </Form>
    </>
  );
}

export async function loader() {
  const users = await getUsers();
  return users;
}

export default LoginForm;
