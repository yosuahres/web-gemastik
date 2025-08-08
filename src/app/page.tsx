import Link from "next/link";
import NextImage from "@/components/NextImage";
import Typography from "@/components/Typography";

const LandingPage = () => {
  return (
    <div className="relative h-screen">
      <NextImage
        src="/images/background3.png"
        alt="background"
        width={900}
        height={593}
        className="absolute inset-0 w-full h-full object-cover -z-10"
        priority
      />
      <div className="relative z-20 flex flex-col items-start justify-center h-full text-white p-8 md:p-16">
        <Typography variant="h1" className="mb-4">
          Maintain your Corps!
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
