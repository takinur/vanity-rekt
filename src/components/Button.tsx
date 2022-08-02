import React from 'react';

// interface to declare all our prop types
interface Props {
  children: React.ReactNode;
  onClick: () => void;
  className?: string, //Custom class or button classes  / default, primary, info, success, warning, danger, dark sm, md, lg
  disabled?: boolean;
}

// button component, consuming props
const Button: React.FC<Props> = ({
  children,
  onClick,
  className,
  disabled,
  ...rest
}) => {
  return (
    <button
      type='submit'
      className={className + (disabled ? ' disabled' : '')}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;