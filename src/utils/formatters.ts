export function formatPrice(value: number): string {
  const currencyStyle = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return currencyStyle.format(value);
}
