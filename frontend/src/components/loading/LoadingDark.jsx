import ReactLoading from "react-loading";
const LoadingDark = ({ height = 50, width = 50 }) => {
  return (
    <div className="min-h-screen w-full flex justify-center flex-col items-center">
      <ReactLoading type={"cubes"} color={"#101920"} height={height} width={width} />
      <small className="text-base font-medium">Please wait</small>
    </div>
  );
};

export default LoadingDark;
