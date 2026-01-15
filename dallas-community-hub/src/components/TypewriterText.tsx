import { useState, useEffect } from 'react';

interface TextSegment {
  text: string;
  className?: string;
  isNewLine?: boolean;
}

interface TypewriterTextProps {
  segments: TextSegment[];
  typingSpeed?: number;
  delayBetweenSegments?: number;
  startDelay?: number;
  showCursor?: boolean;
  cursorClassName?: string;
  onComplete?: () => void;
}

export default function TypewriterText({
  segments,
  typingSpeed = 80,
  delayBetweenSegments = 200,
  startDelay = 500,
  showCursor = true,
  cursorClassName = 'text-amber-400',
  onComplete
}: TypewriterTextProps) {
  const [displayedSegments, setDisplayedSegments] = useState<{ text: string; className?: string; isNewLine?: boolean }[]>([]);
  const [currentSegmentIndex, setCurrentSegmentIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsTyping(true);
    }, startDelay);

    return () => clearTimeout(startTimer);
  }, [startDelay]);

  useEffect(() => {
    if (!isTyping || currentSegmentIndex >= segments.length) {
      if (currentSegmentIndex >= segments.length && !isComplete) {
        setIsComplete(true);
        onComplete?.();
      }
      return;
    }

    const currentSegment = segments[currentSegmentIndex];

    if (currentCharIndex === 0) {
      setDisplayedSegments(prev => [...prev, { text: '', className: currentSegment.className, isNewLine: currentSegment.isNewLine }]);
    }

    if (currentCharIndex < currentSegment.text.length) {
      const timer = setTimeout(() => {
        setDisplayedSegments(prev => {
          const newSegments = [...prev];
          const lastIndex = newSegments.length - 1;
          newSegments[lastIndex] = {
            ...newSegments[lastIndex],
            text: currentSegment.text.slice(0, currentCharIndex + 1)
          };
          return newSegments;
        });
        setCurrentCharIndex(prev => prev + 1);
      }, typingSpeed + Math.random() * 40 - 20);

      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setCurrentSegmentIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }, delayBetweenSegments);

      return () => clearTimeout(timer);
    }
  }, [isTyping, currentSegmentIndex, currentCharIndex, segments, typingSpeed, delayBetweenSegments, onComplete, isComplete]);

  return (
    <span className="inline">
      {displayedSegments.map((segment, index) => (
        <span key={index}>
          {segment.isNewLine && <br />}
          <span className={segment.className}>{segment.text}</span>
        </span>
      ))}
      {showCursor && !isComplete && (
        <span className={`inline-block w-0.5 h-[1em] ml-1 align-middle animate-blink ${cursorClassName}`}>
          |
        </span>
      )}
    </span>
  );
}
