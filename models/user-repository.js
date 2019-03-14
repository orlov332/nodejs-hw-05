import userData from './user-data.json';

export default class UserRepository {

    fetchAll() {
        return userData;
    }
}