import PropTypes from "prop-types";

export default function Workdetail(props) {
  const { num, head, para } = props;

  return (
    <div className="tab:basis-0 flex h-[230px] basis-1/3 flex-col items-center justify-end">
      <div className="relative top-[178px] z-0 h-auto w-auto text-[240px] font-bold text-transparent">
        <span className="bg-gradient-to-b from-purple-300 to-purple-50 bg-clip-text ">
          {num}
        </span>
      </div>
      <div className="z-10 text-[40px] font-black text-gray-800">{head}</div>
      <p className="z-10 max-w-[300px] break-words text-center text-lg font-medium leading-normal tracking-tight text-gray-500">
        {para}
      </p>
    </div>
  );
}

Workdetail.propTypes = {
  num: PropTypes.number.isRequired,
  head: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
};
