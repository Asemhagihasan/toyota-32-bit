import { toast } from "react-toastify";

export function showToastMessage(text, autoClose) {
  return toast.success(text, {
    autoClose: autoClose,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}
