module.exports = function(sequelize, DataTypes) {
  var Job = sequelize.define("Job", {
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

  Jobs.associate = function(models) {
    // Associating Freelancer with Messages
    // When an Freelancer is deleted, also delete any associated Messages
    Jobs.hasMany(models.Message, {
      onDelete: "cascade"
    });
  };

  Job.associate = function(models) {
    // Associating Jobs with Freelancer
    Job.hasOne(models.Freelancer, {
    });
  };

  return Job;
};
