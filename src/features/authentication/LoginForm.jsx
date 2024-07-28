import { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import VirtualKeyboard from "../VirtualKeyboard/Keyboard";
import Loader from "../../ui/Loader";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import getUsers from "../../services/apiUsers";
import CustomKeyboardIcon from "./CustomKeyboardIcon";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";

function LoginForm() {
  const { t: translate } = useTranslation();
  const { user, setUser } = useAuth();
  const users = useLoaderData();
  const [focusedInput, setFocusedInput] = useState("");
  const keyboard = useRef();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  function handleKeyboardToggle(inputName) {
    setFocusedInput((prev) => (prev === inputName ? "" : inputName));
  }

  function onSubmit(data) {
    if (user.isAuthenticated) {
      toast.error(translate("errors.alreadyLoggedInMessage"));
      return;
    }
    const { userCode, userPass } = data;
    const authenticatedUser = users.find(
      (u) => u.userCode === +userCode && u.userPass === userPass
    );
    if (authenticatedUser) {
      const updatedUser = { ...authenticatedUser, isAuthenticated: true };
      setUser(updatedUser);
      setFocusedInput("");
      reset();
      toast.success(translate("auth.loginSuccessMessage"));
      navigate("/");
    } else {
      toast.error(translate("errors.notFoundErr"));
    }
  }

  function onError(errors) {
    console.log(errors);
  }

  function updateUserCode(value) {
    setValue("userCode", value);
  }

  function updateUserPass(value) {
    setValue("userPass", value);
  }

  return (
    <>
      <Loader isLoading={isLoading} />
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <Typography
          variant="h4"
          sx={{
            color: "var(--color-grey-700)",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {translate("auth.welcome")}
        </Typography>
        <Stack flexDirection="column" gap={2}>
          <Box sx={{ position: "relative" }}>
            <Input
              type="text"
              label={translate("auth.userCode")}
              onFocus={() => setFocusedInput("userCode")}
              placeholder={translate("auth.userCode")}
              id="userCode"
              {...register("userCode", {
                required: translate("errors.fieldRequired"),
                validate: (value) =>
                  value.length === 6 || translate("errors.WrongCodeErr"),
              })}
            />
            {errors.userCode && (
              <Typography color="error">{errors.userCode.message}</Typography>
            )}

            <CustomKeyboardIcon
              showKeyboard={focusedInput === "userCode"}
              onClick={() => handleKeyboardToggle("userCode")}
            />
          </Box>
          <Box sx={{ position: "relative" }}>
            <Input
              type="password"
              id="userPass"
              placeholder={translate("auth.password")}
              onFocus={() => setFocusedInput("userPass")}
              label="Password"
              {...register("userPass", {
                required: translate("errors.fieldRequired"),
              })}
            />
            {errors.userPass && (
              <Typography color="error">{errors.userPass.message}</Typography>
            )}
            <CustomKeyboardIcon
              showKeyboard={focusedInput === "userPass"}
              onClick={() => {
                handleKeyboardToggle("userPass");
              }}
            />
          </Box>
        </Stack>
        {focusedInput === "userCode" && (
          <VirtualKeyboard keyboard={keyboard} setInput={updateUserCode} />
        )}
        {focusedInput === "userPass" && (
          <VirtualKeyboard keyboard={keyboard} setInput={updateUserPass} />
        )}
        <Button
          variant="contained"
          type="submit"
          sx={{
            backgroundColor: "var(--color-brand-600)",
            "&:hover": {
              backgroundColor: "var(--color-brand-700)",
            },
          }}
        >
          {translate("auth.signIn")}
        </Button>
        {user.isAuthenticated && (
          <LinkButton sx={{ color: "var(--color-brand-600)" }} to="/">
            &larr;{translate("auth.goBack")}
          </LinkButton>
        )}
      </Form>
    </>
  );
}

export default LoginForm;

export async function loader() {
  const users = await getUsers();
  return users;
}
