import {ImgBackgroundHero} from '@/assets';
import HeroContent from '@/components/hero/HeroContent';
import Container from '@/components/layout/Container';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative w-full h-full ">
      <BGImage />
      {/* 1. pink color mix-blend */}
      {/* <div
        className="absolute top-[40%] left-[10%] w-[800px] h-[100px]
        bg-pink-300/40 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none mix-blend-multiply"
      ></div> */}

      {/* 2. blue color mix-blend */}
      {/* <div
        className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] 
        bg-blue-200/40 rounded-full blur-[100px] pointer-events-none mix-blend-multiply"
      ></div> */}
      <Container>
        <HeroContent />
      </Container>
    </div>
  );
};

const BGImage = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <Image
        src={ImgBackgroundHero}
        alt="Background Hero Image"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/90 to-white/90 " />
    </div>
  );
};

export default Hero;
