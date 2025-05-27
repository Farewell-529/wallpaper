import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSource } from "../context/SourceContext";

function SwitchSource({ switchSource }: any) {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams()
    const keyword = searchParams.get('keyword')
    const [source] = useState([
        { id: 1, name: 'wallhaven' },
        { id: 2, name: 'konachan' },
        { id: 3, name: 'anime-pictures' },
    ]);
    const { setCurrentSource, currentSource } = useSource();
    const clickHandle = (source: any) => {
        if (keyword) {
            navigate(`/search?keyword=${keyword}&source=${source.name}`);
        } else {
            navigate(`?source=${source.name}`);
        }
        setCurrentSource(source.name);
        switchSource();
    }
    return (
        <div className="my-6 flex gap-3">
            {
                source.map((item) => (
                    <button
                        className={`bg-gray-200 cursor-pointer rounded-md px-4 py-2
                        ${currentSource === item.name ? 'bg-gray-300' : ''}`}
                        key={item.id}
                        onClick={() => clickHandle(item)}
                    >
                        {item.name}
                    </button>
                ))
            }
        </div>
    );
}
export default SwitchSource;