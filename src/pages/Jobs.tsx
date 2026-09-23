import { useMemo, useState } from "react";
import { JobCard } from "../components/jobs/JobCard";
import { FinalCta } from "../components/FinalCta";
import { PageHero } from "../components/ui/PageHero";
import { Reveal } from "../components/ui/Reveal";
import { jobs } from "../lib/content";

function countryOf(location: string) {
  return location.split(",").pop()?.trim() ?? location;
}

export function Jobs() {
  const countries = useMemo(() => {
    const seen = new Set<string>();
    jobs.listings.forEach((job) => seen.add(countryOf(job.location)));
    return ["All", ...seen];
  }, []);

  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? jobs.listings : jobs.listings.filter((job) => countryOf(job.location) === filter);

  return (
    <>
      <PageHero
        eyebrow={jobs.hero.eyebrow}
        headingLines={jobs.hero.headingLines as [string, string]}
        description={jobs.hero.description}
      />

      <section className="relative mx-auto max-w-7xl px-6 pb-[clamp(80px,12vh,160px)]">
        <Reveal className="flex flex-wrap items-center justify-center gap-2">
          {countries.map((country) => (
            <button
              key={country}
              onClick={() => setFilter(country)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-200 ${
                filter === country
                  ? "bg-orange text-white"
                  : "border border-border-strong text-text-muted hover:text-text"
              }`}
            >
              {country}
            </button>
          ))}
        </Reveal>

        {filtered.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((job, i) => (
              <Reveal key={job.title} delay={(i % 3) * 0.08}>
                <JobCard job={job} />
              </Reveal>
            ))}
          </div>
        ) : (
          <p className="mt-16 text-center text-text-muted">{jobs.emptyState}</p>
        )}
      </section>

      <FinalCta
        heading={jobs.closing.heading}
        subtext={jobs.closing.description}
        ctaPrimary={jobs.closing.ctaPrimary}
        showWhatsApp
      />
    </>
  );
}
