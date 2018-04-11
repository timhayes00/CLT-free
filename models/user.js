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
      //The User should be IDed inside the freelancer database
      User.hasMany(models.Freelancer, {
        foreignKey: {
          allowNull: false
        }
      }),
      User.hasMany(models.Job, {
          foreignKey: {
              allowNull: false
          }
      })
    };
  
    return User;
  };
