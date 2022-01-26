module.exports = ({sequelize, Sequelize}) => {
    const User = sequelize.define('users', {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: Sequelize.UUIDV4
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        country: {
            type: Sequelize.STRING,
            allowNull: false
        },
        province: {
            type: Sequelize.STRING,
            allowNull: false
        },
        latitude: {
            type: Sequelize.DECIMAL(10,2),
            allowNull: false
        },
        longitude: {
            type: Sequelize.DECIMAL(10,2),
            allowNull: false
        }
    });

    return User;
}