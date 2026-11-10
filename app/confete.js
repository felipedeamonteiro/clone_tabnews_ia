"use client";

import { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";

export default function Confete() {
  const [tamanho, setTamanho] = useState(null);

  useEffect(() => {
    function atualizarTamanho() {
      setTamanho({ largura: window.innerWidth, altura: window.innerHeight });
    }

    atualizarTamanho();
    window.addEventListener("resize", atualizarTamanho);
    return () => window.removeEventListener("resize", atualizarTamanho);
  }, []);

  if (!tamanho) return null;

  return (
    <ReactConfetti
      width={tamanho.largura}
      height={tamanho.altura}
      recycle={false}
      numberOfPieces={400}
      style={{ position: "fixed", inset: 0, pointerEvents: "none" }}
    />
  );
}
