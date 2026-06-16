# child-skills-tree

Child Development Skills Tree

**Help your kid build skills. Help your kid discover the world.**

Child Development Skills Tree is a mobile-first web product for parents of children ages **0–5**. It reframes early child development from passive milestone tracking into an active, joyful map of discovery: what a child is learning, what that skill opens up in the real world, and how parents can support it through everyday moments.

The core experience is a **scrollable developmental skills tree**. Parents can explore major developmental branches, open individual skill nodes, and learn what each skill is, why it matters, what it helps a child discover, and what simple activities can support it.

This product is educational and non-diagnostic. The tree is a map, not a test.

---

## Product Vision

Most developmental tools make parents ask:

> Is my child on track?

This product helps parents ask:

> What is my child learning to discover, and how can I help?

Each skill is treated as a new way for a child to experience, understand, or participate in the world.

Examples:

- **Crawling** helps a child discover distance, agency, and movement through space.
- **Pointing** helps a child discover shared attention: “I can show you what I see.”
- **Pincer grasp** helps a child discover precision and control.
- **Pretend play** helps a child discover possibility and imagination.
- **Naming feelings** helps a child discover their inner world.
- **Taking turns** helps a child discover social rhythm.

The product should feel warm, credible, calm, lightly magical, and useful for real parents.

---

## V1 Scope

V1 focuses on the core product experience:

- A polished hero section
- A parent-facing **Skill Snapshot** onboarding flow
- A visual, scrollable skills tree
- Seven core developmental branches
- Expandable branches and sub-branches
- Tappable/hoverable skill nodes
- Skill detail cards with developmental context and activities
- Local structured data for skills and snapshot questions
- Responsive mobile-first design
- Vercel deployment

V1 does **not** require authentication, a database, payments, saved profiles, AI chat, or a CMS.

---

## Core Developmental Branches

The skills tree is organized around seven parent-friendly developmental domains:

1. **Movement**  
   How a child discovers movement, balance, coordination, and the ability to move through space.

2. **Hands & Making**  
   How a child discovers grasping, precision, tools, building, drawing, and making things happen with their hands.

3. **Language**  
   How a child discovers sound, words, gestures, understanding, conversation, and storytelling.

4. **Thinking**  
   How a child discovers cause and effect, memory, categories, problem-solving, patterns, and ideas.

5. **People**  
   How a child discovers relationships, shared attention, imitation, play with others, cooperation, and empathy.

6. **Feelings**  
   How a child discovers needs, preferences, emotions, frustration, recovery, waiting, and self-regulation.

7. **Daily Life**  
   How a child discovers participation in eating, dressing, hygiene, routines, helping, and independence.

A future version may treat **Play & Imagination** as either an eighth branch or a cross-cutting layer across all branches.

---

## Skill Snapshot

The Skill Snapshot is a preliminary parent questionnaire that helps locate a child on the tree.

It should:

- Ask for child age or date of birth
- Ask whether the child was born more than three weeks early
- Ask parent-friendly observational questions
- Avoid clinical language
- Produce a starting map rather than a score
- Highlight likely discovered, emerging, ready-to-try, and later skills

Recommended response options:

- Not yet
- Sometimes
- Often
- Yes, confidently
- I’m not sure

Snapshot output should be framed as:

> **Your child’s starting map**

The product should never imply that the child has passed or failed.

---

## Skill Node Content Model

Each skill node should contain structured content that can power both quick cards and expanded detail views.

Recommended TypeScript type:

```ts
export type SkillStatus =
  | 'later'
  | 'ready'
  | 'emerging'
  | 'discovered'
  | 'growing'
  | 'watch';

export type SkillNode = {
  id: string;
  branch: string;
  subBranch: string;
  title: string;
  developmentalTerm?: string;
  ageRange: string;
  status?: SkillStatus;
  x?: number;
  y?: number;
  whatItIs: string;
  whyItMatters: string;
  worldItOpens: string;
  activities: string[];
  watchFor: string[];
  unlocks: string[];
  parentGuidance?: string;
  safetyNotes?: string;
  relatedSkills?: string[];
  tags?: string[];
};
```

Each skill card should answer:

- What is this skill?
- Why does it matter?
- What does it help the child discover in the real world?
- What can parents try?
- What should parents watch for?
- What does this skill unlock next?

---

## Recommended Tech Stack

Recommended implementation stack:

- [Next.js](https://nextjs.org/) with App Router
- TypeScript
- Tailwind CSS
- Local structured data for V1
- Component-based architecture
- Vercel for deployment

The app should be deployable without complex environment variables.

---

## Suggested Project Structure

```txt
src/
  app/
    page.tsx
    globals.css
  components/
    Hero.tsx
    SkillSnapshot.tsx
    SnapshotQuestion.tsx
    SnapshotResults.tsx
    TreeNavigation.tsx
    SkillsTree.tsx
    BranchSection.tsx
    SkillNode.tsx
    SkillCard.tsx
    SkillDetailDrawer.tsx
    AgeFilter.tsx
    DomainFilter.tsx
    Disclaimer.tsx
  data/
    branches.ts
    skills.ts
    snapshotQuestions.ts
  lib/
    snapshotScoring.ts
    ageBand.ts
    skillFilters.ts
  types/
    skill.ts
```

---

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the local app:

```txt
http://localhost:3000
```

Build for production:

```bash
npm run build
```

Run the production build locally:

```bash
npm start
```

---

## Deployment

This project is intended to deploy through **GitHub + Vercel**.

Expected workflow:

1. Push changes to GitHub.
2. Vercel detects the connected repository.
3. Vercel builds and deploys the latest version.
4. Confirm the production deployment renders the full tree, Skill Snapshot, and skill detail cards correctly on mobile and desktop.

No database or backend service is required for V1.

---

## Design Principles

The experience should feel like:

- A developmental map
- A skills tree from a game
- A beautiful educational guide
- A parent-friendly reference book

It should not feel like:

- A clinical dashboard
- A checklist of obligations
- A pediatric diagnostic screener
- A generic landing page
- A childish cartoon interface

Visual direction:

- Mobile-first
- Vertical scroll
- Warm neutrals
- Distinct branch accents
- Organic paths
- Rounded nodes/cards
- Subtle motion
- Strong readability
- Premium, calm, parent-oriented design

---

## Safety and Disclaimer

The product should include clear non-diagnostic language:

> This tool is educational and is not a diagnosis. Children develop in different ways and at different speeds. If you have concerns about your child’s development, talk with your pediatrician or a qualified child development professional.

Near the Skill Snapshot, include:

> The Skill Snapshot creates a starting map based on your answers. It is not a test your child can pass or fail.

Avoid language like:

- failed
- delayed
- behind
- abnormal
- should be able to
- must happen by

Prefer language like:

- often emerging around
- you may start to notice
- many children practice this before
- worth watching
- ask for support if concerns persist

---

## Accessibility Requirements

V1 should include accessibility fundamentals:

- Semantic HTML
- Keyboard-accessible controls
- ARIA labels where helpful
- Sufficient color contrast
- No essential information conveyed by color alone
- Large enough tap targets for mobile
- Reduced-motion support
- Readable cards and modals on small screens

---

## Acceptance Criteria

A successful V1 should meet the following criteria:

- The homepage clearly communicates the product idea.
- The skills tree is visible and central from the beginning.
- The tree includes all seven developmental branches.
- Branches expand into sub-branches and skill nodes.
- Skill nodes open useful cards or drawers.
- Skill cards include what the skill is, why it matters, what it helps the child discover, suggested activities, watch-fors, and unlocks.
- The Skill Snapshot asks parent-friendly questions and produces a non-scored starting map.
- The tree covers development from birth through age five.
- The design is mobile-first and polished.
- The tone is warm, expert, non-alarmist, and parent-friendly.
- The app builds successfully and deploys to Vercel.

---

## Future Roadmap

Possible future versions may add:

- Saved child profiles
- Persistent progress tracking
- Parent notes and “first time” memories
- Personalized activity recommendations
- Expanded skill library
- CMS-managed content
- Professional review mode
- Pediatrician or therapist sharing
- AI-assisted developmental guidance
- Multiple children per family
- Printable developmental maps

---

## Development Philosophy

Prioritize a working, beautiful, complete-feeling V1 over a theoretically perfect architecture.

The most important thing is that the product immediately feels like a real developmental skills tree, not a wireframe or a generic information site.

The core artifact is the tree.

> Help your kid build skills. Help your kid discover the world.