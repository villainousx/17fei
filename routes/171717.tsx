import VipIsland from "../islands/vip.tsx";
import { useEffect } from "preact/hooks";

export default function About() {
	return (
		<div class="w-full p-2 leading-8 min-h-screen text-shadow bg-pink-300 text-lg text-red-100">
			<div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
				<VipIsland></VipIsland>
				<div class="leading-8 text-gray-900 max-w-lg mt-8 max-auto">
					{/* 解锁成功， 正在跳转*/}
				</div>
				 
			</div>
		</div>
	)

}
 
const RedirectComponent = () => {
  // 在组件加载时执行跳转操作
  useEffect(() => {
    window.location.href = '/'; // 设置新页面的 URL
  }, []);
  
  return null; // 不需要显示任何内容，因此直接返回空元素
};
