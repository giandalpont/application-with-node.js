import Sequelize, { Model } from 'sequelize';

class User extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                mail: Sequelize.STRING,
                password_heash: Sequelize.STRING,
                provider: Sequelize.BOOLEAN,
            },
            {
                sequelize,
            }
        );
    }
}

export default User;
