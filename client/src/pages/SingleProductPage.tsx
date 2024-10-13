import Header from "@/components/Header"
import { Button } from "@/components/ui/button"
import { fetchData } from "@/config";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SingleProductPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');

    const [data, setData] = useState<any>([]);

    useEffect(()=>{
        const token = localStorage.getItem('token');
        const fetchProduct = async()=>{
            const res = await fetchData(`/item/${id}`, "GET", {}, {"Authorization": token});
            if(res.status === 200){
                setData(res.data);
            };
        };
        fetchProduct();
    },[id]);
    
    const addToCart = async(id: string)=>{
        const token = localStorage.getItem('token');
        if(!token){
          navigate('/login');
        } else{
          const res = await fetchData('/cart', "POST", {id}, {"Authorization": token});
          console.log(res);
            if(res.status === 200){
                console.log(res.data);
                alert('Product added to cart');
            }
        }
      };

      const buyNow = async(id:string)=>{
        const token = localStorage.getItem('token');
        const res = await fetchData('/buynow', "POST", {product:id}, {"Authorization": token});
        console.log(res);
      };
  return (
    <div className="flex flex-col gap-3">
        <Header />
    <div className="flex flex-col items-center justify-center">
        <img src="/1.jpg" alt="" style={{width:'50%'}} />
    </div>
    <div className="flex flex-col gap-3 mt-10">
        <h1 className="text-2xl">{data?.name}</h1>
        <p className="text-lg">{data?.description}</p>
        <p className="text-lg font-bold">$ {data?.price}</p>
        <span>Stock: {data?.stock}</span>
    </div>
    <div className="flex gap-2 mt-20">
        <Button className="w-full" onClick={()=>{buyNow(data?._id)}}>Buy Now</Button>
        <Button className="w-full" onClick={()=>{addToCart(data._id)}}>Add to Cart</Button>
    </div>
    </div>
  )
}

export default SingleProductPage