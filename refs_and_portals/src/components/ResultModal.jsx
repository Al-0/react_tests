import { useRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

export default function ResultModal({
  remainingTime,
  targetTime,
  ref,
  onReset,
}) {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round(((1 - remainingTime / (targetTime * 1000)) * 100));

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal (
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {userLost && <h2>{`You lost (╥ ω ╥) `}</h2>}
      {!userLost && (
        <>
          <h2>Winner winner chicken dinner! ◝(ᵔᗜᵔ)◜</h2>
          <h3>Your score is {score}</h3>
        </>
      )}
      <p>
        The target time was <strong>{targetTime}</strong> seconds.
      </p>
      <p>
        You stopped the timer timer with{" "}
        <strong>{formattedRemainingTime}</strong> seconds left.
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
}
