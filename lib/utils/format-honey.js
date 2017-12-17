const formatHoney = honey => {
  if (typeof honey !== `object`) return {};

  return {
    id: honey.id,
    quote: honey.quote,
    queenId: honey.queenId,
  };
};

module.exports = formatHoney;
