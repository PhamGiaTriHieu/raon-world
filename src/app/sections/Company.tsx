import React from 'react';
import Container from '@/components/layout/Container';

const Company = () => {
  return (
    // TODO: Update mb
    <div className="mb-20 h-[1029px] bg-[radial-gradient(50%_115.86%_at_50%_50%,#05327C_0%,#031D48_67.79%,#01122E_100%)]">
      <Container>
        <div id="company-title" className="pt-[91px]">
          <p className="text-body-16-medium text-white text-center">Company</p>
          <div className="max-w-[1112px] w-full mx-auto">
            <p className="heading-3 tracking-tight text-center capitalize">
              {/* <span className="bg-linear-to-tl from-[#2B51FF] to-white bg-clip-text text-[#446DFF] ">
                Deliver innovative
              </span> */}
              <span className="bg-[linear-gradient(90deg,#2B51FF_0%,#5B7AFF_85%,#FFFFFF_100%)] bg-clip-text text-transparent">
                Deliver Innovative,
              </span>
              , tech-driven solutions that enhance maritime & logistics
              efficiency, security and sustainability
            </p>
          </div>
        </div>
        <p>Company Page</p>
      </Container>
    </div>
  );
};

export default Company;
