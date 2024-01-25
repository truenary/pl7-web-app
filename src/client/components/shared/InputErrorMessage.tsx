type inputErrorMessageProp = {
  message: string;
};
export default function InputErrorMessage({ message }: inputErrorMessageProp) {
  return <span className="text-red-500 text-small">{message}</span>;
}
