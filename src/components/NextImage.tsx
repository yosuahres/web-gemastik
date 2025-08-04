import Image, { ImageProps } from "next/image";

const NextImage = ({ src, alt, className, ...props }: ImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      unoptimized
      {...props}
    />
  );
};

export default NextImage;
