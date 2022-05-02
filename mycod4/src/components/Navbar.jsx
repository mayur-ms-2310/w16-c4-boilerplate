import { Link } from "react-router-dom";
import { Flex } from "./Styled";

export const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#8000ff", padding: 20 , display:"flex" , justifyContent:"center", gap:"40px"}}>
      {/* 
                all the links in navbar,
      IMPORTANT: Link should match as mentioned in problem statement 
      */}

<Link to="/"><h3>Home</h3></Link>
<Link to="/about"><h3>About</h3></Link>
<Link to="/products"><h3>Products</h3></Link>
<Link to="/products/men"><h3>Men</h3></Link>
<Link to="/products/women"><h3>Women</h3></Link>
<Link to="/products/kids"><h3>Kids</h3></Link>
<Link to="/products/homedecor"><h3>Home decor</h3></Link>


    </nav>
  );
};
