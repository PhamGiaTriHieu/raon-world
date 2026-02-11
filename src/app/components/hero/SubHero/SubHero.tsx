import React from 'react';
import Container from '@/components/layout/Container';
import BadgeCustom from '@/components/hero/SubHero/Badge';

const SubHero = () => {
  return (
    <Container className="lg:pt-[158px] h-[601px] lg:h-[497px]">
      <div className="relative lg:max-w-[740px] w-full h-full flex items-center">
        <p className="heading-4-mobile lg:heading-4 tracking-tight text-center">
          Pioneering Smart, Secure, and Sustainable Maritime Logistics Solution
        </p>

        <BadgeCustom
          value="Innovation"
          className="rounded-[24px] rounded-br-none absolute left-0 top-10"
        />
      </div>

      {/* TODO: SubHero section */}
      {/* <div className="relative lg:max-w-[960px] lg:max-h-[242px] h-full mx-auto">
        <BadgeCustom
          value="Innovation"
          className="rounded-[24px] rounded-br-none"
        />

        <BadgeCustom
          value="Logistics"
          className="rounded-[24px] rounded-bl-none absolute right-26 top-0"
        />

        <BadgeCustom
          value="Technology"
          className="rounded-[24px] rounded-tr-none absolute  -bottom-18 left-56"
        />

        <BadgeCustom
          value="Solution"
          className="rounded-[24px] rounded-tr-none absolute  -bottom-28 right-0"
        />
      </div> */}
    </Container>
  );
};

export default SubHero;
