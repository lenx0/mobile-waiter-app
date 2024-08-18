export function formatCurrency (value: number) {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)
}

//caso houver crash com o Intl instalar:
//yarn add intl
//agora dentro do app.tsx importe:
//import 'intl'
//import intl/locale-data/jsonp/pt-BR
