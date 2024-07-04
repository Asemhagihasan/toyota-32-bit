import { Box, Button, Stack } from "@mui/material";
import CustomInput from "../../ui/CustomInput";
import VirtualKeyboard from "../VirtualKeyboard/Keyboard";
import MenuList from "../../ui/MenuList";
import { useInputControl } from "../../context/InputControlContext";
import Reduction from "../../utils/Reduction";
import { useCart } from "../../context/CartContext";
import { useTranslation } from "react-i18next";

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
        width: "375px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "0.3rem",
          marginBottom: "3px",
        }}
      >
        <CustomInput
          text={translate("salePage.quantityPanel")}
          sx={{
            "--Input-focusedHighlight":
              "var(--_Input-focusedHighlight, var(--joy-palette-focusVisible, var(--joy-palette-primary-500, var(--color-brand-600)))) !important",
            width: "296.6px",
          }}
          value={value}
          onChange={onChangeInput}
        />
        <Button
          sx={{
            height: "3rem",
            fontSize: "2rem",
            borderRadius: "6px",
            backgroundColor: "var(--color-grey-0)",
            color: "#333",
            "&:hover": { backgroundColor: "var(--color-grey-0)" },
          }}
          variant="contained"
          disableElevation
        >
          -
        </Button>
      </Box>
      <MenuList
        sx={{ width: "365px" }}
        title={translate("salePage.getReduction")}
        items={reductions}
        handelClick={(reduction) => {
          setReduction(reduction);
        }}
      />
      <Stack sx={{ width: "375px" }}>
        <VirtualKeyboard ip={true} keyboard={keyboard} setInput={setValue} />
      </Stack>
    </Box>
  );
}

export default ProductControlPanel;
