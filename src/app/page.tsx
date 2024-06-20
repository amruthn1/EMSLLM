"use client";

import { chatWithAgent } from "@/actions/page";
import type { JSX } from "react";
import { useFormState } from "react-dom"; 

export default function Home() {
  const [ui, action] = useFormState<JSX.Element | null>(async () => {
    return chatWithAgent("What is Lorem Ipsum");
  }, null);
  return (
    <main>
      {ui}
      <form action={action}>
        <button>Chat</button>
      </form>
    </main>
  );
}
