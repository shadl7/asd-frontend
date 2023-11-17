import $api from "../http";
export default class CollectionService {
    static async GetCollections(author) {
        return $api.post('/collections', {author})
    }
    static async NewCollection(name, content, author) {
        return $api.post('/newCollection', {name, content, author})
    }
    static async RemoveCollection(id) {
        return $api.post('/removeCollection', {id})
    }
    static async UpdateCollection(collection) {
        return $api.post('/updateCollection', {collection})
    }

}