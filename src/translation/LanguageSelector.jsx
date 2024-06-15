import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { useLanguage } from "../context/LanguageContext ";

function LanguageSelector({ sx }) {
  const { selectedLanguage, changeLanguage } = useLanguage();

  function handleChange(event) {
    changeLanguage(event.target.value);
  }
  return (
    <Box
      sx={{ display: { xs: "none", s: "none", md: "block" }, ...sx }}
      maxWidth={120}
      mt="6px"
    >
      <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label">
          <LanguageIcon sx={{ color: "var(--color-grey-700)" }} />
        </InputLabel>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedLanguage}
          onChange={(event) => handleChange(event)}
          sx={{ color: "var(--color-grey-700)" }}
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
