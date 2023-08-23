import axios from "axios";

export default async function getData(){
    await axios.get('/data/blogData.json')
        .then(res => {
            return res.data['data']
        })
        .catch(()=> [])
}