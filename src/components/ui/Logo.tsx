import { Link } from "react-router-dom";
import logoUrl from "../../assets/Dhe_Logo.svg";

export function Logo({ className = "h-10" }: { className?: string }) {
  return (
    <Link to="/" className="flex items-center">
      <img src={logoUrl} alt="Dhee Mentorship — Your attitude determines your direction" className={className} />
    </Link>
  );
}
