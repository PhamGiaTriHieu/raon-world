'use client';

import {RaonLogo} from '@/assets';
import ContactUs from '@/components/header/ContactUs';
import Navigation from '@/components/header/Navigation';

const RaonHeader = () => {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="select-none w-[90px] h-[27px]">
        <RaonLogo className="cursor-pointer w-full h-full" />
      </div>
      <Navigation />
      <ContactUs />
    </div>
  );
};

export default RaonHeader;
