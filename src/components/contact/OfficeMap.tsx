import { site } from "../../lib/content";

export function OfficeMap() {
  const query = encodeURIComponent(site.address);

  return (
    <div className="overflow-hidden rounded-card border border-border">
      <iframe
        title="Dhee Mentorship office location"
        src={`https://www.google.com/maps?q=${query}&output=embed`}
        width="100%"
        height="440"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
