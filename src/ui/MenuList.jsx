import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function MenuList({ items, title, sx, handelClick }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const isReducton = items[0]?.isApplicable;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          ...sx,
        }}
        className="linkBtn"
      >
        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        {title}
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {items.map((item) => (
          <MenuItem
            disabled={item?.disabled || false}
            onClick={() => {
              handleClose();
              isReducton ? handelClick(item) : item.handelClick();
            }}
            key={item.description}
            sx={{ ...sx }}
          >
            {item.description}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default MenuList;
