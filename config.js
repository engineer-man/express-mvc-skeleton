module.exports = {

    environment: process.env.APPENV || 'development',
    database: {
        username: 'root',
        password: 'root',
        database: 'testdb',
        host: 'mysql',
        dialect: 'mysql',
        logging: false,
        timezone: '+00:00',
        define: {
            underscored: true,
            timestamps: false
        }
    }

};
