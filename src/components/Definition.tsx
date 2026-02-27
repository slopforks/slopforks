import { Button } from "@cloudflare/kumo";

const SUBMIT_URL =
  "https://github.com/slopforks/slopforks/issues/new?template=submit-slop.yml";

export default function Definition() {
  return (
    <header className="mx-auto max-w-4xl px-6 pt-20 pb-16">
      <h1 className="font-serif text-6xl font-bold tracking-tight text-kumo-default sm:text-7xl">
        slop forks
      </h1>
      <p className="mt-2 font-serif text-lg tracking-wide text-kumo-subtle italic">
        [släp-fȯrks]
      </p>
      <p className="mt-1 text-sm text-kumo-subtle italic">noun, plural</p>

      <hr className="mt-5 mb-6 border-kumo-line" />

      <ol className="list-decimal space-y-4 pl-5 text-base leading-relaxed text-kumo-default marker:font-semibold">
        <li>
          A fork of an open-source repository, built primarily with AI, that
          attempts to improve upon, extend, or reimagine the original project.
        </li>
        <li>
          When someone else does it, it's "crafting with AI." When you do it,
          it's slop.
        </li>
      </ol>

      <p className="mt-6 text-xs leading-relaxed text-kumo-subtle">
        Term coined by{" "}
        <a
          href="https://x.com/cramforce/status/2027155457597669785"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2"
        >
          Malte Ubl
        </a>
        , creator of{" "}
        <a
          href="https://github.com/vercel-labs/just-bash/tree/main/src/spec-tests/grep/cases"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2"
        >
          just-bash
        </a>
        , in Feb 2026. Inspired by{" "}
        <a
          href="https://x.com/southpolesteve"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2"
        >
          southpolesteve
        </a>
        's prolific slopping.
      </p>

      <div className="mt-8">
        <a href={SUBMIT_URL} target="_blank" rel="noopener noreferrer">
          <Button variant="secondary" size="lg">
            Submit Slop
          </Button>
        </a>
      </div>
    </header>
  );
}
