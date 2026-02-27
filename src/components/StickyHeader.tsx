import { useEffect, useState } from "react";
import { Button } from "@cloudflare/kumo";

const SUBMIT_URL =
  "https://github.com/slopforks/slopforks/issues/new?template=submit-slop.yml";

export default function StickyHeader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("hero-end");
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { rootMargin: "0px 0px 0px 0px" }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed top-0 right-0 left-0 z-50 border-b border-kumo-line bg-kumo-base/80 backdrop-blur-md transition-all duration-300 ${
        visible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-3">
        <span className="font-serif text-lg font-bold text-kumo-default">
          slop forks
        </span>
        <a href={SUBMIT_URL} target="_blank" rel="noopener noreferrer">
          <Button variant="secondary" size="sm">
            Submit Slop
          </Button>
        </a>
      </div>
    </div>
  );
}
