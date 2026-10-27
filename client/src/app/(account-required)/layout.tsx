import AccountGuard from "@/components/guards/account-guard";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return <AccountGuard>{children}</AccountGuard>;
};

export default layout;
