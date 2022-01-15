import classNames from 'classnames';

interface ButtonProps {
  children: React.ReactNode,
  className?: string,
  onClick: (event?: React.MouseEvent) => void,
  variant: 'circle',
}

const Button = ({ children, className = '', onClick, variant }: ButtonProps) => {
  const buttonClasses = classNames({
    'foo': variant === 'circle',
  }, className);

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
