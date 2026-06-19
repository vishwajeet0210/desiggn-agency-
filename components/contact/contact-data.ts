import { Mail, Phone, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ContactItem {
  icon: LucideIcon;
  title: string;
  value: string;
}

export const contactInfo: ContactItem[] = [
  {
    icon: Mail,
    title: "Email",
    value: "desiggn2026@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 9060111665",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Delhi,India",
  },
];