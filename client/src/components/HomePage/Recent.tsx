import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { fetchData } from "@/config";
import { useNavigate } from "react-router-dom";

const Recent = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchProducts = async()=>{
      const res = await fetchData('/recent-products', "GET", {}, {"Authorization": token})
      if(res.status === 200){
        setData(res.data);
      }
    };
    fetchProducts();
  }, []);

  const addToCart = async(id: string)=>{
    const token = localStorage.getItem('token');
    if(!token){
      navigate('/login');
    } else{
      alert('Product added to cart');
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-semibold">Recently Added Products</h1>
      <div className="flex flex-col justify-center items-center">
        <Carousel style={{width:"90vw"}}>
          <CarouselContent>
            {data?.map((product:any, index:number)=>(
                <CarouselItem key={index} className="basis-1/5">
                    <Card className="h-[420px] flex flex-col justify-between">
                        <div>
                            <CardHeader>
                                <img src="/1.jpg" alt={product.name} style={{width: "100%", height:"200px", objectFit:'cover'}} />
                            </CardHeader>
                            <CardContent>
                                <CardTitle>{product.name}</CardTitle>
                                <CardDescription>{product.description}</CardDescription>
                            </CardContent>
                        </div>
                        <CardFooter className="flex gap-5">
                            <span>${product.price}</span>
                            <Button onClick={()=>{addToCart(product._id)}}>Add To Cart</Button>
                        </CardFooter>
                    </Card>
                </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Recent;
