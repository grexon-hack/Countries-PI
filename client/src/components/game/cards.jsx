

const desOrden = (array, final) => {
    let num = Math.floor(Math.random() * array.length);

    let card1 = array.slice(num, num + final).sort();
    let card2 = card1.slice(0);
    const cardFull = [...card1, ...card2];

    for (let i = 0; i < cardFull.length; i++) {
      let num = Math.floor(Math.random() * (cardFull.length - i));
      var tmp = cardFull[i];
      cardFull[i] = cardFull[num];
      cardFull[num] = tmp;
    }

    return cardFull;
};

export default desOrden