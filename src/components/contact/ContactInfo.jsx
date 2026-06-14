import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactInfo() {
  const info = [
    {
      icon: <Phone size={22} />,
      title: "Phone",
      value: "+91 XXXXX XXXXX",
    },
    {
      icon: <Mail size={22} />,
      title: "Email",
      value: "contact@advocate.com",
    },
    {
      icon: <MapPin size={22} />,
      title: "Office",
      value: "Mumbai, Maharashtra",
    },
  ];

  return (
    <div className="space-y-6">

      {info.map((item) => (
        <div
          key={item.title}
          className="
            bg-white
            border
            border-gray-200
            rounded-2xl
            p-6
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-lg
          "
        >
          <div
            className="
              w-12
              h-12
              rounded-xl
              bg-[#C9A227]/10
              text-[#C9A227]
              flex
              items-center
              justify-center
            "
          >
            {item.icon}
          </div>

          <h3 className="mt-4 text-xl font-semibold text-black">
            {item.title}
          </h3>

          <p className="text-gray-600 mt-2">
            {item.value}
          </p>
        </div>
      ))}

    </div>
  );
}