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
  
//Tonights tasks for Tim: sync tables with models
//                  Look into testing

  //in users model, associate "has many" to jobs
  //freelancers assciate "belongs to" user