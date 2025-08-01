import Link from 'next/link';
import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';

const LandingPage = () => {
  return (
    <div className="relative h-screen">
      <NextImage
        src="/images/backgroundlanding.jpeg"
        alt="background"
        className="absolute inset-0 w-full h-full"
      />
      <div className="absolute top-4 right-4 space-x-4 z-30">
        <Link
          href="/login"
          className="bg-white text-black px-4 py-2 rounded-md"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="bg-gray-200 text-black px-4 py-2 rounded-md"
        >
          Register
        </Link>
      </div>
      <div className="relative z-20 flex flex-col items-start justify-center h-full text-white p-8 md:p-16">
        <Typography variant="h1" className="mb-4">
          Stay Healthy
        </Typography>
        <Link
          href="/register"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          GET STARTED
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
