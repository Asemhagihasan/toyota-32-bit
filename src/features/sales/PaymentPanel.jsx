import { Box, Button, Stack, Typography } from "@mui/material";
import VirtualKeyboard from "../VirtualKeyboard/Keyboard";
import CustomInput from "../../ui/CustomInput";
import { useRef, useState } from "react";
import { useCart } from "../../context/CartContext";
import PaymentDetail from "./PaymentDetail";
import Popup from "../../ui/Popup";
import EmailForm from "../sales/EmailForm";
import { ToastContainer } from "react-toastify";

function PaymentPanel({ setMakePayment }) {
  const keyboard = useRef();
  const [value, setValue] = useState("");
  const [model, setModel] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("nakit");
  const [sendEmail, setSendEmail] = useState(false);
  const [email, setEmail] = useState("");
  const { total } = useCart();
  function onChangeInput(e) {
    const input = e.target.value;
    if (isNaN(input)) return;
    setValue(input);
    keyboard?.current?.setInput(input);
  }

  return (
    <>
      <ToastContainer className="toast-container-center-right" />
      {sendEmail ? (
        <Popup>
          <EmailForm
            email={email}
            setSendEmail={setSendEmail}
            setEmail={setEmail}
          />
        </Popup>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box width="375px" mb="6px">
            {!sendEmail && email.length > 0 && (
              <Typography variant="subtitle1" sx={{ color: "gray" }}>
                Added ****@gmail.com
              </Typography>
            )}
            <Button
              variant="contained"
              disableElevation
              sx={{
                backgroundColor: `${
                  paymentMethod === "nakit" ? "#e28743" : "#fff"
                }`,
                color: `${paymentMethod === "nakit" ? "#fff" : "#333"}`,
                width: "180px",
                marginRight: "3px",
                marginLeft: "5px",
                "&:hover": { backgroundColor: "#e28743" },
              }}
              onClick={() => {
                setPaymentMethod("nakit");
              }}
            >
              Nakit
            </Button>
            <Button
              variant="contained"
              disableElevation
              sx={{
                backgroundColor: `${
                  paymentMethod === "krediKart" ? "#e28743" : "#fff"
                }`,
                color: `${paymentMethod === "krediKart" ? "#fff" : "#333"}`,
                "&:hover": { backgroundColor: "#e28743" },
                width: "180px",
              }}
              onClick={() => {
                setPaymentMethod("krediKart");
              }}
            >
              Kredi Kart
            </Button>
          </Box>
          <CustomInput
            text="Please enter the payment amount"
            sx={{
              "--Input-focusedHighlight":
                "var(--_Input-focusedHighlight, var(--joy-palette-focusVisible, var(--joy-palette-primary-500, #e67e22))) !important",
              width: "370px",
              marginLeft: "5px",
            }}
            value={value}
            onChange={onChangeInput}
          />

          <Stack sx={{ width: "375px" }}>
            <VirtualKeyboard
              ip={true}
              keyboard={keyboard}
              setInput={setValue}
            />
          </Stack>
          <Stack flexDirection="row" gap={2}>
            <Button
              onClick={() => {
                setSendEmail(true);
              }}
              disableElevation
              sx={{
                backgroundColor: "#e28743",
                "&:hover": { backgroundColor: "#e67e22" },
              }}
              variant="contained"
            >
              Email receipt
            </Button>

            <Button
              variant="contained"
              disableElevation
              disabled={value < (+total?.totalAmount || total.subTotal)}
              sx={{
                backgroundColor: "green",
                "&:hover": { backgroundColor: "green" },
              }}
              onClick={() => {
                setModel(true);
              }}
            >
              Belge Bitir
            </Button>
          </Stack>
        </Box>
      )}
      {model && (
        <PaymentDetail
          setMakePayment={setMakePayment}
          paymentMethod={paymentMethod}
          setModel={setModel}
          value={value}
          email={email}
        />
      )}
    </>
  );
}

export default PaymentPanel;
