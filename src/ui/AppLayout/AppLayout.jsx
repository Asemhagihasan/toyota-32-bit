import { Stack } from "@mui/material";
import Header from "../Header/Header";
import { Outlet, useNavigation } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import { useEffect, useState } from "react";
import Loader from "../Loader";
import { arr } from "../../productsWithoutBarcode";
// import Loader from "../Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);
  function handelButton() {
    setSideBarIsOpen((e) => !e);
  }
  const data = [];

  for (let i = 1; i <= 1000; i++) {
    const item = {
      id: i, // Unique ID for each object
      category_id: 1,
      name: "Peach",
      description:
        "Sweet and juicy peaches, perfect for snacking, grilling, or making peach cobbler.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSmNebTxUyFYIdyLPqyzPecTgKpt6n8OzPnzOFC8-RWw&s",
      price: 4.99,
      quantity: 40,
      sale_price: 4.69,
      unit: "kg",
      max_sale_price: 6.99,
      min_sale_price: 3.99,
      KDV: 0.01,
    };

    data.push(item);
  }

  console.log(data);

  return (
    <>
      <Loader isLoading={isLoading} />
      <Header handelButton={handelButton} />
      <Stack
        sx={{
          height: "92vh",
          position: "relative",
        }}
      >
        <Stack overflow="auto" sx={{ backgroundColor: "#F5F7F8" }}>
          <Stack
            sx={{ ml: { xs: "0", s: "0", md: "0", lg: "5.5rem" } }}
            zIndex={1}
          >
            <Outlet />
          </Stack>
          <SideBar
            sideBarIsOpen={sideBarIsOpen}
            setSideBarIsOpen={setSideBarIsOpen}
          />
        </Stack>
      </Stack>
    </>
  );
}

export default AppLayout;
