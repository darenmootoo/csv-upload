import { forwardRef, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  activePage: String
}
export const HomePage = forwardRef<HTMLDivElement, Props>((props, ref) => (
    <div id="HomePage" ref={ref} className={`container ${props.activePage==="HomePage" ? 'show' : 'hidden'}`}>
    <span>Homepage</span>
    {props.children}
  </div>
));