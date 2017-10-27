const { Season } = require('models');

function formatQueenQuery({ limit, offset, name}) {
    const sqQuery = {
      limit: limit || 20,
      offset: offset || 0,
      include: [{
        model: Season,
        through: {
          attributes: ['place'],
        },
      }],
    };
  
    if (name && name !== "") {
      sqQuery.where = {};
      sqQuery.where.name = name;
    }
  
    return sqQuery;
  }

module.exports = formatQueenQuery;