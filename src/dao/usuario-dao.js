import UsuarioModel from "./models/usuario-model.js"

class UsuarioDAO{
    async getUsuarios(){
        return await UsuarioModel.find();
    }
    async getUsuarioById(userId){
        return await UsuarioModel.findById(userId);
    }
    async addUsuario(userData){
        return await UsuarioModel.create(userData);
    }
    async updateUsuario(userId,userData){
        return await UsuarioModel.findByIdAndUpdate(userId,userData);
    }
    async deleteUsuario(userId){
        return await UsuarioModel.findByIdAndDelete(userId);
    }
    }

export default new UsuarioDAO();