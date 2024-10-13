import Header from "@/components/Header";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import cartData from "../../public/RecentProduct.json";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { fetchData } from "@/config";

const Cart = () => {
    const navigate = useNavigate();
    const [data, setData] = useState<any>([cartData]);

    useEffect(()=>{
        const token = localStorage.getItem('token');
        const fetchCart = async()=>{
            const res = await fetchData('/cart-show', "GET", {}, {"Authorization": token});
            if(res.status === 200){
                setData(res.data);
            };
        };
        fetchCart();
    },[]);

    const buyNow = async()=>{
      const token = localStorage.getItem('token');
      const res = await fetchData('/buynow', "POST", {product:data.product}, {"Authorization": token});
      console.log(res);
    };

  return (
    <div className="flex flex-col gap-2">
      <Header />
      <h2>Total Cart Items: {data?.totalItems}</h2>
      {data?.product?.map((product: any, index: number)=>{
        return(
            <Card className="flex items-center cursor-pointer" key={index} onClick={()=>{navigate(`/item?id=${product.productId}`)}}>
        <CardHeader className="w-1/6">
          <img src="/1.jpg" alt="" style={{width:'100%', height:'100px', objectFit:'cover'}} />
        </CardHeader>
        <div>
        <CardContent>
          <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Quatity: {product.quatity}</p>
        </CardContent>
        <CardFooter>
          <p>$ {product.price}</p>
        </CardFooter>
        </div>
      </Card>
        )
      })}
      <h2 className="text-3xl font-semibold">Total Price: ${data?.totalPrice}</h2>
      <Button onClick={()=>{buyNow()}}>Buy Now</Button>
    </div>
  )
};

export default Cart;