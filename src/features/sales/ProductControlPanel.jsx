import { Box, Button, Stack } from "@mui/material";
import CustomInput from "../../ui/CustomInput";
import ItemList from "../../ui/ItemList";
import VirtualKeyboard from "../VirtualKeyboard/Keyboard";
import { useInputControl } from "../../context/InputControlContext";
import Reduction from "../../utils/Reduction";
import { useCart } from "../../context/CartContext";

const reductions = [
  new Reduction(
    "10% Discount for Purchases Over 40 $",
    "10% discount on purchases over 40 $",
    20,
    { minPurchase: 40 }
  ),
  new Reduction(
    "10% Wednesday Discount",
    "10% discount only on Wednesdays",
    10,
    {
      dayOfWeek: 3,
    }
  ),
  new Reduction(
    "15% Weekend Discount",
    "15% discount on Saturdays and Sundays",
    15,
    { dayOfWeek: 6 }
  ),
];

function ProductControlPanel() {
  const { value, onChangeInput, keyboard, setValue } = useInputControl();
  const { setReduction } = useCart();

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
          text="Search by code or name"
          sx={{
            "--Input-focusedHighlight":
              "var(--_Input-focusedHighlight, var(--joy-palette-focusVisible, var(--joy-palette-primary-500, #e67e22))) !important",
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
            backgroundColor: "#fff",
            color: "#333",
            "&:hover": { backgroundColor: "#fff" },
          }}
          variant="contained"
          disableElevation
        >
          -
        </Button>
      </Box>
      <ItemList
        sx={{ width: "365px" }}
        text="kampanya getir"
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
