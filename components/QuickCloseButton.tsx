type QuickCloseButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export default function QuickCloseButton({
  children,
  onClick,
}: QuickCloseButtonProps) {
  return (
    <div className="relative">
      <button
        className="absolute -left-3 z-0 h-[68px] w-[68px] rounded-full bg-gray-2"
        onClick={onClick}
      />
      {children}
    </div>
  );
}
