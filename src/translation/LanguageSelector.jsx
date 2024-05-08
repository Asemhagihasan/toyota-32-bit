import {
  Box,
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function LanguageSelector() {
  const { i18n } = useTranslation();
  const storedLan = localStorage.getItem("i18nextLng");
  const [selectedLanguage, setSelectedLanguage] = useState(storedLan || "");
  function changeLanguage(event) {
    const lng = event.target.value;
    setSelectedLanguage(lng);
    i18n.changeLanguage(lng);
  }

  return (
    <Box
      sx={{ display: { xs: "none", s: "none", md: "block" } }}
      maxWidth={120}
      mt="6px"
    >
      <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label">
          <LanguageIcon sx={{ color: "#fff" }} />
        </InputLabel>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedLanguage}
          onChange={(event) => changeLanguage(event)}
          sx={{
            color: "#fff",
          }}
        >
          <MenuItem value={"en"}>English</MenuItem>
          <MenuItem value={"tr"}>Turkish</MenuItem>
          <MenuItem value={"fr"}>French</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default LanguageSelector;
