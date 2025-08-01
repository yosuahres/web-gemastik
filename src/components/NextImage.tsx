import Image, { ImageProps } from 'next/image';

const NextImage = ({ src, alt, className, ...props }: ImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      style={{ objectFit: 'cover' }}
      className={className}
      {...props}
    />
  );
};

export default NextImage;
