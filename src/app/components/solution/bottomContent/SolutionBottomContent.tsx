import Image from 'next/image';
import React from 'react';
import BgTech from '@/assets/images/bgSolutionTech.png';
import Container from '@/components/layout/Container';

const SolutionBottomContent = () => {
  return (
    <div className="">
      <div className="relative h-[724px] bg-[linear-gradient(to_left,#FAFCFF00,#F5F5F582,#F5F6F8)] overflow-hidden">
        <BackgroundCircle />

        <Container className="flex w-full h-full items-center gap-x-6">
          <div className="flex items-center justify-center flex-1">
            <div className="h-[518px] w-[597px] rounded-2xl">
              <BgSolutionTech />
            </div>
          </div>
          <div className="w-full">
            <h1>right</h1>
          </div>
        </Container>
      </div>
    </div>
  );
};

const BackgroundCircle = () => {
  return (
    <div className="absolute w-[682px]  h-[682px]  bg-linear-to-tr from-[#FFFFFF] to-[#F9EBF3] rounded-full -z-10 opacity-56 -top-[345px] -right-[200px]"></div>
  );
};

const BgSolutionTech = () => {
  return (
    <Image
      src={BgTech}
      width={597}
      height={518}
      className="w-full h-full rounded-2xl"
      alt="Background Solution Tech"
    />
  );
};

export default SolutionBottomContent;
