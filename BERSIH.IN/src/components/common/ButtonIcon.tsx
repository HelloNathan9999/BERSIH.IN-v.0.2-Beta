import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "ghost" | "outline";
  size?: "icon" | string;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, className = "", variant, size, ...rest }) => {
  const variantClass = variant ? ` ${variant}` : "";
  const sizeClass = size === "icon" ? " p-2" : "";
  return (
    <button {...rest} className={`${className}${variantClass}${sizeClass}`}>
      {children}
    </button>
  );
};

interface ButtonIconProps {
  // Accept any SVG React component (lucide icons are compatible with this)
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label?: string;
  // Use React's MouseEventHandler to match button onClick signature
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: "default" | "ghost" | "outline";
  // Optional explicit aria-label when no visible label is provided
  ariaLabel?: string;
}

export const ButtonIcon: React.FC<ButtonIconProps> = ({
  icon: Icon,
  label,
  onClick,
  variant = "ghost",
  ariaLabel,
}) => {
  // prefer visible label for accessibility, otherwise use provided ariaLabel
  const accessibleLabel = label ?? ariaLabel ?? undefined;

  return (
    <Button
      onClick={onClick}
      variant={variant}
      size="icon"
      className="flex items-center gap-2"
      // only add aria-label if there's no visible label
      {...(accessibleLabel && !label ? { "aria-label": accessibleLabel } : {})}
    >
      {/* hide decorative icon from screen readers when a visible label exists */}
      <Icon className="w-5 h-5" aria-hidden={label ? true : undefined} />
      {label && <span className="text-sm">{label}</span>}
    </Button>
  );
};
