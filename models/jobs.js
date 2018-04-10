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
      email: {
          type: Datatypes.STRING,
          validate: {
              isEmail: true
          }
      }
    }
  });

  Job.associate = function(models) {
    // Associating Freelancer with Messages
    // When an Freelancer is deleted, also delete any associated Messages
    Job.hasMany(models.Message, {
      onDelete: "cascade"
    });
    // Associating Jobs with Freelancer
    Job.hasOne(models.Freelancer, {
      onDelete: "cascade"
    });
  };

  //redundant, but leaving this here in case it's the preferred method
  // Job.associate = function(models) {
  //   // Associating Jobs with Freelancer
  //   Job.hasOne(models.Freelancer, {
  //   });
  // };

  return Job;
};
