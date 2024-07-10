import { Box, Button, Stack, Typography } from "@mui/material";
import VirtualKeyboard from "../VirtualKeyboard/Keyboard";
import CustomInput from "../../ui/CustomInput";
import { useRef, useState } from "react";
import { useCart } from "../../context/CartContext";
import PaymentDetail from "./PaymentDetail";
import Popup from "../../ui/Popup";
import EmailForm from "../sales/EmailForm";
import { useTranslation } from "react-i18next";

function PaymentPanel({ setMakePayment }) {
  const keyboard = useRef();
  const [value, setValue] = useState("");
  const [model, setModel] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("nakit");
  const [sendEmail, setSendEmail] = useState(false);
  const [email, setEmail] = useState("");
  const { t: translate } = useTranslation();
  const { total } = useCart();
  function onChangeInput(e) {
    const input = e.target.value;
    if (isNaN(input)) return;
    setValue(input);
    keyboard?.current?.setInput(input);
  }

  return (
    <>
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
              <Typography
                variant="subtitle1"
                sx={{ color: "var(--color-grey-700)" }}
              >
                {translate("salePage.added")} ****@gmail.com
              </Typography>
            )}
            <Button
              variant="contained"
              disableElevation
              sx={{
                backgroundColor: `${
                  paymentMethod === "nakit"
                    ? "var(--color-brand-600)"
                    : "var(--color-grey-0)"
                }`,
                color: `${
                  paymentMethod === "nakit"
                    ? "var(--color-brand-50)"
                    : "var(--color-grey-700)"
                }`,
                width: "180px",
                marginRight: "3px",
                marginLeft: "5px",
                "&:hover": {
                  backgroundColor: "var(--color-brand-700)",
                  color: "var(--color-brand-50)",
                },
              }}
              onClick={() => {
                setPaymentMethod("nakit");
              }}
            >
              {translate("salePage.cash")}
            </Button>
            <Button
              variant="contained"
              disableElevation
              sx={{
                backgroundColor: `${
                  paymentMethod === "krediKart"
                    ? "var(--color-brand-600)"
                    : "var(--color-grey-0)"
                }`,
                color: `${
                  paymentMethod === "krediKart"
                    ? "var(--color-brand-50)"
                    : "var(--color-grey-700)"
                }`,
                "&:hover": {
                  backgroundColor: "var(--color-brand-700)",
                  color: "var(--color-brand-50)",
                },
                width: "180px",
              }}
              onClick={() => {
                setPaymentMethod("krediKart");
              }}
            >
              {translate("salePage.creditCard")}
            </Button>
          </Box>
          <CustomInput
            text={translate("salePage.paymentAmount")}
            sx={{
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
                backgroundColor: "var(--color-brand-600)",
                "&:hover": { backgroundColor: "var(--color-brand-700)" },
              }}
              variant="contained"
            >
              {translate("salePage.emailReceipt")}
            </Button>

            <Button
              variant="contained"
              disableElevation
              disabled={value < (+total?.totalAmount || total.subTotal)}
              sx={{
                backgroundColor: "green",
                "&:hover": { backgroundColor: "var(--color-green-300)" },
                "&:disabled": { backgroundColor: "var(--color-brand-50)" },
              }}
              onClick={() => {
                setModel(true);
              }}
            >
              {translate("salePage.finishCart")}
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
