module.exports = function(sequelize, DataTypes) {
    var Message = sequelize.define("Message", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      }
    });
  
    Message.associate = function(models) {
      // We're saying that a Message should belong to an Freelancer AND a Job
      // A Message can't be created without a Job and a Freelancer due to the foreign keys constraint
      Message.belongsTo(models.Freelancer, {
        foreignKey: {
          allowNull: false
        }
      }),
      Message.belongsTo(models.Job, {
        foreignKey: {
          allowNull: false
        }
      }
     );
    };
  
    return Message;
  };
  