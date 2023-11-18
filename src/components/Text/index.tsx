import React from "react";

const sizeClasses = {
  txtRobotoBold19: "font-bold font-roboto",
  txtRobotoRegular13WhiteA700: "font-normal font-roboto",
  txtRobotoBold18: "font-bold font-roboto",
  txtRobotoRegular14WhiteA700: "font-normal font-roboto",
  txtRobotoBold18WhiteA700: "font-bold font-roboto",
  txtRobotoBold40: "font-bold font-roboto",
  txtRobotoRegular13: "font-normal font-roboto",
  txtRobotoRegular15WhiteA700: "font-normal font-roboto",
  txtRobotoRegular14: "font-normal font-roboto",
  txtRobotoRegular15: "font-normal font-roboto",
  txtRobotoRegular16: "font-normal font-roboto",
  txtRobotoRegular18: "font-normal font-roboto",
  txtRobotoBold54Black900: "font-bold font-roboto",
  txtRobotoBold16: "font-bold font-roboto",
  txtRobotoBold40Black900: "font-bold font-roboto",
  txtRobotoBold14: "font-bold font-roboto",
  txtRobotoBold18DeeppurpleA40001: "font-bold font-roboto",
  txtRobotoRegular16WhiteA700: "font-normal font-roboto",
  txtRobotoBold40Gray90001: "font-bold font-roboto",
  txtRobotoBold40WhiteA700: "font-bold font-roboto",
  txtRobotoBold54: "font-bold font-roboto",
  txtRobotoRegular15Gray900: "font-normal font-roboto",
  txtRobotoBold16WhiteA700: "font-bold font-roboto",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
