'use client';
import {ReactNode, useState} from 'react';
import {IconSettingSync, IconEcoSync, IconAnalyticUp} from '@/assets';
import Container from '@/components/layout/Container';
import {cn} from '@/lib/utils';
import FeatureTopContent from '@/components/feature/FeatureTopContent';
import FeatureBottomContent from '@/components/feature/FeatureBottomContent';

const featureNavItem = [
  {
    title: 'Intelligent Operation System',
    icon: <IconSettingSync width={24} height={24} />,
    content:
      'Cloud-native, modular microservices platform that ingests real-time telemetry and delivers prescriptive insights through secure APIs and dashboards.',
  },
  {
    title: 'Sustainability Tools',
    icon: <IconEcoSync width={24} height={24} />,
    content:
      'Measure and optimize voyage emissions and fuel consumption with features like carbon footprint tracking, green routing, and ESG-ready reporting, leading to benefits such as lower emissions, compliance readiness, and stronger sustainability reporting.',
  },
  {
    title: 'Analytics & Insights',
    icon: <IconAnalyticUp width={24} height={24} />,
    content:
      'Turn operational data into forecasts, alerts, and decisions. Features include ETA forecasting, demand prediction, anomaly detection, and dashboards, which provide benefits such as proactive planning, fewer disruptions, and cost savings.',
  },
];

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [itemSelected, setItemSelected] = useState(featureNavItem[0]);
  const handleClickNavItem = (index: number) => {
    setActiveIndex(index);
    setItemSelected(featureNavItem[index]);
  };
  return (
    <div className="bg-linear-to-b from-[#ECF3FE] to-[#FFFFFF] h-full">
      <Container>
        <div id="feature-title" className="pt-10">
          <p className="text-body-16-medium text-primary text-center">
            Feature
          </p>
          <p className="heading-3 max-w-[468px] text-center mx-auto mt-2 leading-[120%] tracking-tight mb-[72px]">
            Smart Solution the Real Impacts
          </p>
        </div>
        <div id="feature-nav">
          <div className="flex gap-3 justify-center">
            {featureNavItem.map((item, index) => (
              <NavItem
                key={index}
                title={item.title}
                icon={item.icon}
                isActive={index === activeIndex} // Example: Set the first item as active
                onClick={() => handleClickNavItem(index)}
              />
            ))}
          </div>
        </div>

        {/* Top content */}
        <div className="mt-20">
          <FeatureTopContent
            title={itemSelected.title}
            description={itemSelected.content}
          />
        </div>
        {/* Bottom content */}
        <div className="mt-20">
          <FeatureBottomContent />
        </div>
      </Container>
    </div>
  );
};

interface INavItemProps {
  title: string;
  icon: ReactNode;
  isActive: boolean;
  onClick?: () => void;
}
const NavItem = ({title, icon, isActive, onClick}: INavItemProps) => {
  return (
    <div
      className={cn(
        'bg-white w-[320px] h-[66px] rounded-lg flex items-center gap-3 px-4 cursor-pointer',
        'border border-[#EAEEFF]',
        isActive && 'border border-primary bg-[#F5F7FF]',
      )}
      onClick={onClick}
    >
      <div className="w-9 h-9 bg-linear-to-b from-white to-[#D2D8F2] rounded-lg outline outline-white shadow-[0_4px_12px_0_rgba(0,0,0,0.1)] flex items-center justify-center">
        {icon}
      </div>
      <p className="text-body-16-medium">{title}</p>
    </div>
  );
};

export default Features;
