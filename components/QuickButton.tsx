type QuickButtonProps = {
  children: React.ReactNode;
  color?: string;
  large?: boolean;
  onClick?: () => void;
};

export default function QuickButton({
  children,
  color,
  large,
  onClick,
}: QuickButtonProps) {
  return (
    <button
      className={`relative z-10 flex items-center justify-center rounded-full ${
        large && color
          ? `h-[68px] w-[68px] ${color}`
          : "h-[60px] w-[60px] bg-gray-6"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
