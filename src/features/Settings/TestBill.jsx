import { useTranslation } from "react-i18next";

function TestBill({ pdfRef }) {
  const { t: translate } = useTranslation();
  return (
    <div ref={pdfRef}>
      <h1> {translate("settingsPage.printerTest")}</h1>
      <p>
        {translate("salePage.productName")}:{" "}
        {translate("salePage.sampleProduct")}
      </p>
      <p>{translate("salePage.quantity")}: 1</p>
      <p>{translate("salePage.subTotal")}: 100.00 TL</p>
      <p>{translate("salePage.totalAmount")}: 100.00 TL</p>
    </div>
  );
}

export default TestBill;
