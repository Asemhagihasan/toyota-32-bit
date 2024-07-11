import { Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error({ message }) {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <Typography variant="h6" sx={{ color: "var(--color-grey-700)" }}>
        Something went wrong 😢
      </Typography>
      <Typography variant="h6" sx={{ color: "var(--color-grey-700)" }}>
        {message || error.message || error.data}
      </Typography>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
