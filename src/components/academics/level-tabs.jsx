"use client";

import { useEffect, useRef } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { LevelPanel } from "@/components/academics/level-panel";
import { academicLevels } from "@/data/academics";

export function LevelTabs() {
  const activeRef = useRef(null);

  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({ inline: "center", block: "nearest" });
    }
  }, []);

  return (
    <Tabs defaultValue={academicLevels[0].id} className="w-full">
      <div className="tab-list-scroll -mx-6 px-6 md:mx-0 md:px-0">
        <TabsList className="mb-8 flex h-auto w-max min-w-full flex-nowrap gap-1 rounded-xl bg-mist p-1">
          {academicLevels.map((level, idx) => (
            <TabsTrigger
              key={level.id}
              value={level.id}
              ref={idx === 0 ? activeRef : undefined}
              className="tab-trigger-snap min-h-11 min-w-max whitespace-nowrap rounded-lg px-4 py-2 font-body text-sm font-medium"
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
