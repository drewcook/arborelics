'use client';

import { ReusableDialog } from "./reusable-dialog";

interface Event {
  title: string;
  date: string;
  venue: string;
  time: string;
}

const EVENTS: Event[] = [
  // {
  //   title: "Club Night - Friday",
  //   date: '07/04/2025',
  //   venue: "Electronic Underground",
  //   time: "9 PM - 2 AM"
  // },
  // {
  //   title: "Festival - Saturday",
  //   date: '07/05/2025',
  //   venue: "Main Stage",
  //   time: "8 PM - 9 PM"
  // }
];

interface ShowItemProps {
  event: Event;
}

function ShowItem({ event }: ShowItemProps) {
  return (
    <div className="p-4 bg-white/5 rounded-lg border border-white/10">
      <h3 className="font-semibold text-white mb-2">{event.title}</h3>
      <p className="text-sm text-white/60 mb-1">{event.venue}</p>
      <p className="text-sm text-white/60 mb-1">{event.date}</p>
      <p className="text-sm text-white/60">{event.time}</p>
    </div>
  );
}

interface ShowsDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ShowsDialog({ isOpen, onClose }: ShowsDialogProps) {
  return (
    <ReusableDialog
      isOpen={isOpen}
      onClose={onClose}
      title="UPCOMING SHOWS"
    >
      <div className="space-y-4">
        {EVENTS.length === 0 ? (
          <p className="text-white/80 text-center py-8">No upcoming shows</p>
        ) : (
          EVENTS.map((event, index) => (
            <ShowItem key={index} event={event} />
          ))
        )}
      </div>
    </ReusableDialog>
  );
}