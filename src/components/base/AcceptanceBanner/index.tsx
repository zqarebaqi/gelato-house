type Props = {};

const AcceptanceBanner = ({}: Props) => {
  return (
    <div className="bg-primary-500 text-white text-center py-2 flex justify-center items-center">
      <div className=" flex items-center justify-center animate-pulse relative ml-2">
        <div className=" bg-green-400 w-5 h-5 opacity-15 rounded-full  " />
        <div className=" bg-green-500 w-3 h-3 rounded-full z-10 absolute" />
      </div>

      <h6 className="text-sm">سفارش میپذیریم</h6>
    </div>
  );
};

export default AcceptanceBanner;
