import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactInfo() {
  const info = [
    {
      icon: <Phone />,
      title: "Phone",
      value: "+91 XXXXX XXXXX",
    },
    {
      icon: <Mail />,
      title: "Email",
      value: "contact@advocate.com",
    },
    {
      icon: <MapPin />,
      title: "Office",
      value: "Mumbai, Maharashtra",
    },
  ];

  return (
    <div className="space-y-6">
      {info.map((item) => (
        <div
          key={item.title}
          className="border border-slate-800 rounded-2xl p-6"
        >
          <div className="text-[var(--secondary)]">
            {item.icon}
          </div>

          <h3 className="mt-4 text-xl font-semibold">
            {item.title}
          </h3>

          <p className="text-slate-400 mt-2">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}