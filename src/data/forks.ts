export interface SlopFork {
  rank: number;
  name: string;
  description: string;
  originalRepo: string;
  forkRepo: string;
  stars: number;
  language: string;
  url?: string;
}

export const forks: SlopFork[] = [
  {
    rank: 1,
    name: "OpenCode",
    description: "Open-source, provider-agnostic AI coding agent — Claude Code reimagined",
    originalRepo: "anthropics/claude-code",
    forkRepo: "anomalyco/opencode",
    stars: 112000,
    language: "TypeScript",
  },
  {
    rank: 2,
    name: "Void",
    description: "The open-source Cursor alternative — VS Code fork with AI agents and checkpoints",
    originalRepo: "microsoft/vscode",
    forkRepo: "voideditor/void",
    stars: 28300,
    language: "TypeScript",
  },
  {
    rank: 3,
    name: "Roo Code",
    description: "Fork of Cline with multi-agent modes — Code, Architect, Debug, Ask",
    originalRepo: "cline/cline",
    forkRepo: "RooCodeInc/Roo-Code",
    stars: 22400,
    language: "TypeScript",
  },
  {
    rank: 4,
    name: "bolt.diy",
    description: "Community fork of bolt.new — use any LLM to build full-stack apps",
    originalRepo: "stackblitz/bolt.new",
    forkRepo: "stackblitz-labs/bolt.diy",
    stars: 19100,
    language: "TypeScript",
  },
  {
    rank: 5,
    name: "Kilo Code",
    description: "Fork of Roo Code (which forked Cline) — the slop fork of a slop fork",
    originalRepo: "RooCodeInc/Roo-Code",
    forkRepo: "Kilo-Org/kilocode",
    stars: 16000,
    language: "TypeScript",
  },
  {
    rank: 6,
    name: "Melty",
    description: "VS Code fork where every chat is a git commit — writing half its own code",
    originalRepo: "microsoft/vscode",
    forkRepo: "meltylabs/melty",
    stars: 5400,
    language: "TypeScript",
  },
  {
    rank: 7,
    name: "vinext",
    description: "Next.js API surface reimplemented on Vite — built in one week with Claude Code",
    originalRepo: "vercel/next.js",
    forkRepo: "cloudflare/vinext",
    stars: 4400,
    language: "TypeScript",
  },
  {
    rank: 8,
    name: "Every Code",
    description: "Fork of OpenAI Codex CLI — adds multi-agent orchestration across providers",
    originalRepo: "openai/codex",
    forkRepo: "just-every/code",
    stars: 3500,
    language: "Rust",
  },
  {
    rank: 9,
    name: "LLM Gateway",
    description: "Open-source OpenRouter alternative — unified API for every LLM provider",
    originalRepo: "openrouter/openrouter",
    forkRepo: "theopenco/llmgateway",
    stars: 917,
    language: "TypeScript",
  },
  {
    rank: 10,
    name: "Ghostree",
    description: "Ghostty fork with native worktrees — Codex kept trying to PR upstream",
    originalRepo: "ghostty-org/ghostty",
    forkRepo: "sidequery/ghostree",
    stars: 61,
    language: "Zig",
  },
  {
    rank: 11,
    name: "just-bash",
    description: "Bash reimplemented in TypeScript — sandboxed shell for AI agents with 60+ commands",
    originalRepo: "gnu/bash",
    forkRepo: "vercel-labs/just-bash",
    url: "https://github.com/vercel-labs/just-bash/tree/main/src/spec-tests/grep/cases",
    stars: 1400,
    language: "TypeScript",
  },
];
