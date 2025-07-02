import { ReusableDialog } from "./reusable-dialog";

interface ShowsDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ShowsDialog({ isOpen, onClose }: ShowsDialogProps) {
  return (
    <ReusableDialog isOpen={isOpen} onClose={onClose} title="SHOWS">
      <div className="text-center py-8">
        <p className="text-white/60 text-sm letter-spacing-ultra">
          NO UPCOMING SHOWS
        </p>
      </div>
    </ReusableDialog>
  );
}