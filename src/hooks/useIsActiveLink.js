import { useLocation } from "react-router-dom";

export function useIsActiveLink(to) {
  const location = useLocation();
  const cleanTo = removeIdFromUrl(location.pathname);
  return to === cleanTo;
}

function removeIdFromUrl(url) {
  let lastIndex = url.length - 1;
  while (!isNaN(parseInt(url[lastIndex]))) {
    lastIndex--;
  }

  return url.slice(0, lastIndex + 1);
}
