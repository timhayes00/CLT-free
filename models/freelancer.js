module.exports = function (sequelize, DataTypes) {
  var Freelancer = sequelize.define("Freelancer", {
    // Giving the Author model a name of type STRING
    freelancer_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
      skill_set: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      img_link: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      bio: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      portfolio: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      linked_in: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      rate_requested: {
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

  Freelancer.associate = function (models) {
    // Associating Freelancer with Messages
    // When an Freelancer is deleted, also delete any associated Messages
    Freelancer.hasMany(models.Message, {
      onDelete: "cascade"
    });
  };

  Freelancer.associate = function (models) {
    // Associating Freelancer with Jobs
    Freelancer.hasMany(models.Job, {
      onDelete: "cascade"
    });
  };

  return Freelancer;
};
