import React from "react";

export const navigationRef = React.createRef<any>();

interface PropsParams {
  name: string;
  params?: { [key: string]: any };
}

export function navigate({ name, params }: PropsParams) {
  navigationRef.current?.navigate(name, params);
}
