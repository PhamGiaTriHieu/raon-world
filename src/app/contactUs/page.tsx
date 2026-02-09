import Container from '@/components/layout/Container';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import BgImageCustom from '@/components/shared/BgImageCustom';
import ContactUs from '@/contactUs/ContactUs';

const Page = () => {
  return (
    <div>
      <Container className="min-h-screen">
        <div>
          <Header />
        </div>
        <div className="py-20 text-center text-3xl font-bold">
          <BgImageCustom overlayClassName="via-white/70 to-white/40" />

          <div>
            <ContactUs />
          </div>
        </div>
      </Container>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
