import OfertasDAO from "../dao/ofertas-dao.js"

class OfertasRepository{
    async addOferta(dataOferta){
        return await OfertasDAO.nuevaOferta(dataOferta);
    }
    async getOfertas(){
        return await OfertasDAO.getOfertas();
    }
    async getOfertasById(ofertaId){
        return await OfertasDAO.getOfertasById(ofertaId);
    }
    async updateOferta(dataOferta,ofertaId){
        return await OfertasDAO.actualizarOferta(dataOferta,ofertaId)
    }
    async deleteOferta(ofertaId){
        return await OfertasDAO.eliminarOferta(ofertaId);
    }
}

export default new OfertasRepository();