import { useSearchParams } from "react-router-dom";
import MenuList from "../../ui/MenuList";

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(values) {
    searchParams.set("alphaFilter", values);
    setSearchParams(searchParams);
  }

  return (
    <MenuList
      title="Filter by"
      items={[
        {
          description: "none",
          handleClick: () => handleClick([""]),
        },
        {
          description: "A",
          handleClick: () => handleClick(["A"]),
        },
        {
          description: "B",
          handleClick: () => handleClick(["B"]),
        },
        {
          description: "C-D",
          handleClick: () => handleClick(["C", "D"]),
        },
        {
          description: "E-F",
          handleClick: () => handleClick(["E", "F"]),
        },
        {
          description: "G-I",
          handleClick: () => handleClick(["G", "I"]),
        },
        {
          description: "J-L",
          handleClick: () => handleClick(["J", "L"]),
        },
        {
          description: "M-O",
          handleClick: () => handleClick(["M", "O"]),
        },
        {
          description: "P-R",
          handleClick: () => handleClick(["P", "R"]),
        },
        {
          description: "S-U",
          handleClick: () => handleClick("S", "U"),
        },
        {
          description: "V-Z",
          handleClick: () => handleClick(["V", "Z"]),
        },
      ]}
      sx={{ width: "150px" }}
    />
  );
}

export default Filter;
