const Sequelize = require('sequelize');
const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
    class posts extends Sequelize.Model { }

    posts.init(
        {
            post_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            title: DataTypes.STRING,
            content: DataTypes.TEXT,
            created_at: DataTypes.DATE
        },
        {
            sequelize,
            modelName: 'posts',
            freezeTableName: true,
            hooks: {
                beforeCreate(instance) {
                    instance.created_at = moment();
                }
            }
        }
    );

    return posts;
};
