const Footer = () => {
  return (
    <footer className="bg-transparent text-white p-4 text-center">
      <div className="container mx-auto">
        <p>
          &copy; {new Date().getFullYear()} AnxietyHelp. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
