import axios from "axios";
export async function getPostCategories(){
    const extensionURL = 'post-categories';
    const url = process.env.API_BASE_URL+extensionURL;
    return await getData(url);
}

export async function getNewestPost(){
    const extensionURL = 'post-newest';
    const url = process.env.API_BASE_URL+extensionURL;
    return await getData(url);
}

export async function getPostList(id){
    const extensionURL = 'post-list/'+id;
    const url = process.env.API_BASE_URL+extensionURL;
    return await getData(url);
}
export async function getPostDetails(id){
    const extensionURL = 'post-details/'+id;
    const url = process.env.API_BASE_URL+extensionURL;
    return await getData(url);
}

async function getData(url){
    let res = await axios.get(url)
    if(res.status === 200){
        return res.data;
    } else {
        return [];
    }
}