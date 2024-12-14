import { Champion } from "@/types/Champion";

export async function getVersion() {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json",
    {
      cache: "no-store",
    }
  );
  const data: string[] = await res.json();
  return data[0];
}

export async function fetchChampionList() {
  try {
    const version = await getVersion();
    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`
    );
    const data: Champion = await res.json();
    return data;
  } catch (err) {
    throw new Error(`챔피언정보를 못불러왔습니다, ${err}`);
  }
}
