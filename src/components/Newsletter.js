import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function Newsletter() {
  const [state, handleSubmit] = useForm("mvoykool");
  if (state.succeeded) {
    return <p>Gracias por suscribirte!</p>;
  }
  return (
    <div className="newsletter">
      <h3>NEWSLETTER</h3>
      <h2>SUSCRIBETE</h2>
      <p>Y enterate de todas las novedades</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email"></label>
        <input
          placeholder="Ingresa tu email"
          id="email"
          type="email"
          name="email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        {/* <textarea
        id="message"
        name="message"
      /> */}
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          →
        </button>
      </form>

      {/* <form action="https://formspree.io/f/{form_id}" method="post">
      <label for="email">Ingresa tu email</label>
      <input name="Email" id="email" type="email">
      <button type="submit">→</button>
        <input type="email" placeholder="ingresa tu email" />
        <button>→</button>
      </form> */}
    </div>
  );
}

export default Newsletter;
