import UsuarioRepository from "../repository/usuario-repository.js";

class UsuarioService{
        async getUsuarios(){
            return await UsuarioRepository.getUsuarios();
        }
        async getUsuariosById(userId){
            return await UsuarioRepository.getUsuariosById(userId);
        }
        async addUsuario(userData){
            return await UsuarioRepository.addUsuario(userData);
        }
        async updateUsuario(userId,userData){
            return await UsuarioRepository.updateUsuario(userId,userData);
        }
        async deleteUsuario (userId){
            return await UsuarioRepository.deleteUsuario(userId);
        }
}

export default new UsuarioService();