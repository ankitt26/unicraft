import PropTypes from "prop-types";

export default function Button({ variant, text }) {
  const commonClasses =
    "inline-flex items-center justify-center gap-2.5 rounded-lg border border-gray-600 py-4 shadow-md font-bold tracking-[-0.48px]";

  const styles = {
    normal_sm: `bg-inherit h-[50px] text-gray-600 text-lg px-[34px] hover:text-gray-50 hover:bg-gray-800 sm:h-10 sm:px-[20px]`,

    normal: `w-[273px] bg-inherit h-[60px] text-gray-600 text-xl px-[51px] hover:text-gray-50 hover:bg-gray-800`,

    dark: `bg-gray-800 h-[60px] text-gray-50 text-xl px-[51px] hover:text-gray-600 hover:bg-inherit`,
  };

  const buttonclass = styles[variant] || styles.normal;

  return <button className={` ${buttonclass} ${commonClasses}`}>{text}</button>;
}

Button.propTypes = {
  variant: PropTypes.oneOf(["normal_sm", "normal", "dark"]),
  text: PropTypes.string.isRequired,
};
