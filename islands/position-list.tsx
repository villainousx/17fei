import { useEffect, useState } from "preact/hooks";

export default function About() {
	return (
		<div class="w-full p-2 leading-8 min-h-screen text-shadow bg-pink-300 text-lg text-red-100">
			<div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
				<VipIsland></VipIsland>
				<div class="leading-8 text-gray-900 max-w-lg mt-8 max-auto">
					 开通成功， 正在跳转。 如有问题联系微信
				</div>
				 
			</div>
		</div>
	)
}

export default function PositionList(params) {
    let { positions } = params;
    let [length, setLength] = useState(10);
    useEffect(function () {
        let vip = localStorage.getItem("vip");
        if (vip) {
            setLength(positions.length);
        }
    }, []);
    return (
        <>
            <div class="grid grid-cols-2 gap-2">
                {positions.map((p, i) => {
                    if (i < length) {
                        return (
                            <img src={atob(p)} class="rounded mx-auto block" />
                        );
                    }
                })}
            </div>
            {length < 40 && (
                <div class="text-center p-4 underline">
                    <a href="/about">开通会员解锁全部(上百个)姿势</a>
                </div>
            )}
        </>
    );
}
