'use client';

import { useState } from 'react';
import { AppHeader } from '@/components/AppHeader';
import { TreeNavigation } from '@/components/TreeNavigation';
import { ProgressPanel } from '@/components/ProgressPanel';
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
  const [progressOpen, setProgressOpen] = useState(false);

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
    <main className="flex min-h-screen flex-col bg-[#0d0c11]">
      <div className="sticky top-0 z-30 border-b border-[var(--panel-border)] bg-[#0d0c11]/90 backdrop-blur-md">
        <AppHeader
          childName={childName}
          hasSnapshot={!!snapshotResult}
          onStartSnapshot={() => setSnapshotOpen(true)}
          progressOpen={progressOpen}
          onToggleProgress={() => setProgressOpen((open) => !open)}
        />
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
      </div>

      <div className="relative flex-1">
        <SkillsTree
          skills={skills}
          ageBand={ageBand}
          domain={domain}
          snapshotResult={snapshotResult}
          onOpenSkill={setSelectedSkill}
          onDomainChange={setDomain}
        />

        {progressOpen && (
          <ProgressPanel
            skills={skills}
            childName={childName}
            snapshotResult={snapshotResult}
            onClose={() => setProgressOpen(false)}
          />
        )}
      </div>

      <footer className="border-t border-[var(--panel-border)] bg-[#0d0c11] px-6 py-10">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="font-serif text-lg text-white/70">
            Help your kid build skills. Help your kid discover the world.
          </p>
          <Disclaimer />
          {childName && (
            <p className="text-xs text-white/30">
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
