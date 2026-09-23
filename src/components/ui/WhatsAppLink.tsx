import { MessageCircle } from "lucide-react";
import { site } from "../../lib/content";
import { Button } from "./Button";

export function WhatsAppLink({ className = "" }: { className?: string }) {
  return (
    <Button
      variant="ghost"
      className={className}
      onClick={() => {
        if (site.whatsapp) window.open(site.whatsapp, "_blank", "noopener,noreferrer");
      }}
    >
      <MessageCircle size={16} className="text-emerald-400" />
      Chat on WhatsApp
    </Button>
  );
}
