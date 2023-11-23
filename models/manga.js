const {manga} = require('../temp_data');

async function getAllManga(){
    return await manga.manga;
}

async function getMangaById(manga_id){
    const mg = manga.manga.filter( m => m.id == manga_id);
    return mg;
}

module.exports = {
    getMangaById,
    getAllManga
}