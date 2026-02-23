export function formatPrice(value: number, currency: string = "PEN") {
  if (isNaN(value)) return "S/ 0.00";

  return new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency,
    minimumFractionDigits: 2
  }).format(value);
}
