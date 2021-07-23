import "./style.css";
import { Component } from "react";
//import ListPost from "../../Component/ListPost";
import getApiPost from "../../API/Api";
import Main from "../../Component/Main";
import MeuButton from "../../Component/Button";
import Input from "../../Component/Input";

class Home extends Component {
  state = {
    contador: 0,
    posts: [],
    allPost: [],
    totalPage: 2,
    paginaAtual: 0,
    searchValue: "",
  };

  timeOut = null;

  //   handleClick =() =>  {
  //     let {conterClick} = this.state;
  //     this.setState({name :'Levi',age:40,address:'Nova Brasilia',conterClick:conterClick + 1  });
  //     console.log(`Testando ${this.state.name}`) ;
  //   }

  // handleRedirecto = (event) =>{
  //   event.preventDefault();
  //   event.nativeEvent.href = 'www.totvs.com.br'
  //   console.log(event.nativeEvent);
  // }

  async componentDidMount() {
    await this.getApi();
  }
  componentDidUpdate() {
    //this.handleTimeOut();
    //console.log('update')
  }

  getApi = async () => {
    let { paginaAtual, totalPage } = this.state;
    let dados = await getApiPost();
    let axDados = await getApiPost();

    this.setState({
      posts: dados.splice(paginaAtual, totalPage),
      allPost: axDados,
    });
  };
  componentWillUnmount() {
    //   clearInterval(this.timeOut);
  }

  handleTimeOut() {
    let { posts, contador } = this.state;
    posts[0].nome = "Houve uma Alteração";

    this.timeOut = setTimeout(() => {
      this.setState({ posts, contador: contador + 1 });
    }, 1000);
  }

  handeButtonPagina = () => {
    let { posts, paginaAtual, totalPage, allPost } = this.state;
    console.log(posts);
    const nextPage = paginaAtual + totalPage;
    const dadosPagina = allPost.slice(nextPage, nextPage + totalPage);
    console.log('')
    posts.push(...dadosPagina);

    this.setState({
      posts,
      paginaAtual: nextPage,
    });
  };

  handleSearchElement = (dados) => {
    let { value } = dados.target;
    this.setState({ searchValue: value });
  };

  render() {
    let { posts, paginaAtual, totalPage, allPost, searchValue } = this.state;
    let disbableButton = paginaAtual + totalPage > allPost.length;
    let cor = disbableButton ? "violet" : "red";

    let filterPost = !!searchValue? 
      allPost.filter(x => {
          return x.title.toLowerCase().includes(searchValue.toLowerCase()) 
      } )
      :posts;

    return (
      <section className="container">
        <span>Pesquisar :</span>
        <Input
          placeholder='Buscar de título'
          type="search"
          onChange={this.handleSearchElement}
          value={searchValue}
        ></Input>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        {filterPost.length > 0 && (
           <Main posts={filterPost} />
        )}
        {filterPost.length === 0 && (
          <p>Não existe Posts. </p>
        )}
        {!searchValue && (
          <MeuButton
            color={cor}
            disabled={disbableButton}
            onClick={this.handeButtonPagina}
          >
            Processar
          </MeuButton>
        )}
      </section>
    );
  }
}

export default Home;
