import Header from "@/components/Header";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { fetchData } from "@/config";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllProductsPage = () => {
  const navigate = useNavigate();
    const [data, setData] = useState<any>([]);

    useEffect(()=>{
        const token = localStorage.getItem('token');
        const fetchProducts = async()=>{
            const res = await fetchData('/products', "GET", {}, {"Authorization": token});
            if(res.status === 200){
            setData(res.data);
            }
        };
        fetchProducts();
    },[]);
  return (
    <div className="flex flex-col gap-2">
      <Header />
      {data?.map((product: any, index: number)=>{
        return(
            <Card className="flex items-center cursor-pointer" key={index} onClick={()=>{navigate(`/item?id=${product._id}`)}}>
        <CardHeader className="w-1/6">
          <img src="/1.jpg" alt="" style={{width:'100%', height:'100px', objectFit:'cover'}} />
        </CardHeader>
        <div>
        <CardContent>
          <h1>{product.name}</h1>
            <p>{product.description}</p>
        </CardContent>
        <CardFooter>
          <p>$ {product.price}</p>
        </CardFooter>
        </div>
      </Card>
        )
      })}
    </div>
  );
};

export default AllProductsPage;
