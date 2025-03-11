"use client"
import Image from "next/image";

export default function Home() {
  const handleClick = async () => {
    let data = {
      name: "Ayandip",
      role: "Native App",
    };
    let a = await fetch("/api/add", {
      method: " POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let res = await a.json();
    console.log(res);
  };

  return (
    <div>
      <h1>Next.js Api routes demo</h1>
      <button onClick={handleClick}>click me</button>
    </div>
  );
}
