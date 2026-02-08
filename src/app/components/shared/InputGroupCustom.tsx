import React from 'react';

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@/components/ui/input-group';
import {Button} from '@/components/ui/button';
import {IconArrowGoRight} from '@/assets';

const InputGroupCustom = () => {
  return (
    <div>
      <InputGroup className="h-[48px] outline-none border border-neutral-1 text-white">
        <InputGroupInput
          type="email"
          placeholder="Enter your email"
          className="h-full placeholder:text-neutral-1"
        />
        <InputGroupAddon align="inline-end">
          <Button className="h-10 max-w-[107px] w-full">
            <span className="text-body-14 leading-[22px] tracking-[-1%] text-white">
              Subscribe
            </span>
            <IconArrowGoRight width={15} height={15} className="ml-2" />
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default InputGroupCustom;
