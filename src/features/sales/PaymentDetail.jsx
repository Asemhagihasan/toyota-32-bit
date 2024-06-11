import { Box, Button, Stack, Typography } from "@mui/material";
import BillItem from "./BillItem";
import { useCart } from "../../context/CartContext";
import BillItemContent from "./BillItemContent";
import PaymentIcon from "@mui/icons-material/Payment";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LinkButton from "../../ui/LinkButton";
import PrintIcon from "@mui/icons-material/Print";
import { IconButton } from "@mui/material";
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import EmailForm from "./EmailForm";

function PaymentDetail({ setModel, paymentMethod, setMakePayment, value }) {
  const { getCart, total, calculateTotalTax, appliedPromotion, dispatch } =
    useCart();
  const cartItems = getCart();
  const totalTax = calculateTotalTax(cartItems);
  const paymentMethodCheck = paymentMethod === "nakit";
  const billCost = (+totalTax + +total.totalAmount).toFixed(2);
  const [sendEmail, setSendEmail] = useState(false);
  const pdfRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => pdfRef.current,
    documentTitle: "Bill",
    onAfterPrint: () => {
      console.log("Printed PDF successfully!");
    },
  });

  return (
    <Stack className="modal">
      <Stack
        className="overlay"
        sx={{ background: "rgba(211, 211, 211, 0.8)" }}
      ></Stack>
      <Box
        sx={{
          position: "absolute",
          top: "40%",
          left: "50%",
          height: "82vh",
          transform: "translate(-50%, -35%)",
          lineHeight: "1.4",
          backgroundColor: "#fff",
          padding: "16px 24px",
          borderRadius: "12px",
          maxWidth: "600px",
          boxSizing: "border-box",
          overflow: "auto",
          zIndex: 103,
        }}
      >
        {sendEmail ? (
          <EmailForm
            setModel={setModel}
            setMakePayment={setMakePayment}
            dispatch={dispatch}
          />
        ) : (
          <>
            <Stack ref={pdfRef} spacing={3}>
              <Stack
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ width: "300px", mb: "1.5rem" }}
              >
                <Typography variant="h6">Cash register</Typography>
                <IconButton onClick={handlePrint}>
                  <PrintIcon />
                </IconButton>
              </Stack>
              {cartItems.map((item, index) => (
                <BillItem key={index} item={item} />
              ))}
              <BillItemContent
                item={{ name: "subTotal", total: total.subTotal }}
              />
              {appliedPromotion && (
                <>
                  <BillItemContent
                    item={{
                      name: `${appliedPromotion}i`,
                      total: `-${(total.subTotal - total.totalAmount).toFixed(
                        2
                      )}`,
                    }}
                  />
                  <BillItemContent
                    item={{ name: "Amount total", total: total.totalAmount }}
                  />
                </>
              )}
              <BillItemContent item={{ name: "Tax", total: totalTax }} />
              <BillItemContent
                item={{
                  name: "Total",
                  total: billCost,
                }}
              />
              <BillItemContent
                item={{
                  name: "Alanan para",
                  total: +value,
                }}
              />
              {paymentMethodCheck && (
                <BillItemContent
                  item={{
                    name: "para ustu",
                    total: (+value - billCost).toFixed(2),
                  }}
                />
              )}
              <Box>
                <Stack
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle2" sx={{ fontSize: "16px" }}>
                    Payment method
                  </Typography>
                  {paymentMethodCheck ? <AttachMoneyIcon /> : <PaymentIcon />}
                </Stack>
                <Typography
                  variant="subtitle2"
                  sx={{ fontSize: "12px", color: "#e28743" }}
                >
                  {paymentMethodCheck ? "Nakit" : "Vise(****0219)"}
                </Typography>
              </Box>
            </Stack>
            <Stack flexDirection="column" spacing={1} mt="1rem">
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
              <LinkButton
                onClick={() => {
                  setModel(false);
                  setMakePayment(false);
                  dispatch({ type: "clearCart" });
                }}
                to="/salesPage/categories"
              >
                &larr; Back to sale page
              </LinkButton>
            </Stack>
          </>
        )}
      </Box>
    </Stack>
  );
}

export default PaymentDetail;
