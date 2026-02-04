'use client';

import {IconArrowRight} from '@/assets';
import {Button} from '@/components/ui/button';
import earthRaonAnimation from '@/assets/json/EarthRaonAnimation.json';
import Lottie from 'lottie-react';

const HeroContent = () => {
  return (
    <div className="flex w-full h-full pt-[151px]">
      <HeroLeftContent />
      <HeroRightContent />
    </div>
  );
};

export default HeroContent;

const HeroLeftContent = () => {
  return (
    <div className="w-full ">
      <div>
        <p className="heading-1 tracking-tight">
          Transforming Maritime Logistics With{' '}
          <span className="text-primary">Smart Technology</span>
        </p>

        <p className="text-body-16 text-[#0E0D16] tracking-tighter">
          AI driven liner operations, cloud-native orchestration, and
          sustainability
        </p>
      </div>
      {/* button */}
      <div className="mt-8 flex justify-start gap-x-6">
        <Button className="w-[167px] h-[54px]">
          <p className="text-body-18-semi-bold text-white">Request a Demo</p>
        </Button>

        <Button variant={'ghost'} className="w-[193px] h-[54px]">
          <div className="flex gap-x-2">
            <p className="text-body-16-semi-bold text-[#0E0D16] tracking-[-2%]">
              Explore Solutions
            </p>
            <IconArrowRight width={24} height={24} className="flex " />
          </div>
        </Button>
      </div>
    </div>
  );
};

const HeroRightContent = () => {
  return (
    <div className="w-full">
      <div className="p-10">
        <Lottie
          key="unique-key-1"
          animationData={earthRaonAnimation}
          loop={true}
          autoplay={true}
        />
      </div>
    </div>
  );
};
