import { useEffect, useState } from "preact/hooks";



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
                <div class="w-full p-2 leading-8 min-h-screen text-shadow bg-pink-300 text-lg text-red-100">
			<div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
				<VipIsland></VipIsland>
            )}
        </>
    );
}
