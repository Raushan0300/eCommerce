import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="flex justify-between">
        <h1 className="text-3xl font-bold">eCApp</h1>
        <div className="flex gap-5">
            <Button className="w-[100px]">Login</Button>
            <Button className="w-[100px]">Cart</Button>
        </div>
    </div>
  )
};

export default Header;