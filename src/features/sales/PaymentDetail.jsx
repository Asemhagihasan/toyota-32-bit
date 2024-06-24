import { Box, Stack, Typography } from "@mui/material";
import BillItem from "./BillItem";
import { useCart } from "../../context/CartContext";
import BillItemContent from "./BillItemContent";
import PaymentIcon from "@mui/icons-material/Payment";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LinkButton from "../../ui/LinkButton";
import PrintIcon from "@mui/icons-material/Print";
import { IconButton } from "@mui/material";
import Popup from "../../ui/Popup";
import { useTranslation } from "react-i18next";
import { usePrintBill } from "../../hooks/usePrintBill";

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
  const { t: translate } = useTranslation();
  const cartItems = getCart();
  const totalTax = calculateTotalTax(cartItems);
  const paymentMethodCheck = paymentMethod === "nakit";
  const billCost = (+totalTax + +total.totalAmount).toFixed(2);

  const { pdfRef, printBill } = usePrintBill();
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
            {translate("salePage.cashRegister")}
          </Typography>
          <IconButton onClick={printBill}>
            <PrintIcon sx={{ color: "var(--color-grey-700)" }} />
          </IconButton>
        </Stack>
        {cartItems.map((item, index) => (
          <BillItem key={index} item={item} />
        ))}
        <BillItemContent
          item={{ name: translate("salePage.subTotal"), total: total.subTotal }}
        />
        {reduction && (
          <>
            <BillItemContent
              item={{
                name: `${reduction.name}i`,
                total: `-${(total.subTotal - total.totalAmount).toFixed(2)}`,
              }}
            />
            <BillItemContent
              item={{
                name: translate("salePage.totalAmount"),
                total: total.totalAmount,
              }}
            />
          </>
        )}
        <BillItemContent
          item={{ name: translate("salePage.tax"), total: totalTax }}
        />
        <BillItemContent
          item={{
            name: translate("salePage.total"),
            total: billCost,
          }}
        />
        <BillItemContent
          item={{
            name: translate("salePage.receivedMoney"),
            total: +value,
          }}
        />
        {paymentMethodCheck && (
          <BillItemContent
            item={{
              name: translate("salePage.change"),
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
              {translate("salePage.paymentMethod")}
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
            {paymentMethodCheck ? translate("salePage.cash") : "Vise(****0219)"}
          </Typography>
        </Box>
        {email && (
          <Stack
            sx={{ color: "var(--color-grey-700)" }}
            flexDirection="row"
            justifyContent="space-between"
          >
            <Typography variant="subtitle2" sx={{ fontSize: "16px" }}>
              {translate("salePage.userEmail")}
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
        &larr; {translate("salePage.backToSalePage")}
      </LinkButton>
    </Popup>
  );
}

export default PaymentDetail;
