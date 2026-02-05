import {Button} from '@/components/ui/button';
import {ImgFeatureVessel} from '@/assets';

interface IFeatureTopContentProps {
  title: string;
  description: string;
}

const FeatureTopContent = ({title, description}: IFeatureTopContentProps) => {
  return (
    <div className="flex">
      {/* Left content */}
      <div className="w-[50%] flex flex-col justify-center h-[458px]">
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
      </div>

      {/* Right content */}
      <div className="w-[50%] ">
        {/* <Image
          src={ImgFeatureVessel}
          alt="Feature Vessel"
          width={601}
          height={458}
        /> */}
        <ImgFeatureVessel width={601} height={458} />
      </div>
    </div>
  );
};

export default FeatureTopContent;
