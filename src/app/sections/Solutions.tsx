import Container from '@/components/layout/Container';
import SolutionBottomContent from '@/components/solution/bottomContent/SolutionBottomContent';
import TopContent from '@/components/solution/topContent/TopContent';

const Solutions = () => {
  return (
    <div className="relative ">
      <BackgroundCircle />
      <Container className="mb-14">
        <TopContent />
      </Container>
      <SolutionBottomContent />
    </div>
  );
};

const BackgroundCircle = () => {
  return (
    <div className="absolute w-[682px]  h-[682px]  bg-linear-to-r from-[#FFFFFF] to-[#F9EBF3] rounded-full -z-10 opacity-56 -left-[323px]"></div>
  );
};

export default Solutions;
