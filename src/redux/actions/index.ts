// Coloque aqui suas actions

export const sendEmail = (email: string, password: string) => ({
  type: 'SAVE_EMAIL',
  payload: { email, password },
});
