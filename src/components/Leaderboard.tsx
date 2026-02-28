import { Table, Badge, Link, LayerCard, Text, Button, Surface } from "@cloudflare/kumo";
import { Star, GitFork, ArrowUpRight } from "@phosphor-icons/react";
import { forks } from "../data/forks";

const SUBMIT_URL =
  "https://github.com/slopforks/slopforks/issues/new?template=submit-slop.yml";

function formatStars(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return n.toString();
}

export default function Leaderboard() {
  const sorted = [...forks].sort((a, b) => b.stars - a.stars);

  return (
    <section className="mx-auto max-w-4xl px-6 pb-24">
      <div className="mb-6 flex items-baseline justify-between">
        <Text variant="heading3" as="h2">
          Leaderboard
        </Text>
        <Text variant="secondary" size="sm">
          Ranked by GitHub stars
        </Text>
      </div>

      <LayerCard>
        <LayerCard.Primary className="p-0">
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.Head className="w-12 text-center">#</Table.Head>
                <Table.Head>Project</Table.Head>
                <Table.Head className="hidden sm:table-cell">
                  Original
                </Table.Head>
                <Table.Head className="hidden md:table-cell">
                  Language
                </Table.Head>
                <Table.Head className="text-right">Stars</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {sorted.map((fork, i) => (
                <Table.Row key={fork.name}>
                  <Table.Cell className="text-center font-mono text-kumo-subtle">
                    {i + 1}
                  </Table.Cell>
                  <Table.Cell>
                    <div className="flex flex-col gap-0.5">
                      <Link
                        href={fork.url ?? `https://github.com/${fork.forkRepo}`}
                        target="_blank"
                        variant="plain"
                        className="inline-flex items-center gap-1 font-semibold"
                      >
                        {fork.name}
                        <ArrowUpRight size={14} className="text-kumo-subtle" />
                      </Link>
                      <span className="text-xs text-kumo-subtle">
                        {fork.description}
                      </span>
                    </div>
                  </Table.Cell>
                  <Table.Cell className="hidden sm:table-cell">
                    <Link
                      href={`https://github.com/${fork.originalRepo}`}
                      target="_blank"
                      variant="inline"
                      className="text-sm"
                    >
                      <span className="flex items-center gap-1">
                        <GitFork size={14} />
                        {fork.originalRepo.split("/")[1]}
                      </span>
                    </Link>
                  </Table.Cell>
                  <Table.Cell className="hidden md:table-cell">
                    <Badge variant="outline">
                      {fork.language}
                    </Badge>
                  </Table.Cell>
                  <Table.Cell className="text-right">
                    <span className="inline-flex items-center gap-1 font-mono text-sm font-medium">
                      <Star size={14} weight="fill" className="text-amber-500" />
                      {formatStars(fork.stars)}
                    </span>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </LayerCard.Primary>
      </LayerCard>

      {/* CTA card */}
      <Surface className="mt-10 flex flex-col gap-4 rounded-lg p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Text variant="heading3" as="p">
            Have your own slop?
          </Text>
          <p className="mt-1 text-sm text-kumo-subtle">
            If you've forked a repo and rebuilt it with AI, we want to see it.
          </p>
        </div>
        <a href={SUBMIT_URL} target="_blank" rel="noopener noreferrer">
          <Button variant="secondary" size="base" className="shrink-0">
            Submit Slop
          </Button>
        </a>
      </Surface>
    </section>
  );
}
