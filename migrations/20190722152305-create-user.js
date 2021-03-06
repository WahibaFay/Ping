'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      lastName: {
        type: Sequelize.STRING
      },
      firstName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      picture: {
        type: Sequelize.STRING
      },
      cv: {
        type: Sequelize.STRING
      },
      about: {
        type: Sequelize.TEXT
      },
      facebook: {
        type: Sequelize.STRING
      },
      twitter: {
        type: Sequelize.STRING
      },
      linkedin: {
        type: Sequelize.STRING
      },
      available: {
        type: Sequelize.BOOLEAN
      },
      keyWordOne_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'KeyWords',
          key: 'id'
        }
      },
      keyWordTwo_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'KeyWords',
          key: 'id'
        }
      },
      keyWordThree_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'KeyWords',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};