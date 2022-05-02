import { Flex } from "./Styled";

export const ProductCard = ({ item }) => {
  
  return (
    <>
      <Flex data-testid="single-product-item" key={item.id}>
        {/* display item info here  */}
  
  <h3>{item.title}</h3>
  <img src={item.image}/>
  <h3>{item.brand}</h3>
  <h3>Price : {item.price}</h3>
       

      </Flex>
    </>
  );
};
