import React from "react";
import mergeClassNames from "classnames";

export type AlertType = "success" | "default" | "danger" | "warning";

interface BaseAlertProps {
  content: string;
  title?: string;
  closeBtn?: boolean;
  type?: AlertType;
  className?: string;
  show?: boolean;
  onClose?: () => void
}

// 123
const Alert: React.FC<BaseAlertProps> = (props) => {
  const { content, title, type, closeBtn, className, show, onClose } = props;

  const cname = mergeClassNames("alert", className, `alert-${type}`);

  return (
    show ?<div className={cname}>
      <div className="title">
        {title ? <h5>{title}</h5> : <span>{content}</span>}
        {closeBtn && <span className="close" onClick={() => onClose && onClose()}></span>}
      </div>
      {title && <p className="content">{content}</p>}
    </div> : null
  );
};

Alert.defaultProps = {
  closeBtn: true,
  type: "default",
  show: false,
};

export default Alert;
