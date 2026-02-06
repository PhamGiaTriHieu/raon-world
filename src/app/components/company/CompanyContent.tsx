import {ReactNode} from 'react';
import {
  IconAI,
  IconGlobeSetting,
  IconGlobeUser,
  IconAnalyticUp,
} from '@/assets';
import Container from '@/components/layout/Container';

const companyWidgetData = [
  {
    icon: <IconAI width={32} height={32} />,
    content: 'Maritime-first AI models and boardless liner expertise.',
  },
  {
    icon: <IconGlobeSetting width={32} height={32} />,
    content: 'Scalable platform built for global deployment',
  },
  {
    icon: <IconAnalyticUp width={32} height={32} />,
    content: 'Measurable impact: reduced fuel, emissions, and berth-time',
  },
  {
    icon: <IconGlobeUser width={32} height={32} />,
    content:
      'Cross-disciplinary team of engineers, data scientists, and maritime professionals',
  },
];

interface ICompanyWidgetProps {
  icon: ReactNode;
  content: string;
}

const CompanyContent = () => {
  return (
    <div className="mt-20 h-[798px] bg-[radial-gradient(circle_1.5px_at_center,#ffffff_100%,transparent_0),radial-gradient(circle_0.8px_at_center,#ffffff_100%,transparent_0),radial-gradient(circle_0.8px_at_center,#eeeeee_100%,transparent_0),linear-gradient(180deg,#FFFFFF_0%,#C6DAFC_100%)] bg-size-[40px_40px,8px_40px,40px_8px,100%_100%]">
      <div>
        <Container className="pt-[179px]">
          <p className="heading-3 text-center tracking-tight">
            Why choose Raon?
          </p>

          <div className="flex gap-6 mt-20">
            {companyWidgetData.map((item, index) => (
              <CompanyWidget
                key={index}
                icon={item.icon}
                content={item.content}
              />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

const CompanyWidget = ({icon, content}: ICompanyWidgetProps) => {
  return (
    <div className="w-[288px] h-[208px] bg-[#FFFFFF4D] border border-white rounded-xl">
      <div className="px-4 py-6">
        <div className="w-[62px] h-[62px] bg-linear-to-b from-white to-[#D2D8F2] rounded-lg outline outline-white shadow-[0_4px_12px_0_rgba(0,0,0,0.1)] flex items-center justify-center">
          {icon}
        </div>
        <p className="text-body-18 tracking-[-0.5px] mt-8 leading-[120%]">
          {content}
        </p>
      </div>
    </div>
  );
};

export default CompanyContent;
