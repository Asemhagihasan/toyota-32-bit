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
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
function ItemList({ items }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const anchorRef = useRef(null);
  const location = useLocation();

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
    <div>
      <Button
        ref={anchorRef}
        id="composition-button"
        onClick={handleToggle}
        variant="contained"
        sx={{
          backgroundColor: "#fff",
          color: "#000",
          "&:hover": { backgroundColor: "#e67e22" },
          padding: "0.385rem 2rem",
          fontWeight: "500",
          fontSize: "0.875rem",
          maxHeight: "36.2px",
          width: "172px",
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
          <Typography variant="subtitle2">Show Price</Typography>
        </Box>
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
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
                      onClick={() => {
                        setOpen(false);
                        if (location.pathname === item.to) {
                          return;
                        } else {
                          navigate(item.to);
                        }
                      }}
                    >
                      {item.name}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}

export default ItemList;
