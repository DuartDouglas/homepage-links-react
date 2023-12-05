const app = document.getElementById('app');

// fazer um array ou objeto para os itens 
// pegar os itens e renderizar conforme o botão 
// cria um componente botão 
// cirar uma função que irá gerar quantos botões existires para a quantidade de produtos 
// criar um componente produto/item

function HomePage() {
   return (
      //<H1 />
      <div className="container">
         <div className="perfil">
            <img src="images/perfil.png" alt="" />
         </div>
         <h1>Suculentas</h1>
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis possimus consequuntur veritatis qui iure ab.</p>
         <div className="buttonsProducts">
            <button>Produto 1</button>
            <button>Produto 2</button>
            <button>Produto 3</button>
         </div>

         <div className="products">
            <div className="item">
               <img src="images/produto-3.png" alt="produto-1" />
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore laboriosam voluptatem voluptate ea accusantium esse. Ab, delectus. Provident perspiciatis nesciunt id ab possimus fuga quod, hic earum mollitia placeat nemo.</p>
               <p className="price">R$ 55,00</p>
               <div className="containerButton">
                  <button>Comprar</button>
               </div>
            </div>
         </div>
      </div>
   );
}

ReactDOM.render(<HomePage />, app);
