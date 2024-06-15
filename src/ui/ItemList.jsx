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
import { useCart } from "../context/CartContext";
function ItemList({ items, text, sx, handelClick }) {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const isActive = useIsActiveLink("/salesPage/allProducts");
  const isActive1 = useIsActiveLink("/salesPage/favoritProducts");
  const { total } = useCart();
  const isReducton = items[0].isApplicable;

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
          "&:hover": {
            backgroundColor: "var(--color-brand-700)",
            color: "var(--color-grey-50)",
          },
          padding: "0.385rem 2rem",
          border: "1px solid var(--color-grey-200)",
          fontWeight: "500",
          fontSize: "0.875rem",
          maxHeight: "38.2px",
          backgroundColor:
            isActive || isActive1
              ? "var(--color-brand-600)"
              : "var(--color-grey-0)",
          color:
            isActive || isActive1
              ? "var(--color-grey-50)"
              : "var(--color-grey-600)",
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
                      key={item.description}
                      disabled={
                        isReducton ? !item.isApplicable(total.subTotal) : false
                      }
                      onClick={() => {
                        setOpen(false);
                        isReducton ? handelClick(item) : item.handelClick();
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
