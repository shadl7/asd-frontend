import $api from "../http";
export default class ScriptService {
    static async GetScripts(author) {
        return $api.post('/scripts', {author})
    }
    static async NewScript(name, content, config, author) {
        return $api.post('/newscript', {name, content, config, author})
    }
    static async RemoveScript(id) {
        return $api.post('/removescript', {id})
    }
    static async UpdateScript(script) {
        return $api.post('/updatescript', {script})
    }

}