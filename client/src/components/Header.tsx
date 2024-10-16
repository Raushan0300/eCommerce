import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const Header = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem('token');
  return (
    <div className="flex justify-between">
        <h1 className="text-3xl font-bold">eCApp</h1>
        <div className="flex gap-5 items-center">
        <h3 className="cursor-pointer" onClick={()=>{navigate('/products')}}>All Products</h3>
            {!token&&<Button className="w-[100px]" onClick={()=>{navigate('/login')}}>Login</Button>}
            {token&&<Button className="w-[100px]" onClick={()=>{navigate('/cart')}}>Cart</Button>}
        </div>
    </div>
  )
};

export default Header;