module.exports = function(sequelize, DataTypes) {
  var Freelancer = sequelize.define("Freelancer", {
    // Giving the Author model a name of type STRING
    creator: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
      job_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      job_description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      job_category: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      budget: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
      email: {
          type: Datatypes.STRING,
          validate: {
              isEmail: true
          }
      }
    }
  });

  Freelancer.associate = function(models) {
    // Associating Freelancer with Messages
    // When an Freelancer is deleted, also delete any associated Messages
    Freelancer.hasMany(models.Message, {
      onDelete: "cascade"
    });
  };

  Freelancer.associate = function(models) {
    // Associating Freelancer with Jobs
    // When an Freelancer is deleted, also delete any associated Jobs
    Freelancer.hasMany(models.Job, {
      onDelete: "cascade"
    });
  };

  return Freelancer;
};
