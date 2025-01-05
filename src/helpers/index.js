export const sizeName = (mes, max) => {
    if (typeof mes === 'number') return mes;
    if (!mes?.length) return;

    if (mes.length < max) return mes;

    return `${mes.slice(0, max)}...`;
};
