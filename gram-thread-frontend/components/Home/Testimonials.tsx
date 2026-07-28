import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto py-14 px-4">
      <h2 className="text-4xl font-bold  mb-10">
        What People Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div className="bg-[#faf8f5] rounded-2xl p-6 shadow-lg">
          <div className="flex items-center gap-4">
            <img
              src="user1.jpg"
              alt="Sarah"
              className="w-14 h-14 rounded-full object-cover"
            />

            <div>
              <h3 className="font-semibold text-lg">Sarah Mitchell</h3>

              <div className="flex gap-1 mt-1">
                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                <Star size={16} className="fill-yellow-400 text-yellow-400" />
              </div>
            </div>
          </div>

          <p className="mt-5 text-gray-600">
            Amazing quality! The fabric feels premium and the fit is perfect.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#faf8f5] rounded-2xl p-6 shadow-lg">
          <div className="flex items-center gap-4">
            <img
              src="user2.jpg"
              alt="James"
              className="w-14 h-14 rounded-full object-cover"
            />

            <div>
              <h3 className="font-semibold text-lg">James Carter</h3>

              <div className="flex gap-1 mt-1">
                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                <Star size={16} className="fill-yellow-400 text-yellow-400" />
              </div>
            </div>
          </div>

          <p className="mt-5 text-gray-600">
            Fast delivery and excellent quality. Highly recommended.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#faf8f5] rounded-2xl p-6 shadow-lg">
          <div className="flex items-center gap-4">
            <img
              src="user3.jpg"
              alt="Emily"
              className="w-14 h-14 rounded-full object-cover"
            />

            <div>
              <h3 className="font-semibold text-lg">Emily Watson</h3>

              <div className="flex gap-1 mt-1">
                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                <Star size={16} className="fill-yellow-400 text-yellow-400" />
              </div>
            </div>
          </div>

          <p className="mt-5 text-gray-600">
            Comfortable, stylish and worth every penny.
          </p>
        </div>

      </div>
    </section>
  );
}