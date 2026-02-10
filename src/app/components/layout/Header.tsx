import RaonHeader from '@/components/header/RaonHeader';
import Container from '@/components/layout/Container';

const Header = () => {
  return (
    <div>
      <Container className="py-3 lg:py-[22px]">
        <RaonHeader />
      </Container>
    </div>
  );
};

export default Header;
