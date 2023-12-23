import PropTypes from "prop-types";

import Tick400 from "../../assets/ticks/tick_400.svg";
import Tick800 from "../../assets/ticks/tick_800.svg";
import TickWhite from "../../assets/ticks/tick_white.svg";
import { NormalThemeColors, DarkThemeColors } from "./theme";

export default function Plans({ name, para, cost, access, mode }) {
  const theme = mode === "dark" ? DarkThemeColors : NormalThemeColors;

  return (
    <div
      className={`flex h-[640px] flex-col items-start justify-start gap-10 rounded-2xl border ${theme.border} ${theme.sectionBackground} px-6 py-10 shadow-xl sm:px-4`}
    >
      <div
        className={`inline-flex h-[249px] w-[330.67px] flex-col items-start justify-start gap-5`}
      >
        <div className="flex h-[85px] flex-col items-start justify-start gap-[11px] self-stretch">
          <h4 className={`self-stretch text-[22px] font-bold ${theme.heading}`}>
            {name}
          </h4>
          <p className={`h-[44px] text-base font-medium ${theme.paragraph}`}>
            {para}
          </p>
        </div>

        <div
          className={`inline-flex h-[76px] w-[330.67px] items-center justify-start gap-2 `}
        >
          <div className={`text-[56px] font-medium ${theme.price}`}>
            ${cost}
          </div>
          <div className={`text-base font-normal ${theme.month}`}>/ Month</div>
        </div>
        <button
          className={` inline-flex h-11 w-[330.67px] items-center justify-center gap-1 rounded-lg border px-3 py-1.5 text-center text-base font-bold shadow-md ${theme.buttonBorder} ${theme.buttonBackground} ${theme.buttonText} hover:border-white hover:bg-gray-800 hover:text-gray-50 `}
          role="button"
        >
          Get Started Now
        </button>
      </div>

      <div
        className={`flex h-[280px] w-[331px] flex-col items-start justify-start gap-3`}
      >
        <Features access={access} mode={mode} />
      </div>
    </div>
  );
}

// features for plans //

const Features = ({ access, mode }) => {
  let acc = parseInt(access, 10);
  const Tickchange = mode === "dark" ? TickWhite : Tick800;
  const Colorchange = mode === "dark" ? "text-gray-50" : "text-gray-800";
  const allFeatures = [
    "20,000+ of PNG & SVG graphics",
    "Access to 100 million stock images",
    "Upload custom icons and fonts",
    "Unlimited Sharing",
    "Upload graphics & video in up to 4k",
    "Unlimited Projects",
    "Instant Access to our design system",
    "Create teams to collaborate on designs",
  ];
  return allFeatures.map((fea, index) => {
    acc--;
    return (
      <div
        className="flex flex-row justify-start gap-2 leading-normal"
        key={index}
      >
        <img src={acc >= 0 ? Tickchange : Tick400} alt="tick" />
        <p
          className={`w-[302.67px] text-base font-medium ${
            acc >= 0 ? Colorchange : "text-gray-400"
          }`}
        >
          {fea}
        </p>
      </div>
    );
  });
};

Plans.propTypes = {
  name: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired,
  access: PropTypes.number.isRequired,
  mode: PropTypes.string.isRequired,
};
