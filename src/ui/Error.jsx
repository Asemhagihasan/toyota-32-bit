import { Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <Typography variant="h6">Something went wrong 😢</Typography>
      <Typography variant="h6"> {error.message || error.data}</Typography>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
