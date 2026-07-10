import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Frameworks and honest reflections on business strategy, African contexts, and building under real constraints.",
  alternates: {
    canonical: "https://joshuaeze.com/blog",
  },
  openGraph: {
    title: "Writing • Joshua Eze",
    description:
      "Frameworks and honest reflections on business strategy, African contexts, and building under real constraints.",
    url: "https://joshuaeze.com/blog",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
