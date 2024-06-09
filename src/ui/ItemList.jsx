import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  Box,
  Button,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useIsActiveLink } from "../hooks/useIsActiveLink";
function ItemList({ items, text, sx }) {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const isActive = useIsActiveLink("/salesPage/allProducts");
  const isActive1 = useIsActiveLink("/salesPage/favoritProducts");

  console.log(items);
  function handleToggle() {
    setOpen((prevOpen) => !prevOpen);
  }

  function handleClose() {
    setOpen(false);
  }

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack>
      <Button
        ref={anchorRef}
        id="composition-button"
        onClick={handleToggle}
        variant="contained"
        sx={{
          color: "#000",
          "&:hover": { backgroundColor: "#e67e22" },
          padding: "0.385rem 2rem",
          fontWeight: "500",
          fontSize: "0.875rem",
          maxHeight: "36.2px",
          backgroundColor: isActive || isActive1 ? "#e67e22" : "#fff",
          ...sx,
        }}
        disableElevation
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          <Typography variant="subtitle2">{text}</Typography>
        </Box>
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
        sx={{ zIndex: 1000 }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                >
                  {items.map((item) => (
                    <MenuItem
                      disabled={item.disable}
                      key={item.description}
                      onClick={() => {
                        setOpen(false);
                        item.handelClick();
                      }}
                      sx={{ ...sx }}
                    >
                      {item.description}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Stack>
  );
}

export default ItemList;
