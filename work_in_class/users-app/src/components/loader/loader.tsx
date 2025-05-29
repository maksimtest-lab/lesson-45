import type { FC } from "react";
import "./styles.css";

export const Loader: FC = () => {
  return (
    <div className="loader-wrapper">
      <div className="spinner" />
    </div>
  );
};
