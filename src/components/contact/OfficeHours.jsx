export default function OfficeHours() {
  return (
    <div
      className="
        bg-white
        border
        border-gray-200
        rounded-3xl
        p-8
        mt-8
        shadow-sm
      "
    >
      <h3 className="text-2xl font-semibold text-black">
        Office Hours
      </h3>

      <div className="mt-6 space-y-4">

        <div className="flex justify-between items-center border-b border-gray-100 pb-3">
          <span className="text-gray-700">
            Monday - Friday
          </span>

          <span className="font-medium text-black">
            10:00 AM - 7:00 PM
          </span>
        </div>

        <div className="flex justify-between items-center border-b border-gray-100 pb-3">
          <span className="text-gray-700">
            Saturday
          </span>

          <span className="font-medium text-black">
            10:00 AM - 4:00 PM
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-700">
            Sunday
          </span>

          <span className="font-medium text-red-500">
            Closed
          </span>
        </div>

      </div>
    </div>
  );
}