import VipIsland from "../islands/vip.tsx";
import { useEffect } from "preact/hooks";

export default function About() {
	return (
		<div class="w-full p-2 leading-8 min-h-screen text-shadow bg-pink-300 text-lg text-red-100">
			<div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
				<VipIsland></VipIsland>
				<div class="leading-8 text-gray-900 max-w-lg mt-8 max-auto">
					解锁成功， 请返回
				</div>
				 
			</div>
		</div>
	)

}

