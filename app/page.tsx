"use client";

import { getJztk } from "@/http/apis";

export default function Home() {
  const form = {
    key: "9aea28773b64b6fadc99e33b3505bee2",
    subject: 1,
    model: "c1",
    testType: "rand",
  };
  const { data } = getJztk(form);

  return <div>{JSON.stringify(data)}</div>;
}
