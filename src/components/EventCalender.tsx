"use client";
import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "Diwali",
    time: "10:00 AM - 11:00 AM",
    description: "Diwali is a festival of lights and flowers",
  },
  {
    id: 2,
    title: "Holi",
    time: "10:00 AM - 12:00 PM",
    description: "Holi is a festival of lights and flowers",
  },
  {
    id: 3,
    title: "Dashahara",
    time: "10:00 PM - 11:00 PM",
    description: "DiwaDashaharali is a festival of lights and flowers",
  },
];
const EventCalender = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-devSky even:border-t-devPurple"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-xs text-gray-300">{event.time}</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalender;
