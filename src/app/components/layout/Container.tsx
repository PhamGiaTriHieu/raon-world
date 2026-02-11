import {cn} from '@/lib/utils';

interface IContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Container = ({children, className, ...props}: IContainerProps) => {
  return (
    <div
      className={cn(
        'mx-auto w-full lg:max-w-[1240px] max-[400px] px-5 overflow-x-hidden',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
