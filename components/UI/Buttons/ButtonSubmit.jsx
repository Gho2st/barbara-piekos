import classes from "./ButtonSubmit.module.css";

export default function ButtonSubmit(props) {
  return (
    <div className={classes.button__container}>
      <button style={{ background: props.background, color: props.color }}>
        {props.text}
      </button>
    </div>
  );
}
