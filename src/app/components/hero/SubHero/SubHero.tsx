import React from 'react';
import Container from '@/components/layout/Container';
import BadgeCustom from '@/components/hero/SubHero/Badge';

const SubHero = () => {
  return (
    <Container className="pt-[158px]">
      <div className="relative max-w-[960px] max-h-[242px] mx-auto">
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

        <div className="relative max-w-[740px] w-full mx-auto">
          <p className="heading-4 tracking-tight text-center">
            Pioneering Smart, Secure, and Sustainable Maritime Logistics
            Solution
          </p>
        </div>
      </div>
    </Container>
  );
};

export default SubHero;
