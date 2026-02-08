import {ReactNode} from 'react';
import Container from '@/components/layout/Container';
import {ImgCEO, ImgCFO, ImgDirector} from '@/assets';
import {cn} from '@/lib/utils';

const CompanyBottomContent = () => {
  return (
    <div className="h-[854px]">
      <Container>
        <div className="flex justify-center items-center h-full">
          <CompanyCardImage
            icon={<ImgCEO width={430} height={382} className="rounded-xl" />}
            name="Tevin Hyung Chul CHOI"
            position="CEO & Founder"
            isCEO
          />
        </div>

        <div className="flex gap-6 mt-6 max-w-[768px] mx-auto">
          <CompanyCardImage
            icon={<ImgCFO width={133} height={133} className="rounded-xl" />}
            name="Hyung Suk KIM"
            position="CFO"
            isCEO={false}
          />
          <CompanyCardImage
            icon={
              <ImgDirector width={133} height={133} className="rounded-xl" />
            }
            name="Dr. Morgan Sang Ho HAN"
            position="Director"
            isCEO={false}
          />

          <CompanyCardContent />
        </div>
      </Container>
    </div>
  );
};

interface ICompanyCardImageProps {
  icon: ReactNode;
  name: string;
  position: string;
  isCEO: boolean;
}

const CompanyCardImage = ({
  icon,
  name,
  position,
  isCEO,
}: ICompanyCardImageProps) => {
  return (
    <div
      className={cn(
        'w-[430px] h-[490px] rounded-xl bg-card-img',
        !isCEO && 'w-[240px] h-[260px]',
      )}
    >
      <div
        className={cn(
          !isCEO &&
            'bg-[#EBF0F3] rounded-xl h-[160px] flex justify-center items-center',
        )}
      >
        {icon}
      </div>
      <div className="py-6 px-3">
        <p
          className={cn(
            'text-[25px] text-primary font-semibold leading-[120%] text-center tracking-[-0.5px]',
            !isCEO && 'text-[18px]',
          )}
        >
          {name}
        </p>
        <p
          className={cn(
            'text-[18px] font-bold leading-[120%] text-center tracking-[-0.5px] text-[#6A6FAA] mt-2',
            !isCEO && 'text-[18px] font-normal tracking-[-1px]',
          )}
        >
          {position}
        </p>
      </div>
    </div>
  );
};

const CompanyCardContent = () => {
  return (
    <div className="w-[240px] h-[260px] bg-[#DDE9FF] rounded-xl">
      <div className="p-6">
        <p className="text-[28px] font-semibold leading-[120%] tracking-[-1px] text-black-3">
          <span className="text-primary">+3 </span>Founders
        </p>
        <p className="text-body-16 leading-[120%] tracking-[-0.5px] mt-3">
          Founded by a team of maritime engineers, cloud architects and AI
          specialists, we’re building the future of logistics with technology
          that delivers real-world results.
        </p>
      </div>
    </div>
  );
};

export default CompanyBottomContent;
