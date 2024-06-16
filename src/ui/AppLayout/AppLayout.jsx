import { Stack } from "@mui/material";
import Header from "../Header/Header";
import { Outlet, useNavigation } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import { useState } from "react";
import Loader from "../Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);
  function handelButton() {
    setSideBarIsOpen((e) => !e);
  }

  return (
    <>
      <Loader isLoading={isLoading} />
      <Header sideBarIsOpen={sideBarIsOpen} handelButton={handelButton} />
      <Stack
        sx={{
          height: "92vh",
          position: "relative",
        }}
      >
        <Stack overflow="auto">
          <SideBar
            sideBarIsOpen={sideBarIsOpen}
            setSideBarIsOpen={setSideBarIsOpen}
          />
          <Stack
            onClick={() => {
              setSideBarIsOpen(false);
            }}
            sx={{ ml: { xs: "0", s: "0", md: "0", lg: "5.5rem" } }}
            zIndex={1}
          >
            <Outlet />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

export default AppLayout;
