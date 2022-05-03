import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({
  onFeedbackTypeChanged,
}: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>

      <div className="flex w-full gap-2 py-8">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              className="flex flex-col items-center flex-1 w-24 gap-2 py-5 border-transparent rounded-lg bg-zinc-800 hover:border-brand-500 focus:border-brand-500"
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
              type="button"
              key={key}
            >
              <span>{value.title}</span>
              <img src={value.image.source} alt={value.image.alt} />
            </button>
          );
        })}
      </div>
    </>
  );
}
