import { getFotos, getPosto } from "./ApiServices";


export const getApiPost = async () => {
    const postApi = getPosto(); //fetch('https://jsonplaceholder.typicode.com/posts');
    const fotosApi   = getFotos(); // fetch('https://jsonplaceholder.typicode.com/photos');
    const [posts,fotos] = await Promise.all([postApi, fotosApi]);
    const data     = await posts.json();
    const dataFoto = await fotos.json();
    const newDados = data.map((post,index )=> {
      return {...post,foto:dataFoto[index].url}
    })
    ///this.setState({ posts: newDados });

    return newDados;
}


export default getApiPost;