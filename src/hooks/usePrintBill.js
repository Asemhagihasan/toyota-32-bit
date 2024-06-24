import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

export function usePrintBill() {
  const pdfRef = useRef();

  const printBill = useReactToPrint({
    content: () => pdfRef.current,
    documentTitle: "Bill",
    onAfterPrint: () => {
      console.log("Printed PDF successfully!");
    },
  });
  return { pdfRef, printBill };
}
