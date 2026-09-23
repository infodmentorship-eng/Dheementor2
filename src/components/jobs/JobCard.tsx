import { Briefcase, Clock, MapPin, Wallet } from "lucide-react";
import { Link } from "react-router-dom";
import type { JobListing } from "../../lib/content";
import { Button } from "../ui/Button";

export function JobCard({ job }: { job: JobListing }) {
  return (
    <div className="flex h-full flex-col rounded-card border border-border bg-surface p-7 transition-colors duration-200 hover:border-orange/40">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-bold text-text">{job.title}</h3>
        <span className="whitespace-nowrap font-mono text-xs text-text-dim">
          {job.postedDaysAgo}d ago
        </span>
      </div>

      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-text-muted">
        <span className="flex items-center gap-1.5">
          <MapPin size={14} />
          {job.location}
        </span>
        <span className="flex items-center gap-1.5">
          <Briefcase size={14} />
          {job.type}
        </span>
        <span className="flex items-center gap-1.5">
          <Wallet size={14} />
          {job.salary}
        </span>
      </div>

      <p className="mt-4 text-sm leading-[1.6] text-text-muted">{job.description}</p>

      <p className="mt-3 text-xs leading-[1.6] text-text-dim">
        <span className="font-semibold text-text-muted">Requirements: </span>
        {job.requirements}
      </p>

      <div className="mt-6 flex items-center justify-between gap-3 border-t border-border pt-5">
        <span className="flex items-center gap-1.5 text-xs text-text-dim">
          <Clock size={13} />
          Posted {job.postedDaysAgo}d ago
        </span>
        <Link to="/contact">
          <Button className="px-5! py-2.5! text-sm">Apply Now</Button>
        </Link>
      </div>
    </div>
  );
}
