const formatOhHoney = ohHoney => {
  if (typeof ohHoney !== `object`) return {};

  return {
    id: ohHoney.id,
    quote: ohHoney.quote,
    queenId: ohHoney.queenId,
  };
};

module.exports = formatOhHoney;
