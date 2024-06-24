"use client";

import { chatWithAgent } from "@/actions/page";
import { useState, type JSX } from "react";
import { useFormState } from "react-dom"; 

export default function Home() {

  const [value, setValue] = useState('');
  
  // @ts-ignore
  const [ui, action] = useFormState<JSX.Element | null>(async () => {
    console.log(value.toString())
    return chatWithAgent(value.toString(), ui);
  }, null);
  return (
    <main>
      <input
        type="text"
        value={value}
        onChange={e => { setValue(e.currentTarget.value); }}
      />
      <form action={action}>
        <button className="btn btn-primary">Chat</button>
      </form>
      <h2>Response:</h2>
      {ui}
    </main>
  );
}
