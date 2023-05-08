const sequelize = require('../config/connection');
const { User, Dreams } = require('../models');

const userData = require('./userData.json');
const dreamsData = require('../seeds/dreamsData.json')

const seedDatabase = async () => {

  await sequelize.sync({ force: true });
  console.log(" --------------- Database synced ---------------");

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  console.log(" --------------- User table seeded ---------------");

  await Dreams.bulkCreate(dreamsData, {
    individualHooks: true,
    returning: true,
  });
  console.log(" --------------- Dreams table seeded ---------------");

  process.exit(0);
};

seedDatabase();
