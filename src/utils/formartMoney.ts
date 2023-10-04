// Função que formata o preço dos produtos, colocando virgula e aparecendo zero
export function formatMoney(value: number){
    return value.toLocaleString("pt-BR", {
        minimumFractionDigits: 2
    });
}