"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { LevelPanel } from "@/components/academics/level-panel";
import { academicLevels } from "@/data/academics";

export function LevelTabs() {
  return (
    <Tabs defaultValue={academicLevels[0].id} className="w-full">
      <div className="overflow-x-auto">
        <TabsList className="mb-8 flex h-auto flex-nowrap gap-1 rounded-xl bg-mist p-1">
          {academicLevels.map((level) => (
            <TabsTrigger
              key={level.id}
              value={level.id}
              className="min-h-11 min-w-max whitespace-nowrap rounded-lg px-4 py-2 font-body text-sm font-medium"
            >
              {level.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      {academicLevels.map((level) => (
        <TabsContent key={level.id} value={level.id}>
          <LevelPanel level={level} />
        </TabsContent>
      ))}
    </Tabs>
  );
}
