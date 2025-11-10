import { decode } from "blurhash";
import { useEffect, useMemo, useRef, useState } from "react";

export default function BlurHashImage({
    src,
    alt,
    blurHash,
    className,
    style,
    imgStyle,
    onLoad,
}) {
    const [loaded, setLoaded] = useState(false);
    const bgRef = useRef(null);

    const placeholder = useMemo(() => {
        if (!blurHash) return null;
        const width = 32,
            height = 32;
        const pixels = decode(blurHash, width, height);
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        const imageData = ctx.createImageData(width, height);
        imageData.data.set(pixels);
        ctx.putImageData(imageData, 0, 0);
        return canvas.toDataURL();
    }, [blurHash]);

    useEffect(() => {
        if (bgRef.current && placeholder) {
            bgRef.current.style.backgroundImage = `url(${placeholder})`;
        }
    }, [placeholder]);

    return (
        <div
            ref={bgRef}
            className={className}
            style={{
                position: "relative",
                backgroundSize: "cover",
                backgroundPosition: "center",
                ...style,
            }}
        >
            <img
                src={src}
                alt={alt}
                loading="lazy"
                decoding="async"
                onLoad={(e) => {
                    setLoaded(true);
                    onLoad && onLoad(e);
                }}
                style={{
                    opacity: loaded ? 1 : 0,
                    transition: "opacity .3s ease",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    ...imgStyle,
                }}
            />
        </div>
    );
}
