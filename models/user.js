module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      email: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      }
    });
  
    User.associate = function(models) {
      // We're saying that a Message should belong to an Freelancer AND a Job
      // A Message can't be created without a Job and a Freelancer due to the foreign keys constraint
      Message.belongsTo(models.Freelancer, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return User;
  };
  