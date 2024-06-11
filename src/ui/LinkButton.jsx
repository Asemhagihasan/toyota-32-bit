import { Link, useNavigate } from "react-router-dom";

function LinkButton({ children, to, ...props }) {
  const navigate = useNavigate();
  if (to === "-1") {
    return (
      <button
        className="link"
        to={to}
        onClick={() => {
          navigate(-1);
        }}
        {...props}
      >
        {children}
      </button>
    );
  }
  return (
    <Link className="link" to={to} {...props}>
      {children}
    </Link>
  );
}

export default LinkButton;
