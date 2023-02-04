type QuickLabelProps = {
  label: string;
};

export default function QuickLabel({ label }: QuickLabelProps) {
  return (
    <div className="absolute -top-8 text-sm font-bold text-gray-6">{label}</div>
  );
}
