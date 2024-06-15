import { Box, Stack, Typography } from "@mui/material";
import BillItem from "./BillItem";
import { useCart } from "../../context/CartContext";
import BillItemContent from "./BillItemContent";
import PaymentIcon from "@mui/icons-material/Payment";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LinkButton from "../../ui/LinkButton";
import PrintIcon from "@mui/icons-material/Print";
import { IconButton } from "@mui/material";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import Popup from "../../ui/Popup";

function PaymentDetail({
  setModel,
  paymentMethod,
  setMakePayment,
  value,
  email,
}) {
  const {
    getCart,
    total,
    calculateTotalTax,
    dispatch,
    reduction,
    setReduction,
  } = useCart();
  const cartItems = getCart();
  const totalTax = calculateTotalTax(cartItems);
  const paymentMethodCheck = paymentMethod === "nakit";
  const billCost = (+totalTax + +total.totalAmount).toFixed(2);

  const pdfRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => pdfRef.current,
    documentTitle: "Bill",
    onAfterPrint: () => {
      console.log("Printed PDF successfully!");
    },
  });

  return (
    <Popup>
      <Stack ref={pdfRef} spacing={3} mb={3} zIndex={200}>
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ width: "300px", mb: "1.5rem" }}
        >
          <Typography sx={{ color: "var(--color-grey-700)" }} variant="h6">
            Cash register
          </Typography>
          <IconButton onClick={handlePrint}>
            <PrintIcon sx={{ color: "var(--color-grey-700)" }} />
          </IconButton>
        </Stack>
        {cartItems.map((item, index) => (
          <BillItem key={index} item={item} />
        ))}
        <BillItemContent item={{ name: "subTotal", total: total.subTotal }} />
        {reduction && (
          <>
            <BillItemContent
              item={{
                name: `${reduction.name}i`,
                total: `-${(total.subTotal - total.totalAmount).toFixed(2)}`,
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
            <Typography
              variant="subtitle2"
              sx={{ fontSize: "16px", color: "var(--color-grey-700)" }}
            >
              Payment method
            </Typography>
            {paymentMethodCheck ? (
              <AttachMoneyIcon sx={{ color: "var(--color-grey-700)" }} />
            ) : (
              <PaymentIcon sx={{ color: "var(--color-grey-700)" }} />
            )}
          </Stack>
          <Typography
            variant="subtitle2"
            sx={{ fontSize: "12px", color: "var(--color-brand-600)" }}
          >
            {paymentMethodCheck ? "Nakit" : "Vise(****0219)"}
          </Typography>
        </Box>
        {email && (
          <Stack
            sx={{ color: "var(--color-grey-700)" }}
            flexDirection="row"
            justifyContent="space-between"
          >
            <Typography variant="subtitle2" sx={{ fontSize: "16px" }}>
              User's Email
            </Typography>
            <Typography variant="subtitle2" sx={{ fontSize: "16px" }}>
              {email}
            </Typography>
          </Stack>
        )}
      </Stack>
      <LinkButton
        onClick={() => {
          setModel(false);
          setMakePayment(false);
          setReduction(null);
          dispatch({ type: "clearCart" });
        }}
        to="/salesPage/categories"
      >
        &larr; Back to sale page
      </LinkButton>
    </Popup>
  );
}

export default PaymentDetail;
