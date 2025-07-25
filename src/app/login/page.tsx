"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="text-4xl font-bold mb-4">Bem vindo ao Stokle!</h1>
      <Image
        src="https://static.vecteezy.com/ti/vetor-gratis/p3/15643334-icone-de-de-controle-de-estoque-gratis-vetor.jpg"
        alt="Stokle Logo"
        width={150}
        height={150}
        className="mb-4"
      />
      <p className="text-lg">Seu sistema de gerenciamento eficiente!</p>
    </div>
  );
}
