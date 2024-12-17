"use server";

import { RotationChampionList } from "@/types/ChampionRotation";
import { fetchChampionList } from "./serverApi";

export async function GetChampionRotation(baseUrl: string) {
  const data = await fetchChampionList();

  const res = await fetch(`${baseUrl}/api/rotation`);
  if (!res.ok) {
    console.error("로테이션 경로 에러!")
  }

  const rotationData: RotationChampionList = await res.json();

  const rotationChampions = data.filter((champion) =>
    rotationData.data.includes(Number(champion.key))
  );
  return rotationChampions;
}
