'use client';

import { useState } from 'react';
import { Hero } from '@/components/Hero';
import { TreeNavigation } from '@/components/TreeNavigation';
import { Sidebar } from '@/components/Sidebar';
import { SkillsTree } from '@/components/SkillsTree';
import { SkillSnapshot } from '@/components/SkillSnapshot';
import { SkillDetailDrawer } from '@/components/SkillDetailDrawer';
import { Disclaimer } from '@/components/Disclaimer';
import { skills } from '@/data/skills';
import { branchMap } from '@/data/branches';
import { AgeBandId, BranchId, SkillNode, SnapshotResult } from '@/types/skill';

export default function Home() {
  const [snapshotOpen, setSnapshotOpen] = useState(false);
  const [snapshotResult, setSnapshotResult] = useState<SnapshotResult | null>(null);
  const [childName, setChildName] = useState('');
  const [ageBand, setAgeBand] = useState<AgeBandId | 'all'>('all');
  const [domain, setDomain] = useState<BranchId | 'all'>('all');
  const [selectedSkill, setSelectedSkill] = useState<SkillNode | null>(null);

  function scrollToTree() {
    document.getElementById('tree')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function handleApplyResult(result: SnapshotResult, name: string) {
    setSnapshotResult(result);
    setChildName(name);
    setAgeBand('all');
    setDomain('all');
    setTimeout(scrollToTree, 100);
  }

  return (
    <main className="flex-1 bg-[#faf6ee]">
      <Hero onStartSnapshot={() => setSnapshotOpen(true)} onExploreTree={scrollToTree} />

      <TreeNavigation
        ageBand={ageBand}
        domain={domain}
        onAgeChange={setAgeBand}
        onDomainChange={setDomain}
        onReset={() => {
          setAgeBand('all');
          setDomain('all');
        }}
        hasSnapshot={!!snapshotResult}
      />

      <div className="mx-auto flex max-w-6xl gap-6 lg:px-10">
        <Sidebar
          skills={skills}
          childName={childName}
          ageBand={ageBand}
          domain={domain}
          onAgeChange={setAgeBand}
          onDomainChange={setDomain}
          snapshotResult={snapshotResult}
          onStartSnapshot={() => setSnapshotOpen(true)}
        />
        <div className="min-w-0 flex-1">
          <SkillsTree
            skills={skills}
            ageBand={ageBand}
            domain={domain}
            snapshotResult={snapshotResult}
            onOpenSkill={setSelectedSkill}
            onStartSnapshot={() => setSnapshotOpen(true)}
          />
        </div>
      </div>

      <footer className="border-t border-stone-200 bg-white px-6 py-10">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="font-serif text-lg text-stone-700">
            Help your kid build skills. Help your kid discover the world.
          </p>
          <Disclaimer />
          {childName && (
            <p className="text-xs text-stone-400">
              Map personalized for {childName}. Refresh the Skill Snapshot anytime to update it.
            </p>
          )}
        </div>
      </footer>

      <SkillSnapshot
        open={snapshotOpen}
        onClose={() => setSnapshotOpen(false)}
        onApplyResult={handleApplyResult}
      />

      <SkillDetailDrawer
        skill={selectedSkill}
        branch={selectedSkill ? branchMap[selectedSkill.branch] : null}
        onClose={() => setSelectedSkill(null)}
      />
    </main>
  );
}
