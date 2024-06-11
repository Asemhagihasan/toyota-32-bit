import { Box, Button, Stack } from "@mui/material";
import VirtualKeyboard from "../VirtualKeyboard/Keyboard";
import CustomInput from "../../ui/CustomInput";
import { useRef, useState } from "react";
import { useCart } from "../../context/CartContext";
import PaymentDetail from "./PaymentDetail";

function PaymentPanel({ setMakePayment }) {
  const keyboard = useRef();
  const [value, setValue] = useState("");
  const [model, setModel] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("nakit");
  const { total } = useCart();
  function onChangeInput(e) {
    const input = e.target.value;
    if (isNaN(input)) return;
    setValue(input);
    keyboard?.current?.setInput(input);
  }
  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Box width="375px" mb="6px">
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
          <VirtualKeyboard ip={true} keyboard={keyboard} setInput={setValue} />
        </Stack>
        <Button
          variant="contained"
          disableElevation
          disabled={value < (total?.totalAmount || total.subTotal)}
          sx={{
            backgroundColor: "green",
            "&:hover": { backgroundColor: "green" },
            width: "180px",
            marginTop: "8px",
          }}
          onClick={() => {
            setModel(true);
          }}
        >
          Belge Bitir
        </Button>
      </Box>
      {model && (
        <PaymentDetail
          setMakePayment={setMakePayment}
          paymentMethod={paymentMethod}
          setModel={setModel}
          value={value}
        />
      )}
    </>
  );
}

export default PaymentPanel;
