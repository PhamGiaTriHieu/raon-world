import React, {ReactNode} from 'react';
import Image from 'next/image';
import BgTech from '@/assets/images/bgSolutionTech.png';
import Container from '@/components/layout/Container';
import {
  IconSolutionTechLine,
  IconOctagram,
  IconStarQuarda,
  IconSparkle,
} from '@/assets/index';
import {cn} from '@/lib/utils';

const solutionTechTextData = [
  {
    icon: <IconOctagram width={20} height={20} />,
    title: 'Predictive Intelligence & Operational Insights',
    description: 'ETA prediction, anomaly detection, demand forecasting.',
  },
  {
    icon: <IconStarQuarda width={16} height={16} />,
    title: 'Cloud Infrastructure',
    description: 'Scalable, resilient services with CI/CD and observability.',
  },
  {
    icon: <IconSparkle width={20} height={20} />,
    title: 'Secure Data Fabric',
    description: ' End-to-end encryption, RBAC, and audit trails.',
  },
];

interface ISolutionTechTextProps {
  icon: ReactNode;
  title: string;
  description: string;
  isLastItem?: boolean;
}

const SolutionBottomContent = () => {
  return (
    <div className="">
      <div className="relative h-[724px] bg-[linear-gradient(to_left,#FAFCFF00,#F5F5F582,#F5F6F8)] overflow-hidden">
        <BackgroundCircle />

        <Container className="flex w-full h-full items-center gap-x-6">
          <div className="flex items-center justify-center w-[50%]">
            <div className="relative h-[518px] w-[597px] rounded-2xl">
              <BgSolutionTech />
              <IconSolutionTechLine className="absolute top-0 left-0  w-full  h-full" />
            </div>
          </div>

          <div className="h-[518px] w-[50%]">
            <p className="heading-4 mb-[42px]">
              Tech <span className="text-primary">Pillars</span>
            </p>

            {solutionTechTextData.map((item, index) => {
              return (
                <TextContent
                  key={`${index}-${item.title}`}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  isLastItem={index === solutionTechTextData.length - 1}
                />
              );
            })}
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

const TextContent = ({
  icon,
  title,
  description,
  isLastItem,
}: ISolutionTechTextProps) => {
  return (
    <div className={cn('mb-[50px] pl-6', isLastItem && 'mb-0')}>
      <div className="w-[30px] h-[30px] rounded-[100px] bg-linear-to-b from-[#DAE0FF] to-[#EBEFFF] flex items-center justify-center mb-2">
        {icon}
      </div>
      <p className="text-body-24-semi-bold tracking-[-1px]">{title}</p>
      <p className="text-body-16">{description}</p>
    </div>
  );
};

export default SolutionBottomContent;
