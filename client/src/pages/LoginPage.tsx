import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fetchData } from "@/config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');

  const handleLogin = async()=>{
    const res = await fetchData('/login', "POST", {email, password}, {})
    if(res.status === 200){
      localStorage.setItem('token', res.data.token);
      navigate('/');
    }
  };

  const handleSignup = async()=>{
    const res = await fetchData('/signup', "POST", {name, email, password}, {});
    console.log(res);
  }
  return (
    <div className="flex flex-col justify-center items-center h-[90vh]">
      <Tabs
        defaultValue="login"
        className="w-[400px]">
        <TabsList className="w-full">
          <TabsTrigger value="login" className="w-full font-bold">Login</TabsTrigger>
          <TabsTrigger value="signup" className="w-full font-bold">Signup</TabsTrigger>
        </TabsList>
        <TabsContent value="login" className="flex flex-col gap-3">
          <Input placeholder="Email" type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
          <Input placeholder="Password" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
          <Button onClick={()=>{handleLogin()}}>Login</Button>
        </TabsContent>
        <TabsContent value="signup" className="flex flex-col gap-3">
          <Input placeholder="Name" type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
          <Input placeholder="Email" type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
          <Input placeholder="Password" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
          <Button onClick={()=>{handleSignup()}}>Signup</Button>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LoginPage;
