export default function OfficeHours() {
  return (
    <div className="border border-slate-800 rounded-3xl p-8 mt-8">
      <h3 className="text-2xl font-semibold">
        Office Hours
      </h3>

      <div className="mt-6 space-y-4 text-slate-400">
        <div className="flex justify-between">
          <span>Monday - Friday</span>
          <span>10:00 AM - 7:00 PM</span>
        </div>

        <div className="flex justify-between">
          <span>Saturday</span>
          <span>10:00 AM - 4:00 PM</span>
        </div>

        <div className="flex justify-between">
          <span>Sunday</span>
          <span>Closed</span>
        </div>
      </div>
    </div>
  );
}