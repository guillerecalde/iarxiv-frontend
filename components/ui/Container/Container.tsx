import classNames from 'classnames';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className = '' }: ContainerProps) => (
  <div className={classNames('mx-auto max-w-8xl px-6', className)}>
    {children}
  </div>
);

export default Container;
