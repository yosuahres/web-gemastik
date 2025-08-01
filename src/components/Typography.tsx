import React from 'react';

type TypographyProps = {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  children: React.ReactNode;
  className?: string;
};

const Typography = ({
  variant = 'p',
  children,
  className = '',
}: TypographyProps) => {
  const Component = variant;
  const classes = {
    h1: 'text-6xl font-bold',
    h2: 'text-4xl font-bold',
    h3: 'text-2xl font-bold',
    h4: 'text-xl font-bold',
    p: 'text-base',
    span: '',
  };

  return (
    <Component className={`${classes[variant]} ${className}`}>
      {children}
    </Component>
  );
};

export default Typography;
