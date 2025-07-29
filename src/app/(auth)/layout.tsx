"use client";

import Image from "next/image";
import React from "react";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 flex flex-col items-center justify-center bg-gray-100 p-10">
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
      <div className="w-1/2 flex items-center justify-center p-10">
        {children}
      </div>
    </div>
  );
}
