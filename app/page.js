'use client';
import { useState } from "react";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackFormPopup from "./components/FeedbackFormPopup";
import Button from "./components/Button";
import FeedbackItemPopup from "./components/FeedbackItemPopup";

const FEEDBACKS = [
  {
    title: 'The Way of Kings',
    description: 'The Way of Kings is an epic high fantasy novel written by American author Brandon Sanderson and the first book in The Stormlight Archive series',
    votesCount: 75
  },
  {
    title: 'The Game of Thrones',
    description: 'Nine noble families wage war against each other in order to gain control over the mythical land of Westeros. Meanwhile, a force is rising after millenniums and threatens the existence of living men.',
    votesCount: 85
  }
];

export default function Home() {
  const [showFeedbackPopupForm, setShowFeedbackPopupForm] = useState(false);
  const [showFeedbackPopupItem, setShowFeedbackPopupItem] = useState(null);

  function openFeedbackPopup() {
    setShowFeedbackPopupForm(true);
  };

  function openFeedbackPopupItem(feedback) {
    setShowFeedbackPopupItem(feedback);
  }

  return (
    <main className="bg-white md:max-w-2xl mx-auto md:shadow-lg md:rounded-lg md:mt-8 overflow-hidden">
      <div className="bg-gradient-to-r from-cyan-400 to-blue-400 p-8">
        <h1 className="font-bold text-xl">Book Suggestion</h1>
        <p className="text-opacity-90 text-slate-700">Suggest a good fiction thriller book for weekend</p>
      </div>

      <div className="bg-gray-100 px-8 py-4 flex border-b">
        <div className="grow"></div>
        <div>
          <Button onClick={openFeedbackPopup} primary>
            Make a suggestion
          </Button>
        </div>
      </div>

      <div className="px-8">
        {FEEDBACKS.map(feedback => (
          <FeedbackItem {...feedback} 
            onOpen={() => openFeedbackPopupItem(feedback)}
          />
        ))}
      </div>

      {showFeedbackPopupForm && (
        <FeedbackFormPopup setShow={setShowFeedbackPopupForm}/>
      )};

      {showFeedbackPopupItem && (
        <div>
          <FeedbackItemPopup {...showFeedbackPopupItem} setShow={setShowFeedbackPopupItem}/>  
        </div>
      )};
    </main>
  );
}
