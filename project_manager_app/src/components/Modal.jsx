import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

import Button from "./Button";

export default function Modal({ children, caption, ref, ...props }) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog className="backdrop:bg-stone-900/90 p-4 rounded-sm shadow-md" ref={dialog} {...props}>
      {children}
      <form className="mt-4 text-right" method="dialog">
        <Button>{caption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
}
