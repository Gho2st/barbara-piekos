"use client";
import classes from "./Contact.module.css";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import Button from "../UI/Buttons/Button";
import Link from "next/link";
import { useState, useRef } from "react";
import ButtonSubmit from "../UI/Buttons/ButtonSubmit";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const [text, setText] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(null);
  const [errorFields, setErrorFields] = useState([]);
  const [isSending, setIsSending] = useState(false);
  const recaptchaRef = useRef(null);

  const sendMail = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setFormError(null);

    const fieldsToCheck = { fullName, email, phoneNumber, text };
    const emptyFields = Object.entries(fieldsToCheck)
      .filter(([_, value]) => !value)
      .map(([key]) => key);
    setErrorFields(emptyFields);

    if (emptyFields.length > 0) {
      setFormError("Proszę uzupełnij wszystkie wymagane pola.");
      setIsSending(false);
      return;
    }

    const recaptchaToken = recaptchaRef.current.getValue();
    if (!recaptchaToken) {
      setFormError("Proszę zaznacz, że nie jesteś robotem przed wysłaniem.");
      setIsSending(false);
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          text,
          fullName,
          email,
          phoneNumber,
          recaptchaToken,
        }),
      });

      if (response.ok) {
        setFormSubmitted(true);
        setEmail("");
        setFullName("");
        setText("");
        setPhoneNumber("");
        recaptchaRef.current.reset();
      } else {
        const errorData = await response.json();
        setFormError(`Błąd: ${errorData.message}`);
      }
    } catch (error) {
      setFormError("Wystąpił nieoczekiwany błąd.");
    }
    setIsSending(false);
  };

  return (
    <section>
      <div className={classes.contact__container_wrapper} id="kontakt">
        <div className={classes.contact__container}>
          {!formSubmitted ? (
            <div className={classes.contact__form__container}>
              <h2>Skontaktuj się ze mną</h2>
              <form onSubmit={sendMail}>
                <div>
                  <label htmlFor="name">Imię i nazwisko:</label>
                  <input
                    type="text"
                    id="name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    style={{
                      border: errorFields.includes("fullName")
                        ? "1px solid red"
                        : "0",
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="email">Adres e-mail:</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      border: errorFields.includes("email")
                        ? "1px solid red"
                        : "0",
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="phone">Twój numer telefonu:</label>
                  <input
                    type="tel"
                    id="phone"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    style={{
                      border: errorFields.includes("phoneNumber")
                        ? "1px solid red"
                        : "0",
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="message">Wiadomość:</label>
                  <textarea
                    id="message"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    style={{
                      border: errorFields.includes("text")
                        ? "1px solid red"
                        : "0",
                    }}
                  />
                </div>
                {formError && (
                  <p className={classes.errorMessage}>{formError}</p>
                )}
                <ReCAPTCHA
                  className="mt-4"
                  ref={recaptchaRef}
                  sitekey="6LetqpUqAAAAABRwX_slcBybtlkC7S4X4QZZEYUo"
                />
                <div
                  className={
                    classes.contact__container__form__button__container
                  }
                >
                  <ButtonSubmit
                    text={isSending ? "Wysyłanie..." : "Wyślij"}
                    disabled={isSending}
                  />
                </div>
              </form>
            </div>
          ) : (
            <div className={classes.thanks__message__container}>
              <h4>Dziękujemy za wiadomość!</h4>
              <p>
                Cieszymy się, że się z nami skontaktowałeś. Odezwę się
                najszybciej jak to możliwe.
              </p>
            </div>
          )}
          <div className={classes.contact__info__container}>
            <h3>Dane kontaktowe</h3>
            <ul>
              <li>
                <div className={classes.contact__info__item}>
                  <MdOutlineEmail />
                  <p>barbarapiekos00@gmail.com</p>
                </div>
              </li>
              <li>
                <div className={classes.contact__info__item}>
                  <IoLocationOutline />
                  <p>33-395 Chełmiec</p>
                </div>
              </li>
              <li>
                <div className={classes.contact__info__item}>
                  <LuPhone />
                  <Link href="tel:+48787184487">(+48) 787 184 487</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
