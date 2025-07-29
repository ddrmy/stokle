// app/(auth)/page.tsx
"use client";

export default function Login() {
  return (
    <form className="w-full">
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-bold text-gray-700 mb-2"
        >
          Nome completo
        </label>
        <input
          id="name"
          type="text"
          placeholder="Digite seu email"
          className="w-full border rounded py-2 px-3 shadow text-gray-700"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block text-sm font-bold text-gray-700 mb-2"
        >
          Senha
        </label>
        <input
          id="password"
          type="password"
          placeholder="Digite sua senha"
          className="w-full border rounded py-2 px-3 shadow text-gray-700"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block text-sm font-bold text-gray-700 mb-2"
        >
          Confirme sua senha
        </label>
        <input
          id="password"
          type="password"
          placeholder="Digite sua senha"
          className="w-full border rounded py-2 px-3 shadow text-gray-700"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Registrar-se
      </button>
    </form>
  );
}
