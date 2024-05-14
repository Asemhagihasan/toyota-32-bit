import { useAuth } from "../../context/AuthContext";
import { Alert, Button } from "@mui/material";
import { useRef, useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import VirtualKeyboard from "../VirtualKeyboard/Keyboard";
import Loader from "../../ui/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { showToastMessage } from "../../utils/showToastMessage";
import { useTranslation } from "react-i18next";
import LinkButton from "../../ui/LinkButton";
import CustomInput from "../../ui/CustomInput";

function LoginForm() {
  const { user, setUser } = useAuth();
  const { t: translate } = useTranslation();
  const [showTextKeyboard, setShowTextKeyboard] = useState(false);
  const [showPassKeyboard, setShowPassKeyboard] = useState(false);
  const [userCode, setUserCode] = useState("");
  const [userPass, setUserPass] = useState("");
  const [errMesage, setErrMessage] = useState("");
  const [defaultErrMessage, setDefaultErrMessage] = useState("");
  const [isLoading, setIsLoadining] = useState(false);
  const keyboard = useRef();
  const regex = /\D/;
  const navigate = useNavigate();

  function onChangeInput(e) {
    const input = e.target.value;
    showTextKeyboard ? setUserCode(input) : setUserPass(input);
    keyboard?.current?.setInput(input);
  }
  function handelShowKeypord(type) {
    if (type === "text") {
      setShowPassKeyboard(false);
      setShowTextKeyboard((e) => !e);
    }
    if (type === "pass") {
      setShowTextKeyboard(false);
      setShowPassKeyboard((e) => !e);
    }
  }

  function handelSubmit(event) {
    event.preventDefault();
    if (user.isAuthanticated) {
      setDefaultErrMessage(translate("errors.alreadyLoggedInMessage"));
    }
    const formData = new FormData(event.target);
    const userData = {
      userCode: formData.get("userCode"),
      userPass: formData.get("userPass"),
    };

    if (userCode.length !== 6 || regex.test(userCode)) {
      setErrMessage(translate("errors.WrongCodeErr"));
      return;
    }
    setUserPass(userData.userPass);
    setIsLoadining(true);
    axios
      .get("https://661c1c1ce7b95ad7fa69b72a.mockapi.io/api/v3/users")
      .then((response) => {
        setIsLoadining(false);
        const users = response?.data;
        const authenticatedUser = users.find((user) => {
          return (
            user.userCode === +userData.userCode &&
            user.userPass === userData.userPass
          );
        });
        if (authenticatedUser) {
          authenticatedUser.isAuthanticated = true;
          setErrMessage("");
          setUser(authenticatedUser);
          setUserCode("");
          setUserPass("");
          setShowPassKeyboard(false);
          setShowTextKeyboard(false);
          showToastMessage(translate("auth.loginSuccessMessage"), 3000);
          setTimeout(() => {
            navigate("/");
          }, 3000);
        } else {
          setErrMessage(translate("errors.notFoundErr"));
        }
      })
      .catch(() => {
        setIsLoadining(false);
        setDefaultErrMessage(translate("errors.internetConnectionErr"));
      });
  }

  return (
    <>
      <ToastContainer />
      {defaultErrMessage !== "" && (
        <Alert
          sx={{
            position: "absolute",
            minWidth: "300px",
            maxWidth: "600px",
            top: "0",
          }}
          severity="error"
        >
          {defaultErrMessage}
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
        onSubmit={(values) => handelSubmit(values)}
      >
        <Stack
          alignItems="center"
          spacing={3}
          sx={{
            backgroundColor: "#fff",
            border: "1px solid #fff",
            borderRadius: "16px",
            boxShadow: "0 3px 5px rgba(0,0,0,.15)",
            padding: "1rem 2rem",
            width: { md: "550px", xs: "375px" },
            overflow: "hidden",
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: "rgb(33, 43, 54)", fontWeight: "bold" }}
          >
            {translate("auth.welcome")}
          </Typography>
          <Stack spacing={2} sx={{ width: "90%" }}>
            <Typography variant="h6">{translate("auth.prompt")}</Typography>
            <Box sx={{ position: "relative" }}>
              <CustomInput
                fullWidth
                text={translate("auth.userCode")}
                id="text-input"
                value={userCode}
                onChange={onChangeInput}
                onFocus={() => {
                  setShowTextKeyboard(true);
                  setShowPassKeyboard(false);
                }}
                sx={{
                  "&:hover": {
                    border: "2px solid #333",
                  },
                }}
              />
              <IconButton
                sx={{
                  position: "absolute",
                  top: "8px",
                  left: "92%",
                  color: `${showTextKeyboard ? "#0B6BCB" : ""}`,
                }}
                onClick={() => handelShowKeypord("text")}
              >
                <KeyboardIcon />
              </IconButton>
            </Box>
            <Box sx={{ position: "relative" }}>
              <CustomInput
                text={translate("auth.password")}
                fullWidth
                id="pass-input"
                value={userPass}
                onChange={onChangeInput}
                onFocus={() => {
                  setShowTextKeyboard(false);
                  setShowPassKeyboard(true);
                }}
                sx={{
                  "&:hover": {
                    border: "2px solid #333",
                  },
                }}
              />
              <IconButton
                sx={{
                  position: "absolute",
                  top: "8px",
                  left: "92%",
                  color: `${showPassKeyboard ? "#0B6BCB" : ""}`,
                }}
                onClick={() => handelShowKeypord("pass")}
              >
                <KeyboardIcon />
              </IconButton>
              {errMesage !== "" && (
                <Typography variant="body2" color="error" mt="0.875rem">
                  {errMesage}
                </Typography>
              )}
            </Box>
            {showTextKeyboard && (
              <VirtualKeyboard setInput={setUserCode} keyboard={keyboard} />
            )}
            {showPassKeyboard && (
              <VirtualKeyboard setInput={setUserPass} keyboard={keyboard} />
            )}
          </Stack>
          <input type="hidden" name="userCode" value={userCode} />
          <input type="hidden" name="userPass" value={userPass} />
          <Button
            variant="contained"
            type="submit"
            sx={{
              backgroundColor: "rgb(33, 43, 54)",
              borderRadius: "12px",
              minWidth: "300px",
              "&:hover": { backgroundColor: "rgb(33, 43, 54)" },
              color: "#fff",
              fontWeight: "bold",
              fontSize: "0.875rem",
            }}
          >
            {translate("auth.signIn")}
          </Button>
        </Stack>
        {user.isAuthanticated && (
          <LinkButton to="/">&larr;{translate("auth.goBack")}</LinkButton>
        )}
      </Form>
    </>
  );
}

// export function loader() {
//   const users = getUsers();
//   console.log(users);
//   return users;
// }

export default LoginForm;
