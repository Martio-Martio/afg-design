import blue_round from "/blue_round.png";
import Line from "/line.png";
import white_round from "/white_round.png";

export const BarStatus = () => {
  return (
    <div className="ml-5 ">
      <img src={Line} className="object-contain w-16 h-20 " alt="Line" />
      <img
        src={blue_round}
        className="object-contain w-6 h-10 ml-5 animation-pulse "
        alt="Line"
      />
      <img src={Line} className="object-contain w-16 h-20 " alt="Line" />
      <img
        src={white_round}
        className="object-contain w-6 h-10 ml-5 animation-pulse"
        alt="Line"
      />
      <img src={Line} className="object-contain w-16 h-20 " alt="Line" />
      <img
        src={white_round}
        className="object-contain w-6 h-10 ml-5 animation-pulse"
        alt="Line"
      />
      <img src={Line} className="object-contain w-16 h-20 " alt="Line" />
    </div>
  );
};
