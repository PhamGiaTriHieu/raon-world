import {Button} from '@/components/ui/button';
import {ImgFeatureVessel, ImgFeatureVessel2, ImgFeatureVessel3} from '@/assets';
import {cn} from '@/lib/utils';

interface IFeatureTopContentProps {
  title: string;
  description: string;
  id: number;
}

const FeatureTopContent = ({
  id,
  title,
  description,
}: IFeatureTopContentProps) => {
  const getImageRightContent = () => {
    switch (id) {
      case 2:
        return <ImgFeatureVessel2 width={601} height={458} />;
      case 3:
        return <ImgFeatureVessel3 width={601} height={458} />;
      default:
        return <ImgFeatureVessel width={601} height={458} />;
    }
  };

  return (
    <div className="flex">
      {/* Left content */}
      {/* <div className="w-[50%] flex flex-col justify-center h-[458px]">
        <div className="max-w-[581px] w-full">
          <p className="heading-4 tracking-[-0.5px]  mb-6">{title}</p>
          <p className="text-body-16 tracking-[-0.5%]">{description}</p>
        </div>

        <Button
          variant="secondary"
          className="mt-15 w-[167px] h-[54px] text-body-18-semi-bold text-white tracking-[-2%]"
        >
          Get Started
        </Button>
      </div> */}

      <div className="w-[50%] flex flex-col justify-start lg:mt-[99px] h-[458px]">
        <div className="max-w-[581px] w-full">
          <p className="heading-4 tracking-[-0.5px] mb-6">{title}</p>
          <p
            className={cn(
              'text-body-16 tracking-[-0.5%] mb-15',
              id === 1 && 'max-w-[525px]',
            )}
          >
            {description}
          </p>

          <Button
            variant="secondary"
            className="w-[167px] h-[54px] text-body-18-semi-bold text-white tracking-[-2%]"
          >
            Get Started
          </Button>
        </div>
      </div>

      {/* Right content */}
      <div className="w-[50%] ">
        {/* <ImgFeatureVessel width={601} height={458} /> */}
        {getImageRightContent()}
      </div>
    </div>
  );
};

export default FeatureTopContent;
