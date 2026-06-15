import fs from "fs";
import path from "path";

export type OnXThread = {
  url: string;
  title: string;
  date: string;
  note?: string;
};

type OnXData = {
  threads: OnXThread[];
};

const dataPath = path.join(process.cwd(), "content/on-x/threads.json");

export function getOnXThreads(): OnXThread[] {
  const raw = fs.readFileSync(dataPath, "utf8");
  const data = JSON.parse(raw) as OnXData;

  return data.threads.sort((a, b) => (a.date < b.date ? 1 : -1));
}