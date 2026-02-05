import {
  IconOctagram,
  IconCircleSteps,
  IconCircleStepsCardAndLogo,
} from '@/assets';

import {cn} from '@/lib/utils';

const textData: ISolutionTextProps[] = [
  {
    title: 'Operate Smarter',
    description:
      'Boardless liner operation that automates scheduling and reduces berth wait times.',
    textHighlight: 'Operate',
  },
  {
    title: 'Act Greener',
    description:
      'Carbon-aware routing and operational optimizations to cut emissions.',
    textHighlight: 'Act',
  },
  {
    title: 'Decide Faster',
    description:
      'Predictive analytics and real-time insights that turn data into action.',
    textHighlight: 'Decide',
  },
];

const TopContent = () => {
  return (
    <div className="pt-[136px]">
      <div id="solution-title">
        <p className="text-body-16-medium text-primary text-center">
          Solutions
        </p>
        <div className="max-w-[1046px] w-full mx-auto">
          <p className="heading-4 tracking-tight text-center capitalize">
            Solve complex operational problems for shipowners, liners, terminals
            using an <span className="text-primary">integrated platform</span>{' '}
            and
            <span className="text-primary"> advisory services</span>.
          </p>
        </div>
      </div>

      <div id="solution-top-content" className="mt-20">
        <div className="flex gap-6">
          <div className="w-[50%]">
            {textData.map((text, index) => (
              <SolutionText
                key={`${index}-${text.textHighlight}`}
                title={text.title}
                description={text.description}
                textHighlight={text.textHighlight}
                isLastItem={index === textData.length - 1}
              />
            ))}
          </div>
          <div className="bg-[#F9F9F9] w-[598px] h-[546px] rounded-2xl ">
            <div className=" mx-auto my-auto">
              <div className="relative w-full h-full flex items-center justify-center p-10">
                <IconCircleSteps className="max-w-[518px] w-full max-h-[466px] h-full" />
                <IconCircleStepsCardAndLogo className="absolute top-[40%] left-1/2 -translate-x-1/2  w-[100%] aspect-square h-[50%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ISolutionTextProps {
  title: string;
  description: string;
  textHighlight: string;
  isLastItem?: boolean;
}
const SolutionText = ({
  title,
  description,
  textHighlight,
  isLastItem,
}: ISolutionTextProps) => {
  return (
    <div className={cn('max-w-[578px] mb-8', isLastItem && 'mb-0')}>
      <div className="flex gap-3 items-center mb-2">
        <IconOctagram width={22} height={22} />

        <p className="text-body-16-semi-bold text-primary">
          {textHighlight}
          <span className="text-body-16-semi-bold">
            {' '}
            {title.split(' ')[1]}{' '}
          </span>
        </p>
      </div>
      <p className="text-body-16">{description}</p>
    </div>
  );
};

export default TopContent;
