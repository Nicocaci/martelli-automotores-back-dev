import UsuarioDAO from "../dao/usuario-dao.js";


class UsuarioRepository{
    async getUsuarios(){
        return await UsuarioDAO.getUsuarios();
    }
    async getUsuariosById(userId){
        return await UsuarioDAO.getUsuarioById(userId);
    }
    async addUsuario(userData){
        return await UsuarioDAO.addUsuario(userData);
    }
    async updateUsuario(userId,userData){
        return await UsuarioDAO.updateUsuario(userId,userData);
    }
    async deleteUsuario (userId){
        return await UsuarioDAO.deleteUsuario(userId);
    }
}

export default new UsuarioRepository();