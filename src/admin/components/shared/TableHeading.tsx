type thProp = {
  label: string;
  type?: string;
};
export default function TableHeading({ label, type = "th" }: thProp) {
  return type === "th" ? (
    <th className="py-2 px-4 border-b">{label}</th>
  ) : type === "td" ? (
    <td className="py-2 px-4 border-b">{label}</td>
  ) : (
    ""
  );
}
