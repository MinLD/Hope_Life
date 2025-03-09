import { useEffect, useRef, useState } from "react";

type Props = {
  text: string;
  maxLines?: number;
};

function TextBox({ text, maxLines = 3 }: Props) {
  const [expanded, setExpanded] = useState(false);
  const [shouldTruncate, setShouldTruncate] = useState(false);
  const textRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const checkTruncate = () => {
      const element = textRef.current;
      if (!element) return;

      const computedStyle = window.getComputedStyle(element);
      const lineHeight = parseFloat(computedStyle.lineHeight);
      const maxHeight = lineHeight * maxLines;

      setShouldTruncate(element.scrollHeight > maxHeight);
    };

    checkTruncate();

    // Dùng ResizeObserver để theo dõi thay đổi kích thước phần tử
    const observer = new ResizeObserver(checkTruncate);
    observer.observe(textRef.current);

    return () => observer.disconnect();
  }, [text, maxLines]);

  return (
    <div className="relative">
      <p
        ref={textRef}
        className={`transition-all duration-300 ${
          !expanded && shouldTruncate ? `line-clamp-${maxLines}` : ""
        }`}
      >
        {text}
      </p>

      {shouldTruncate && (
        <button
          className="mt-2 text-blue-500"
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? "Thu gọn" : "Xem thêm"}
        </button>
      )}
    </div>
  );
}

export default TextBox;
