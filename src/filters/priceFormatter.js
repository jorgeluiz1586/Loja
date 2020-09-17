export const formatMoney = (price) => {
    return price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
};