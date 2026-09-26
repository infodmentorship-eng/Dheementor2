import { Globe } from "lucide-react";
import { home } from "../../lib/content";

// hexagon vertices (percent of the container), clockwise starting at the top —
// matches the order of home.topDestinationsOrbit.countries
const POSITIONS = [
  { top: "4%", left: "50%" }, // UK
  { top: "26%", left: "88%" }, // USA
  { top: "74%", left: "88%" }, // Canada
  { top: "96%", left: "50%" }, // Europe
  { top: "74%", left: "12%" }, // Russia
  { top: "26%", left: "12%" }, // Australia
];

const FLAG_SIZE = "h-[clamp(56px,9vw,90px)] w-[clamp(56px,9vw,90px)]";

export function TopDestinationsOrbit() {
  const { topDestinationsOrbit } = home;

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      <div className="absolute left-1/2 top-1/2 flex h-[clamp(130px,20vw,190px)] w-[clamp(130px,20vw,190px)] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2 rounded-full border border-border bg-surface-2 text-center">
        <Globe size={28} className="text-orange" />
        <span className="px-4 text-sm font-bold leading-tight text-text">
          {topDestinationsOrbit.centerLabel}
        </span>
      </div>

      {topDestinationsOrbit.countries.map((country, i) => {
        const pos = POSITIONS[i];
        return (
          <div
            key={country.name}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2"
            style={{ top: pos.top, left: pos.left }}
          >
            <span className={`overflow-hidden rounded-full border-2 border-border-strong shadow-lg ${FLAG_SIZE}`}>
              <img
                src={`https://flagcdn.com/w160/${country.code}.png`}
                alt={country.name}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </span>
            <span className="whitespace-nowrap rounded-full bg-surface-2 px-3 py-1 text-xs font-semibold text-text">
              {country.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}
