export function buildWhatsAppLink({
  phone,
  productName
}: {
  phone: string;
  productName: string;
}) {
  const base = "https://wa.me/";
  const message = `Hola, quiero el producto ${productName}. ¿Cuál es el precio final y disponibilidad?`;

  return `${base}${phone}?text=${encodeURIComponent(message)}`;
}
