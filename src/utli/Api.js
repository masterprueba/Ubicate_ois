
class Api{
    async getSitios(){
        const query = await fetch('https://ubicate-ois.herokuapp.com/')
        const data = await query.json()
        return data
    }
}

export default new Api()