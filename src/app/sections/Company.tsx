import Container from '@/components/layout/Container';
import {ImgCompanyTopContent} from '@/assets';
import CompanyContent from '@/components/company/CompanyContent';
import CompanyBottomContent from '@/components/company/CompanyBottomContent';

const Company = () => {
  return (
    <div>
      <div className="mb-20 min-h-[1029px] bg-[radial-gradient(50%_115.86%_at_50%_50%,#05327C_0%,#031D48_67.79%,#01122E_100%)]">
        <Container className="pb-22">
          <div id="company-title" className="pt-[91px]">
            <p className="text-body-16-medium text-white text-center">
              Company
            </p>
            <div className="max-w-[1112px] w-full mx-auto">
              <p className="heading-3 tracking-tight text-center capitalize">
                <span className="bg-[linear-gradient(0deg,#2B51FF_0%,#5B7AFF_85%,#FFFFFF_100%)] bg-clip-text text-transparent">
                  Deliver Innovative
                </span>
                <span className="text-white">
                  , tech-driven solutions that enhance{' '}
                </span>
                <span className="bg-[linear-gradient(0deg,#2B51FF_0%,#5B7AFF_85%,#FFFFFF_100%)] bg-clip-text text-transparent">
                  maritime
                </span>
                <span className="bg-[linear-gradient(190deg,#2B51FF_0%,#5B7AFF_85%,#FFFFFF_100%)] bg-clip-text text-transparent">
                  {' '}
                  & logistics
                </span>
                <span className="text-white">
                  {' '}
                  <span className="bg-[linear-gradient(90deg,#FFFFFF_0%25,#93a4f1_76.92%25)] bg-clip-text text-transparent">
                    efficiency
                  </span>{' '}
                  , security and sustainability{' '}
                </span>
              </p>
            </div>
          </div>
          <div className="mt-[78px] max-w-[843px] h-[544px] w-full mx-auto">
            <ImgCompanyTopContent width={843} height={544} />
          </div>
        </Container>
      </div>

      {/* Why choose Raon */}
      <div className="mb-6">
        <CompanyContent />
      </div>
      <div className="mt-20">
        <CompanyBottomContent />
      </div>
    </div>
  );
};

export default Company;
