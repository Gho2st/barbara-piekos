import Link from "next/link";
import classes from "./Button.module.css";

export default function Button(props) {
  return (
    <div
      className={classes.button__container}
      style={{ background: props.background, color: props.color }}
    >
      <Link className={classes.link} href={props.link}>
        {props.text}
      </Link>
    </div>
  );
}
