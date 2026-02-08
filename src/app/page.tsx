import SubHero from '@/components/hero/SubHero/SubHero';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Company from '@/sections/Company';
import Features from '@/sections/Features';
import Hero from '@/sections/Hero';
import Solutions from '@/sections/Solutions';

export default function Home() {
  return (
    <div>
      <div className="h-[100px] bg-white">
        <Header />
      </div>

      <div id="sections">
        <div id="home" className="h-[822px]">
          <Hero />
        </div>
        <div className="h-[497px] bg-white mt-20  mb-[154px]">
          <SubHero />
        </div>
        <div
          id="solutions"
          className="mb-3 h-[1731px] mb-[96px] overflow-hidden"
        >
          <Solutions />
        </div>
        <div id="feature" className="mb-[156px]">
          <Features />
        </div>
        <div id="company">
          <Company />
        </div>
      </div>

      <div className="-mt-10">
        <Footer />
      </div>
    </div>
  );
}
