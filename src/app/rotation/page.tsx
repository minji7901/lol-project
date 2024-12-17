"use client";
import ChampionCard from "@/components/Champion/ChampionCard";
import { addImgChampion } from "@/types/Champion";
import { GetChampionRotation } from "@/utils/riotApi";
import { useEffect, useState } from "react";

const fetchRotation = async () => {
  const url = window.location.origin;
  console.log(url);
  const res = await GetChampionRotation(url);
  console.log(res);
  return res;
};

export default function RotationPage() {
  const [champions, setChampions] = useState<addImgChampion[]>([]);

  useEffect(() => {
    fetchRotation().then(setChampions);
  }, []);

  return (
    <div>
      <h1>Champion Rotation</h1>
      <div>
        {champions.map((champion: addImgChampion) => {
          return <ChampionCard key={champion.id} champion={champion} />;
        })}
      </div>
    </div>
  );
}
