"use client";

import { Calendar, Clock, MapPin } from "lucide-react";

function TrainingSchedule() {
  const schedules = [
    {
      day: "Tuesday",
      arts: "All Levels",
      time: "18:00 - 19:45",
      location: "UVIC - CARSA Fieldhouse 2B",
    },
    {
      day: "Thursday",
      arts: "Advanced Class",
      time: "18:00 - 20:00",
      location: "Beacon Hill All Weather Fields",
    },
    {
      day: "Friday",
      arts: "All Levels",
      time: "18:30 - 20:00",
      location: "UVIC - CARSA Fieldhouse 2B",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {schedules.map((item, idx) => (
        <div
          key={idx}
          className="bg-stone-50 p-8 rounded-3xl border border-stone-200 hover:border-gold-600/40 hover:bg-white hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group relative overflow-hidden shadow-sm"
        >
          <div className="flex items-center gap-2 text-gold-600 mb-4">
            <Calendar size={20} />
            <span className="font-bold text-sm uppercase tracking-widest">
              {item.day}
            </span>
          </div>
          <h4 className="text-xl text-budokai-dark transition-colors h-14 line-clamp-2">
            {item.arts}
          </h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-md">
              <Clock size={16} />
              <span>{item.time}</span>
            </div>
            <div className="flex items-center gap-2 text-md">
              <MapPin size={16} />
              <span>{item.location}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function TrainingSection() {
  return (
    <section id="training" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl text-budokai-dark italic mb-6">
            Class Schedule
          </h2>
          <p className="text-stone-600 text-lg italic">
            "A thousand miles begins with a single step." Join us in the Dojo.
          </p>
        </div>
        <TrainingSchedule />
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-stone-800 italic text-md border-t border-stone-100 pt-12">
            Classes available for all ages and skill levels. First trial class
            is always free.
          </p>
        </div>
      </div>
    </section>
  );
}
