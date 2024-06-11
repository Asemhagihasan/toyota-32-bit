import { Stack, Typography } from "@mui/material";

import QrScanner from "qr-scanner";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { getProductById } from "../../services/saleContentApi";
import { useCart } from "../../context/CartContext";
import { useInputControl } from "../../context/InputControlContext";

function QRScanner() {
  const scanner = useRef();
  const videoEl = useRef(null);
  const qrBoxEl = useRef(null);
  const [qrOn, setQrOn] = useState(true);
  const [scannedResult, setScannedResult] = useState("");
  const [scannedProduct, setScannedProduct] = useState({});
  const { dispatch, getCurrentQuantity } = useCart();
  const { value, setValue } = useInputControl();
  function onScanSuccess(result) {
    setScannedResult(result?.data);
  }

  useEffect(() => {
    async function getProduct() {
      if (scannedResult) {
        const product = await getProductById(+scannedResult);
        const { id, productCode, name, price, KDV } = product;
        const isInCart = getCurrentQuantity(id);
        if (!isInCart) {
          const newItem = {
            productId: id,
            productCode: productCode,
            name: name,
            quantity: +value || 1,
            price: price,
            totalPrice: parseFloat((price * (+value || 1)).toFixed(2)),
            KDV: KDV,
          };
          value.length > 0 && setValue("");
          dispatch({ type: "addItem", payload: newItem });
          setScannedProduct(product);
          return;
        }
      }
    }
    getProduct();
  }, [scannedResult]);
  function onScanFail(err) {
    // console.log(err);
  }
  useEffect(() => {
    if (videoEl?.current && !scanner.current) {
      scanner.current = new QrScanner(videoEl?.current, onScanSuccess, {
        onDecodeError: onScanFail,
        // 📷 This is the camera facing mode. In mobile devices, "environment" means back camera and "user" means front camera.
        preferredCamera: "environment",
        // 🖼 This will help us position our "QrFrame.svg" so that user can only scan when qr code is put in between our QrFrame.svg.
        highlightScanRegion: true,
        // 🔥 This will produce a yellow (default color) outline around the qr code that we scan, showing a proof that our qr-scanner is scanning that qr code.
        highlightCodeOutline: true,
        // 📦 A custom div which will pair with "highlightScanRegion" option above 👆. This gives us full control over our scan region.
        overlay: qrBoxEl?.current || undefined,
      });

      // 🚀 Start QR Scanner
      scanner?.current
        ?.start()
        .then(() => setQrOn(true))
        .catch((err) => {
          if (err) setQrOn(false);
        });
    }

    return () => {
      if (!videoEl?.current) {
        scanner?.current?.stop();
      }
    };
  }, []);

  // ❌ If "camera" is not allowed in browser permissions, show an alert.
  useEffect(() => {
    if (!qrOn)
      alert(
        "Camera is blocked or not accessible. Please allow camera in your browser permissions and Reload."
      );
  }, [qrOn]);
  return (
    <Stack
      sx={{
        // margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: "500",
        }}
        variant="h5"
      >
        Scan product
      </Typography>
      <Stack
        sx={{
          MaxWidth: "350px",
          height: "250px",
          position: "relative",
          cursor: "pointer",
          border: "2px dashed #777",
        }}
      >
        {/* QR */}
        <video ref={videoEl}></video>
        <div ref={qrBoxEl} className="qr-box"></div>

        {/* Show Data Result if scan is success */}
      </Stack>
      {scannedResult && (
        <Stack
          sx={{
            width: "450px",
            borderRadius: "5px",
            padding: "10px 15px",
            boxSizing: "border-box",
            color: "#333",
            backgroundColor: "#e5e5e5",
          }}
        >
          <Typography variant="subtitle2">
            Scanned Result: {scannedProduct.productCode}
          </Typography>
          <Typography variant="subtitle2">
            name: {scannedProduct.name}
          </Typography>
          <Typography variant="subtitle2">
            price: {scannedProduct.price}
          </Typography>
          <Typography variant="subtitle2">
            unit: {scannedProduct.unit}
          </Typography>
        </Stack>
      )}
    </Stack>
  );
}

export default QRScanner;
