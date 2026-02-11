import Image from 'next/image';
import {ImgBackgroundHero} from '@/assets';
import {cn} from '@/lib/utils';

interface IBgImageCustom {
  overlayClassName?: string;
}
const BgImageCustom = ({overlayClassName}: IBgImageCustom) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <Image
        src={ImgBackgroundHero}
        alt="Background Hero Image"
        className="w-full h-full max-h-[908px] lg:max-h-[822px] object-cover "
        loading="eager"
      />
      <div
        className={cn(
          'absolute inset-0 bg-linear-to-r from-transparent via-white/90 to-white/90',
          overlayClassName,
        )}
      />
    </div>
  );
};

export default BgImageCustom;
