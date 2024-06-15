import { Card, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function CategoriItem({ category }) {
  return (
    <Card
      sx={{
        minWidth: 140,
        height: "160px",
        backgroundColor: "var(--color-grey-0)",
        borderRadius: "12px",
        boxShadow: "0 2px 4px rgba(0,0,0,.10)",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
      }}
    >
      <Link to={`:${category.id}`}>
        <CardMedia
          sx={{
            height: 120,
            "&:hover": { transform: "scale(1.1)" },
            transition: "all 0.4s",
            overflow: "hidden",
          }}
          image={category.image}
          title="green iguana"
        />
      </Link>

      <Typography
        variant="h6"
        component="p"
        sx={{
          textAlign: "center",
          fontSize: "1rem",
          marginBottom: "6px",
          backgroundColor: "var(--color-grey-0)",
          color: "var(--color-grey-700)",
        }}
      >
        {category.name}
      </Typography>
    </Card>
  );
}

export default CategoriItem;
