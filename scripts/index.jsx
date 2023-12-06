const app = document.getElementById('app');

function Button({ onClick, label }) {
   return (
      <button onClick={onClick}>{label}</button>
   );
}

function ProductComponent({ imageSrc, name, value, description }) {
   return (
      <div className="item">
         <img src={imageSrc} alt={name} />
         <h4>{name}</h4>
         <p>{description}</p>
         <p className="price">{value}</p>
         <div className="containerButton">
            <button>Comprar</button>
         </div>
      </div>
   );
}

function HomePage() {
   const products = [
      { name: "Produto1", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, quo!", value: 50.00, imageSrc: "images/produto1.png" },
      { name: "Produto2", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, quo!", value: 52.00, imageSrc: "images/produto2.png" },
      { name: "Produto3", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, quo!", value: 62.00, imageSrc: "images/produto3.png" }
   ]
   
   const [selectProduct, setSelectproduct] = React.useState(products[0]);

   // const handleButtonClick = (index) => {
   //   setSelectproduct(products[index]);
   //}

   function handleButtonClick(index) {
      setSelectproduct(products[index]);
   }

   return (
      //<H1 />
      <div className="container">
         <div className="perfil">
            <img src="images/perfil.png" alt="perfil" />
         </div>
         <h1>Suculentas</h1>
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis possimus consequuntur veritatis qui iure ab.</p>
         <div className="buttonsProducts">
            {products.map((product, index) => (
               <Button
                  key={index}
                  onClick={() => handleButtonClick(index)}
                  label={product.name}
               />
            ))}
         </div>

         <div className="products">
            {selectProduct && (
               <ProductComponent
                  imageSrc={selectProduct.imageSrc}
                  name={selectProduct.name}
                  description={selectProduct.description}
                  value={selectProduct.value}
               />
            )}
         </div>
      </div>
   );
}

ReactDOM.render(<HomePage />, app);
