import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <img
        src="/images/NotFound.png"
        alt="Not Found"
        className="w-1/2 md:w-1/3 lg:w-1/4"
      />
      <h1 className="text-4xl font-bold mt-8">Page Not Found</h1>
      <p className="text-lg mt-4">
        The page you are looking for does not exist.
      </p>
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
