function Loader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
      <div className="loader"></div>

      {/* <div className="flex animate-bounce gap-2">
        <p className="h-4 w-4 rounded-full bg-red-500"></p>
        <p className="h-4 w-4 rounded-full bg-red-500"></p>
        <p className="h-4 w-4 rounded-full bg-red-500"></p>
      </div> */}
    </div>
  );
}

export default Loader;
