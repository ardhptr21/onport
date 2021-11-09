import ReactLoading from "react-loading";
const LoadingDark = ({ height = 50, width = 50 }) => {
  return (
    <div className="min-h-screen w-full flex justify-center flex-col items-center">
      <ReactLoading type={"cubes"} color={"#fff"} height={height} width={width} />
      <small className="text-base font-medium text-white">Please wait</small>
    </div>
  );
};

export default LoadingDark;
