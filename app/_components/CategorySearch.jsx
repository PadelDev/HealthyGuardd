import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';

function CategorySearch() {
  return (
    <div className='mb-10 items-center flex flex-col gap-6'>
      <h2 className='font-bold text-4xl tracking-wide'>
        Search <span className='text-primary'>Doctors</span>
      </h2>
      <h2 className='text-gray-500 text-xl'>
        Search Your Doctor and Book Appointment in one touch
      </h2>

      {/* Search Input */}
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Search.." />
        <Button type="submit">
          <Search className='h-4 w-4 mr-2' />
          Search
        </Button>
      </div>

    {/* Categories */}
<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-6'>
  {/* Consultasi Doctor */}
  <Button className='flex flex-col items-center p-4 69A662 hover:bg-blue-200 rounded-lg min-h-[120px]'>
    <img src="/consultasi.png" alt="Consultasi Doctor" className='h-12 w-12 mb-2' />
    <span className='text-center text-sm'>Consultasi Doctor</span>
  </Button>

  {/* ChatAI */}
  <Button className='flex flex-col items-center p-4 69A662 hover:bg-blue-200 rounded-lg min-h-[120px]'>
    <img src="/chatAI.png" alt="ChatAI" className='h-12 w-12 mb-2' />
    <span className='text-center text-sm'>ChatAI</span>
  </Button>

  {/* Analisis Nutrisi */}
  <Button className='flex flex-col items-center p-4 69A662 hover:bg-blue-200 rounded-lg min-h-[120px]'>
    <img src="nutrisi.png" alt="Analisis Nutrisi" className='h-16 w-16 mb-2' />
    <span className='text-center text-sm'>Analisis Nutrisi</span>
  </Button>

  {/* Personalized Medicine */}
  <Button className='flex flex-col items-center p-4 69A662 hover:bg-blue-200 rounded-lg min-h-[120px]'>
    <img src="medicine.png" alt="Personalized Medicine" className='h-12 w-12 mb-2' />
    <span className='text-center text-sm'>Personalized Medicine</span>
  </Button>

  {/* Prediksi Biaya */}
  <Button className='flex flex-col items-center p-4 69A662 hover:bg-blue-200 rounded-lg min-h-[120px]'>
    <img src="cost.png" alt="Prediksi Biaya" className='h-12 w-12 mb-2' />
    <span className='text-center text-sm'>Prediksi Biaya</span>
  </Button>

  {/* Artikel */}
  <Button className='flex flex-col items-center p-4 69A662 hover:bg-blue-200 rounded-lg min-h-[120px]'>
    <img src="article.png" alt="Artikel" className='h-12 w-12 mb-2' />
    <span className='text-center text-sm'>Artikel</span>
  </Button>

      </div>
    </div>
  );
}

export default CategorySearch;
