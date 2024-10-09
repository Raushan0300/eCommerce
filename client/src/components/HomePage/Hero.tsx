import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Hero = () => {
  return (
    <div className="flex justify-center items-center">
        <Carousel opts={{align:'start', loop:true}} plugins={[Autoplay({delay: 2000})]} style={{width:'100vw'}}>
          <CarouselContent>
            <CarouselItem><img src="/1.jpg" alt="1" style={{width: '100%', height:'400px', objectFit:'cover'}} /></CarouselItem>
            <CarouselItem><img src="/2.jpg" alt="2" style={{width: '100%', height:'400px', objectFit:'cover'}} /></CarouselItem>
            <CarouselItem><img src="/3.avif" alt="3" style={{width: '100%', height:'400px', objectFit:'cover'}} /></CarouselItem>
            <CarouselItem><img src="/4.jpg" alt="4" style={{width: '100%', height:'400px', objectFit:'cover'}} /></CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
  )
}

export default Hero