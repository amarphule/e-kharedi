const Shimmer = () => {
  return (
    <div className="h-2/4 m-4 w-72">
      <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
        <div className="lg:h-48 bg-gray-400 md:h-36 w-full object-cover object-center"></div>
        <div className="p-6">
          <p className="bg-gray-400 animate-pulse h-4 w-1/4 mb-2"></p>
          <p className="w-1/2 mb-4 h-6 animate-pulse bg-gray-500"></p>
          <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></p>
          <p className="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400"></p>
          <p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400"></p>
          <div className="flex items-center flex-wrap ">
            <span className="bg-indigo-300 rounded-full h-8 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0"></span>
            <span className="bg-indigo-300 w-16 mt-2 h-5 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
