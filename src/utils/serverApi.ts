"use server";
import { BASE_URL } from "@/public/static";
import {
  addImgChampion,
  GetChampion,
  GetChampionDetail,
} from "@/types/Champion";
import { GetItem, Item } from "@/types/Item";
import { delay } from "./delay";

//챔피언 불러올때 쓰일 버전
export async function getVersion() {
  try {
    await delay(1000); //1초 지연
    const res = await fetch(
      "https://ddragon.leagueoflegends.com/api/versions.json",
      { cache: "force-cache" }
    );

    if (!res.ok) {
      console.error(res.status);
      throw new Error("버전 정보를 가져오는 데 실패!");
    }

    const data: string[] = await res.json();
    return data[0]; //최신 버전 반환
  } catch (err) {
    console.error(err);
    throw new Error("버전 정보를 가져오는 중 문제가 발생!");
  }
}

//챔피언 목록 불러오기 , ISR
export async function fetchChampionList() {
  try {
    await delay(1000); //1초 지연
    const version = await getVersion();
    const res = await fetch(`${BASE_URL}/${version}/data/ko_KR/champion.json`, {
      next: {
        revalidate: 24 * 60 * 60,
      },
    });

    if (!res.ok) {
      throw new Error(`챔피언 데이터를 가져오는 데 실패! ${res.status}`);
    }

    const data: GetChampion = await res.json();
    const championData: addImgChampion[] = Object.values(data.data)
      .sort((a, b) => a.name.localeCompare(b.name)) //문자열비교
      .map((champion) => ({
        ...champion,
        imgPath: `${BASE_URL}/${version}/img/champion/${champion.id}.png`,
      }));

    return championData;
  } catch (err) {
    console.error(err);
    throw new Error("챔피언 정보를 불러오는 중 에러가 발생!");
  }
}

//챔피언 상세정보 불러오기
export async function fetchChampionDetail(id: string) {
  try {
    await delay(1000); //1초 지연
    const version = await getVersion();
    const res = await fetch(
      `${BASE_URL}/${version}/data/ko_KR/champion/${id}.json`,
      {
        cache: "no-store",
      }
    );

    // id 유효성 검사
    if (!res) {
      throw new Error(`챔피언 정보를 찾을 수 없습니다: ${id}`);
    }

    const data: GetChampionDetail = await res.json();
    return data.data[id];
  } catch (err) {
    console.error(err);
    throw new Error("챔피언 상세정보를 불러오는 중 에러가 발생!");
  }
}

// 아이템 불러오기
export async function fetchItemList() {
  try {
    await delay(1000); //1초 지연
    const version = await getVersion();
    const res = await fetch(`${BASE_URL}/${version}/data/ko_KR/item.json`, {
      cache: "force-cache",
    });
    const data: GetItem = await res.json();
    const items: Item[] = Object.values(data.data);
    return items;
  } catch (err) {
    console.error(err);
    throw new Error("아이템을 불러오는 중 에러가 발생!");
  }
}
