import { Button } from "@/components/ui/button";
import React from "react";
import "../globals.css";

function Hero() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt=""
              src="doktor.jpg"
              width={800}
              height={800}
              className="absolute inset-0 h-full
            rounded-3xl
            w-full object-cover"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Modern Health Solutions in Your Hands
              <span className="text-primary"> Appointment </span>
              With your Fav
              <span className="text-primary"> Doctors</span>
            </h2>

            <p className="mt-4 text-gray-600">
              Nutrition services and consultations with the best doctors in
              Indonesia Enjoy integrated health services with advanced features:
              <br></br>Nutritional Analysis: Find nutritional needs according to
              your symptoms.
              <br></br>Personalized Medicine: Healthy lifestyle advice and early
              diagnosis.
              <br></br> Cost Prediction: Plan your finances with estimated
              medical costs.
            </p>
            <Button className="mt-10">Explore Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
