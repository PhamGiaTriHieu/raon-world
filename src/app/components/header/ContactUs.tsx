import {Button} from '@/components/ui/button';
import Link from 'next/link';

const ContactUs = () => {
  return (
    <div className="">
      <Link href="/contactUs">
        <Button className="w-[167px] h-[54px]">
          <p className="text-body-16 font-medium text-white">Contact Us</p>
        </Button>
      </Link>
    </div>
  );
};

export default ContactUs;
