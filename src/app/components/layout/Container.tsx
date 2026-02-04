import {cn} from '@/lib/utils';

interface IContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Container = ({children, className, ...props}: IContainerProps) => {
  return (
    <div className={cn('mx-auto w-full max-w-[1240px]', className)} {...props}>
      {children}
    </div>
  );
};

export default Container;
