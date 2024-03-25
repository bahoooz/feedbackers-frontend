"use client"
import Image from "next/image";
import Menu from "../../../../components/Menu";
import QRCode from "react-qr-code";
import { useState } from "react";

export default function CreateForm() {
  const [visibleQrCode, setVisibleQrCode] = useState("hidden")

  const GenerateQrCode = () => {
    setVisibleQrCode("block")
  }

  return (
    <div>
      <Menu />
      <div className="ml-80 p-5">
        <form action="">
          <input type="text" placeholder="Nom de la pub" />
          <div>
            <h2>Type de formulaire :</h2>
            <input type="radio" />
            <input type="radio" />
          </div>
          <div>
            <h2>Importer des images</h2>
            <span>11max recommandé</span>
            <input type="file" />
          </div>
          <div>
            <h2>Preview Exemple Formulaire</h2>
            <div className="flex">
              <Image
                src="/assets/screen_1_web.png"
                alt="Image Preview 1"
                width={959}
                height={2000}
                className="h-96 w-auto"
              />
              <Image
                src="/assets/screen_2_web.png"
                alt="Image Preview 1"
                width={959}
                height={2000}
                className="h-96 w-auto"
              />
              <Image
                src="/assets/screen_3_web.png"
                alt="Image Preview 1"
                width={959}
                height={2000}
                className="h-96 w-auto"
              />
            </div>
          </div>
          <button type="submit">Confirmer</button>
        </form>
        <div className="relative w-64" onClick={GenerateQrCode}>
          <span className="text-3xl absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">Générer</span>
          <Image
            src="/assets/qr-code.png"
            alt="qr-code"
            width={765}
            height={765}
            className="w-64"
          />
        </div>
        <QRCode className={visibleQrCode} value="https://wwa0wn3c3gy.typeform.com/to/KKdYfd2A" />
      </div>
    </div>
  );
}