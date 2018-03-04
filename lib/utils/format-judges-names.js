const formatJudgesName = j => {
    if (typeof j !== `object`) return {};
    const judge = {
      id: j.id,
      name: j.name,
    };
    return judge;
  };

  module.exports = formatJudgesName;
