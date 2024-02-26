type ModalProp = {
  isOpen: boolean;
  title: string;
  content: string;
  confirmText: string;
  cancelText: string;
  onConfirm: () => void;
  onCancel: () => void;
};
const Modal = ({
  isOpen,
  title,
  content,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
}: ModalProp) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{title}</h2>
        <p>{content}</p>
        <div className="modal-buttons">
          <button onClick={onConfirm}>{confirmText}</button>
          <button onClick={onCancel}>{cancelText}</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
