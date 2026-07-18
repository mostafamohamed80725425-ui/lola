import React, { useState } from "react";
import { S } from "./styles/tokens";

import NodeField from "./components/NodeField";
import FloatingHeartsButterflies from "./components/FloatingHeartsButterflies";
import ShootingStars from "./components/ShootingStars";
import CursorTrail from "./components/CursorTrail";
import ClickBurst from "./components/ClickBurst";
import BootScreen from "./components/BootScreen";

import ScannerSection from "./components/ScannerSection";
import MemorySection from "./components/MemorySection";
import ApologyTerminal from "./components/ApologyTerminal";
import TimelineSection from "./components/TimelineSection";
import PromiseInstall from "./components/PromiseInstall";
import MessageGenerator from "./components/MessageGenerator";
import EnvelopeSection from "./components/EnvelopeSection";
import ReconnectSection from "./components/ReconnectSection";

export default function App() {
  const [started, setStarted] = useState(false);
  const [booted, setBooted] = useState(false);

  return (
    <div dir="rtl" style={S.root}>
      <NodeField />
      <FloatingHeartsButterflies />
      <ShootingStars />
      <CursorTrail />
      <ClickBurst />

      {!booted && (
        <BootScreen started={started} onStart={() => setStarted(true)} onBooted={() => setBooted(true)} />
      )}

      {booted && (
        <main className="fadeIn" style={S.main}>
          <ScannerSection />
          <MemorySection />
          <ApologyTerminal />
          <TimelineSection />
          <PromiseInstall />
          <MessageGenerator />
          <EnvelopeSection />
          <ReconnectSection />
        </main>
      )}
    </div>
  );
}
