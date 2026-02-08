import Link from 'next/link';
import {IconLogoFooter} from '@/assets';
import InputGroupCustom from '@/components/shared/InputGroupCustom';

const footerLinks = {
  company: {
    title: 'Company',
    links: [
      {name: 'About', href: '/about'},
      {name: 'Careers', href: '/careers'},
      {name: 'Contact', href: '/contact'},
    ],
  },
  solutions: {
    title: 'Solutions',
    links: [
      {name: 'AI Operations', href: '/ai-operations'},
      {name: 'Sustainability', href: '/sustainability'},
      {name: 'Analytics', href: '/analytics'},
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      {name: 'Blog', href: '/blog'},
      {name: 'Help Center', href: '/help'},
      {name: 'Privacy Policy', href: '/privacy'},
      {name: 'Terms of Service', href: '/terms'},
    ],
  },
  social: {
    title: 'Social',
    links: [{name: 'LinkedIn', href: 'https://linkedin.com'}],
  },
};

export default function FooterContent() {
  return (
    <footer className="text-white">
      {/* Top content */}
      <div className="pt-10 flex lg:mb-[76px]">
        <div className="max-w-[600px]">
          <p className="heading-2 text-white">Ready to Run Smarter Voyages?</p>
        </div>

        <div className="flex flex-1 justify-end items-center gap-4">
          <div className="max-w-[327px] w-full flex-col items-end flex-1">
            <div className="mb-4">
              <p className="text-body-20 font-bold text-white mb-1">
                Newsletter for updates
              </p>
              <p className="text-body-14 text-white">
                Subscribe to get more updates
              </p>
            </div>
            <div>
              <InputGroupCustom />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#78787880] lg:max-h-[254px] lg:overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12">
          {/* --- Column 1:  */}
          <div className="lg:col-span-3 pt-8 pb-8 lg:pb-0 px-6 lg:px-0 flex flex-col ">
            <div className="w-[118px] h-[25px]">
              <IconLogoFooter className="w-full h-[25px]" />
            </div>
            <div className="lg:pt-[32px]">
              <div className="max-w-[231px] lg:mb-4">
                <h3 className="text-body-16 text-neutral-1 capitalize tracking-tightest">
                  Office
                </h3>
                <p className="text-body-16 text-white tracking-tightest">
                  20/3 Ky Dong, Xuan Hoa Ward, <br /> Ho Chi Minh City, Viet
                  Nam, 70000
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="text-neutral-1 text-body-14 capitalize tracking-widest">
                  Email
                </h3>
                <a
                  href="mailto:contact@raonworldsolution.com"
                  className="text-body-16 text-white tracking-tightest hover:text-primary"
                >
                  contact@raonworldsolution.com
                </a>
              </div>
            </div>
          </div>

          {/* --- Column 2: GAP ZONE  --- */}
          <div className="hidden lg:block lg:col-span-2 border-x h-full border-[#78787880]"></div>

          {/* --- Column 3: LINKS  --- */}
          <div className="lg:col-span-7 p-8 lg:py-12">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
              {Object.values(footerLinks).map((section) => (
                <div key={section.title} className="space-y-4">
                  <h3 className="text-body-14 text-neutral-1 capitalize tracking-[-3%] cursor-default">
                    {section.title}
                  </h3>
                  <ul className="space-y-3 text-body-16-medium text-white tracking-[-3%]">
                    {section.links.map((link) => {
                      const isExternal = link.href.startsWith('http');
                      return (
                        <li key={link.name}>
                          {isExternal ? (
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-primary transition"
                            >
                              {link.name}
                            </a>
                          ) : (
                            <Link
                              href={link.href}
                              className="hover:text-primary transition"
                            >
                              {link.name}
                            </Link>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright  */}
      <div className="border-t border-[#78787880] pt-6 pb-10">
        <p className="text-center text-body-16 text-neutral-2 tracking-[-2%]">
          © Copyright Raon World Solution - 2025
        </p>
      </div>
    </footer>
  );
}
