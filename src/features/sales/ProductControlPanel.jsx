import { Box } from "@mui/material";
import VirtualKeyboard from "../VirtualKeyboard/Keyboard";
import MenuList from "../../ui/MenuList";
import { useInputControl } from "../../context/InputControlContext";
import Reduction from "../../utils/Reduction";
import { useCart } from "../../context/CartContext";
import { useTranslation } from "react-i18next";
import Input from "../../ui/Input";

function ProductControlPanel() {
  const { value, onChangeInput, keyboard, setValue } = useInputControl();
  const { t: translate } = useTranslation();
  const { setReduction, total } = useCart();
  const reductions = [
    new Reduction(
      "10% Discount for Purchases Over 40 $",
      translate("salePage.reductionDesicraption"),
      20,
      { minPurchase: 40 },
      total.subTotal
    ),
    new Reduction(
      "10% Wednesday Discount",
      translate("salePage.wednesdayDiscount"),
      10,
      {
        dayOfWeek: 3,
      },
      total.subTotal
    ),
    new Reduction(
      "15% Weekend Discount",
      translate("salePage.weekendDiscount"),
      15,
      { dayOfWeek: 6 },
      total.subTotal
    ),
  ];

  return (
    <Box
      sx={{
        width: "420px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowX: "hidden",
      }}
    >
      <Input
        placeholder={translate("salePage.quantityPanel")}
        value={value}
        onChange={onChangeInput}
        sx={{ width: "100%" }}
      />
      <MenuList
        sx={{ width: "420px" }}
        title={translate("salePage.getReduction")}
        items={reductions}
        handelClick={(reduction) => {
          setReduction(reduction);
        }}
      />
      <VirtualKeyboard ip={true} keyboard={keyboard} setInput={setValue} />
    </Box>
  );
}

export default ProductControlPanel;
