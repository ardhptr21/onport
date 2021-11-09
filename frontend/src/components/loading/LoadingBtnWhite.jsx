import ReactLoading from "react-loading";

const LoadingBtnWhite = ({ width = 30, height = 30 }) => {
  return (
    <div className="flex justify-center items-center">
      <ReactLoading type={"cylon"} color={"#fff"} width={width} height={height} />
    </div>
  );
};

export default LoadingBtnWhite;
