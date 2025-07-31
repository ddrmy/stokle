const errorMessages: Record<string, string> = {
  "Invalid email or password": "Email ou senha inválidos",
  "User not found": "Usuário não encontrado",
  "Email is required": "Campo de e-mail obrigatório",
  "Password is required": "Campo de senha obrigatório",
  "Unexpected error": "Erro inesperado. Tente novamente.",
};

export function getTranslatedErrorMessage(errorMessage: string): string {
  return errorMessages[errorMessage] || errorMessage;
}
