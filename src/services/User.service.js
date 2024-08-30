import { User } from "../models/User.js";

class userService {
    constructor() { }

    async findAll(){
        return await User.findAll();
    }

    async create(user){
        return await User.create(user);
    }

    async findByPk(id){
        return await User.findByPk(id)
    }

    async update(id, user){
        return await User.update(user, { where: { id } })
    }

    async destroy(id){
        return await User.destroy({ where: { id }  })
    }

    async findOne(email){
        return await User.findOne({ where: { email:email }})
    }

}

export default new userService();