import userData from './user-data.json';
import _ from 'lodash';

export default class UserRepository {

    fetchAll() {
        return userData;
    }

    findByLogin(login) {
        return _.find(userData, {'login': login});
    }
}