module.exports = (sequelize, DataTypes) => {
  const customResponse = sequelize.define('customResponse', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    slug: {
      type: DataTypes.STRING
    },
    response: {
      type: DataTypes.JSONB
    }
  }, {
    tableName: 'custom_response',
    timestamps: false
  })
  return customResponse
}
