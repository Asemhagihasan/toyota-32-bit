import { Box, Button, Stack } from "@mui/material";
import CustomInput from "../../ui/CustomInput";
import ItemList from "../../ui/ItemList";
import VirtualKeyboard from "../VirtualKeyboard/Keyboard";
import { useProductPanel } from "../../context/ProductControlPanelContext";

function ProductControlPanel() {
  const { value, onChangeInput, keyboard, setValue } = useProductPanel();

  return (
    <Box
      sx={{
        width: "375px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
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
            name: "3 Al 2 ode",
            handleClick: () => {
              console.log("Kampanya secildi");
            },
          },
          {
            name: "10 %",
            handleClick: () => {
              console.log("Kampanya secildi");
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
