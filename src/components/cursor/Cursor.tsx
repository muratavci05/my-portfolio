import { FC, useState, useEffect, useCallback } from "react";
import classNames from "classnames";

import "./Cursor.css";
const Cursor: FC = () => {
  interface Position {
    x: number;
    y: number;
  }

  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [clicked, setClicked] = useState<boolean>(false);
  const [linkHovered, setLinkHovered] = useState<boolean>(false);
  const [hidden, setHidden] = useState<boolean>(false);

  const addEventListeners = useCallback(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
  }, []);

  const removeEventListeners = useCallback(() => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseenter", onMouseEnter);
    document.removeEventListener("mouseleave", onMouseLeave);
    document.removeEventListener("mousedown", onMouseDown);
    document.removeEventListener("mouseup", onMouseUp);
  }, []);

  useEffect(() => {
    addEventListeners();
    handleLinkHoverEvents();
    return () => removeEventListeners();
  }, [addEventListeners, removeEventListeners]);

  const onMouseMove = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const onMouseDown = (): void => {
    setClicked(true);
  };

  const onMouseUp = (): void => {
    setClicked(false);
  };

  const onMouseLeave = (): void => {
    setHidden(true);
  };

  const onMouseEnter = (): void => {
    setHidden(false);
  };

  const handleLinkHoverEvents = (): void => {
    document.querySelectorAll("a,html,body").forEach((el) => {
      el.addEventListener("mouseover", () => setLinkHovered(true));
      el.addEventListener("mouseout", () => setLinkHovered(false));
    });
  };

  const cursorClasses: string = classNames("cursor", {
    "cursor--clicked": clicked,
    "cursor--hidden": hidden,
    "cursor--link-hovered": linkHovered,
  });

  return (
    <div
      className={cursorClasses}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    ></div>
  );
};

export default Cursor;
