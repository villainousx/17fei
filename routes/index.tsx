import { useSignal } from "@preact/signals";

import Footer from '../components/Footer.tsx'
import VipIsland from "../islands/vip.tsx";

				

export default function Home() {
  return (
    <div class="p-2 w-full leading-8 min-h-screen text-shadow bg-pink-400 text-lg text-red-100">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold my-16">情侣情趣飞行棋</h1>
	<VipIsland></VipIsland>

        <div class="text-left leading-8 font-black mt-8">
          <div>1. 自由定制棋盘内容</div>
          <div>2. 预设不同阶段互动内容 恋爱，情趣，好玩。满足各种口味快速开局。</div>

        </div>
        <div class="text-center mt-8">
          <div class="font-black my-4">游戏列表</div>
          <a href="/fxq/index.html" class="block px-4 my-4 border rounded bg-pink-600 underline w-60">飞行棋</a>
          <a href="/card" class="block px-4 my-4 border rounded bg-pink-600 underline w-60">任务卡牌</a>
          <a href="/position" class="block px-4 my-4 border rounded bg-pink-600 underline w-60">姿势卡牌</a>
          <a href="/positions" class="block px-4 my-4 border rounded bg-pink-600 underline w-60">姿势大全</a>

        </div>

      </div>
      <Footer></Footer>
    </div>
  );
}
