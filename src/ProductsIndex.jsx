
export function ProductsIndex(props) { 
  console.log('Prod index page');
  console.log(props);
  
  return (
    props.products.map(products => (
      <div key ={products.id}>
        <p>name: {products.name}</p>
        <p>price: {products.price}</p>
        <p>image_url: {products.image_url}</p>
        <p>description: {products.description}</p>
        <p>stock: {products.stock}</p>
        <p>image_id: {products.image_id}</p>
        <hr/>
      </div>
    ))
  );
}
