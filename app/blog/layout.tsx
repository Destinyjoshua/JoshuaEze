import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing • Joshua Eze",
  description: "Frameworks and honest reflections on business strategy, African contexts, and building under real constraints.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
