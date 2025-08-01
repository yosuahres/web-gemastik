import Link from 'next/link';

const LandingPage = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/backgroundlanding.jpeg')" }}
    >
      <div className="absolute top-4 right-4 space-x-4 z-20">
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
      <div className="relative z-10 flex flex-col items-start justify-center h-full text-white p-8 md:p-16">
        <h1 className="text-6xl font-bold mb-4">Stay Healthy</h1>
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
