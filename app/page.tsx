"use client"
import { Tree } from 'antd';
import type { TreeDataNode } from 'antd';
import { useState } from "react";
import data from './data/data.json';

const defaultData: TreeDataNode[] = data;

const App: React.FC = () => {
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);

  const onExpand = (newExpandedKeys: React.Key[]) => {
    setExpandedKeys(newExpandedKeys);
    setAutoExpandParent(false);
  };


  return (
    <div>
      <Tree
        showLine
        onExpand={onExpand}
        expandedKeys={expandedKeys}
        autoExpandParent={autoExpandParent}
        treeData={defaultData}
      />
    </div>
  );
};
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl">Mathlib 定理 Tree</h1>
        <App />
      </main>
    </div>
  );
}
