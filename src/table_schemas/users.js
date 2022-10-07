'use strict';

const { Model } = require('objection');
module.exports = (objection, DataTypes) => {
    class users extends Model {
        static associate(models) { }
    };

    users.init({
        id: {
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER

        },
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        role_id: DataTypes.INTEGER,        
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {
        objection,
        modelName: 'users',
        tableName: 'users'
    }
    );
    return users;
};