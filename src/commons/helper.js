export const formatPrice = cents => {
    return(cents/100).toLocaleString('tw', {
        style: 'currency',
        currency: 'TWN'
    });
};
//#3500