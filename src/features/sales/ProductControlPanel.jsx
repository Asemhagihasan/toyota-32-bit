import { Box, Button, Stack } from "@mui/material";
import CustomInput from "../../ui/CustomInput";
import ItemList from "../../ui/ItemList";
import VirtualKeyboard from "../VirtualKeyboard/Keyboard";
import { useInputControl } from "../../context/InputControlContext";
import { useCart } from "../../context/CartContext";

function ProductControlPanel() {
  const { value, onChangeInput, keyboard, setValue } = useInputControl();
  const { setAppliedPromotion, total } = useCart();

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
        items={[
          {
            description: "30 $ ve üzeri %10 indirim",
            disable: total.subTotal < 30,
            handelClick: () => {
              setAppliedPromotion("30 $ ve üzeri %10 indirim");
            },
          },
          {
            description: "3 Al 2 ode",
            handelClick: () => {
              setAppliedPromotion("3 Al 2 ode");
            },
          },
        ]}
      />
      <Stack sx={{ width: "375px" }}>
        <VirtualKeyboard ip={true} keyboard={keyboard} setInput={setValue} />
      </Stack>
    </Box>
  );
}

export default ProductControlPanel;
