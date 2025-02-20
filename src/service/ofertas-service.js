import OfertasRepository from "../repository/ofertas-repository.js";

class OfertasService{
        async addOferta(dataOferta){
            return await OfertasRepository.addOferta(dataOferta);
        }
        async getOfertas(){
            return await OfertasRepository.getOfertas();
        }
        async getOfertasById(ofertaId){
            return await OfertasRepository.getOfertasById(ofertaId);
        }
        async updateOferta(dataOferta,ofertaId){
            return await OfertasRepository.updateOferta(dataOferta,ofertaId);
        }
        async deleteOferta(ofertaId){
            return await OfertasRepository.deleteOferta(ofertaId);
        }
}

export default new OfertasService();