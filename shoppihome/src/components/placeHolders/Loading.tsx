const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative w-16 h-16">
        <div className="absolute w-full h-full border-4 border-transparent border-t-teal-500 rounded-full animate-spin"></div>
        <div className="absolute w-full h-full border-4 border-transparent border-r-emerald-500 rounded-full animate-spin-reverse"></div>
        <div className="absolute w-full h-full border-4 border-transparent border-b-indigo-500 rounded-full animate-spin-slower"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
