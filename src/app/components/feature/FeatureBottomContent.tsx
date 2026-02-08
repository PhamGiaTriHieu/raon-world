import {IconGear, IconInsurance, IconTeamSetting} from '@/assets';

const featureWidgetData = [
  {
    icon: <IconGear width={52} height={52} />,
    title: 'Integrations',
    description:
      'Pre-built connectors for AIS, port TOS, EDI, ERP systems, telematics providers, and custom APIs for legacy systems.',
  },
  {
    icon: <IconInsurance width={52} height={52} />,
    title: 'Reliability & Security',
    description:
      'High availability, encrypted data in transit and at rest, role-based access control, and disaster recovery planning.',
  },
  {
    icon: <IconTeamSetting width={52} height={52} />,
    title: 'For developers & partners',
    description:
      'Open APIs, webhook support and developer docs for rapid integration',
  },
];

interface IFeatureWidgetProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureBottomContent = () => {
  return (
    <div className="mt-[112px]">
      <div id="feature-bottom-title" className="mb-20">
        <p className="text-body-16-medium text-primary text-center">Feature</p>
        <p className="heading-3 max-w-[800px]  text-center mx-auto mt-2 leading-[120%] tracking-tight mb-[72px]">
          Enterprise-Ready Platform, Built for Maritime Operations
        </p>
      </div>

      {/* content */}
      <div className="flex justify-center gap-6">
        {featureWidgetData.map(({icon, title, description}, index) => (
          <FeatureWidget
            key={index}
            icon={icon}
            title={title}
            description={description}
          />
        ))}
      </div>
    </div>
  );
};

const FeatureWidget = ({icon, title, description}: IFeatureWidgetProps) => {
  return (
    <div className="w-[392px] h-[250px] m-3">
      <div className="w-[100px] h-[100px] bg-[#EAEEFF] rounded-lg flex items-center justify-center mx-auto">
        {icon}
      </div>
      <div className="mt-6">
        <p className="text-body-24-semi-bold text-black-3 text-center mb-4">
          {title}
        </p>
        <p className="text-body-16 text-black-6 tracking-[-0.5%] text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureBottomContent;
