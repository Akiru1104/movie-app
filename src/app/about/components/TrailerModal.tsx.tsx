"use client";

import YouTube from "react-youtube";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  videoId: string | null;
};

export default function TrailerModal({ open, onOpenChange, videoId }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl p-0 overflow-hidden">
        <VisuallyHidden>
          <DialogTitle>Trailer</DialogTitle>
        </VisuallyHidden>

        {videoId && (
          <YouTube
            videoId={videoId}
            opts={{
              width: "100%",
              height: "520",
              playerVars: { autoplay: 1 },
            }}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
