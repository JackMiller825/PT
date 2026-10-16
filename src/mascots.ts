import { asset } from "./config";

export type Mascot = {
  id: string;
  src: string;
  alt: string;
};

const files = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"] as const;

export const mascots: Mascot[] = files.map((id) => ({
  id,
  src: asset(`mascot/${id}.webp`),
  alt: `The Pointer, jersey 8, pointing — angle ${id}`,
}));

/** Clearest straight-at-the-camera call. File 03. */
export const leadMascot = mascots[2];

/** Replay order: strongest pointing poses first, then the other likenesses. */
export const replayOrder = [2, 0, 3, 6, 7, 4, 5, 1, 8, 9].map((index) => mascots[index]);
