import React from "react";

function DoctorList() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Jane Cooper",
      specialty: "Jantung",
      experience: "30 Years",
      address: "547 Carrington Trace Drive, Cornelius",
      image: "doctor1.jpg", // Ganti sesuai gambar Anda
    },
    {
      id: 2,
      name: "Dr. Tom Cook",
      specialty: "Kanker",
      experience: "20 Years",
      address: "547 Carrington Trace Drive, Cornelius",
      image: "doctor2.jpg", // Ganti sesuai gambar Anda
    },
    {
      id: 3,
      name: "Dr. Harry Potter",
      specialty: "Nutrisi",
      experience: "20 Years",
      address: "547 Carrington Trace Drive, Cornelius",
      image: "doctor3.jpg", // Ganti sesuai gambar Anda
    },
    {
      id: 4,
      name: "Dr. Swadhin Dhakne",
      specialty: "Tulang",
      experience: "34 Years",
      address: "Near Govt Office, Talegon Pune, India",
      image: "doctor4.jpg", // Ganti sesuai gambar Anda
    },
    {
      id: 5,
      name: "Dr. Hidayah Muhammad Fadillah",
      specialty: "Stroke",
      experience: "34 Years",
      address: "Near Govt Office, Talegon Pune, India",
      image: "doctor5.jpg", // Ganti sesuai gambar Anda
    },
    {   
      id: 6,
      name: "Dr. Naruto Uzumaki",
      specialty: "Mata",
      experience: "34 Years",
      address: "Near Govt Office, Talegon Pune, India",
      image: "doctor6.jpg", // Ganti sesuai gambar Anda
    },
  ];

  return (
    <div className="px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">Popular Doctors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {doctors.map((doctor, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-lg p-4 bg-white flex flex-col items-center"
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              className="h-40 w-40 rounded-full mb-4 object-cover"
            />
            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-lg mb-2">
              {doctor.specialty}
            </span>
            <h3 className="font-semibold text-lg">{doctor.name}</h3>
            <p className="text-blue-500 font-medium">{doctor.experience}</p>
            <p className="text-gray-500 text-sm text-center">
              {doctor.address}
            </p>
            <button className="mt-4 px-6 py-2 border rounded-md text-blue-500 border-green-500 hover:bg-green-500 hover:text-white transition-colors">
              Book Now
            </button>
            <button className="mt-4 px-6 py-2 border rounded-md text-blue-500 border-green-500 hover:bg-green-500 hover:text-white transition-colors">
              Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorList;
