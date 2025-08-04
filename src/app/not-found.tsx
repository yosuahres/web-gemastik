import Link from "next/link";
import NextImage from "@/components/NextImage";
import Typography from "@/components/Typography";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <div className="w-1/2 md:w-1/3 lg:w-1/4 h-auto relative">
        <NextImage
          src="/images/NotFound.png"
          alt="Not Found"
          className="object-contain"
          fill
        />
      </div>
      <Typography variant="h2" className="mt-8">
        Page Not Found
      </Typography>
      <Typography variant="p" className="mt-4">
        The page you are looking for does not exist.
      </Typography>
      <Link
        href="/"
        className="mt-8 px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
