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

            )}
        </>
    );
}
