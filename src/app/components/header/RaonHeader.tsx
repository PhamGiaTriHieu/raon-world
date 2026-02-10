'use client';

import {useRef, useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {IconClose, IconList, RaonLogo} from '@/assets';
import ContactUs from '@/components/header/ContactUs';
import Navigation from '@/components/header/Navigation';
import Container from '@/components/layout/Container';
import {useClickAway} from 'react-use';

const RaonHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const RaonHeaderRef = useRef<HTMLDivElement>(null);
  useClickAway(RaonHeaderRef, () => {
    setIsMenuOpen(false);
  });

  const handleClickShowMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      ref={RaonHeaderRef}
      className="flex justify-between items-center w-full"
    >
      <div className="select-none w-[90px] h-[27px]">
        <RaonLogo className="cursor-pointer w-full h-full" />
      </div>
      <div className="lg:block hidden">
        <Navigation isMobileView={false} />
      </div>
      <div className="lg:block hidden">
        <ContactUs />
      </div>
      {/* Mobile View */}
      <div className="lg:hidden block ">
        <div className="size-10 bg-gray-5 rounded-[100px] flex items-center justify-center">
          {isMenuOpen ? (
            <IconClose onClick={handleClickShowMenu} width={32} height={32} />
          ) : (
            <IconList onClick={handleClickShowMenu} width={32} height={32} />
          )}
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{height: 0, opacity: 0}}
            animate={{height: 570, opacity: 1}}
            exit={{height: 0, opacity: 0}}
            transition={{
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="absolute top-[64px] right-0 bg-[#F4F6FA] border w-full z-20 overflow-hidden"
          >
            <Container>
              <div className="py-6">
                <Navigation isMobileView={true} />

                <div className="mt-[54px]">
                  <ContactUs />
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RaonHeader;
