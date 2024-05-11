import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";

function NestedList() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box
      sx={{
        width: "200px",
        backgroundColor: "#fff",
        fontWeight: "600",
        fontSize: "1rem",
        color: "#000",
        border: "none",
        borderRadius: "9px",
        overflow: "hidden",
      }}
    >
      <ListItemButton
        onClick={handleClick}
        sx={{
          width: "100%",
          "&:hover": { backgroundColor: "#cf711f", transition: "all 0.5s" },
        }}
      >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse
        in={open}
        timeout="auto"
        unmountOnExit
        sx={{
          width: "100%",
          "&:hover": { backgroundColor: "#cf711f", transition: "all 0.5s" },
        }}
      >
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </Box>
  );
}

export default NestedList;
