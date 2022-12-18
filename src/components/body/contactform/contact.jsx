import "./contact.css";

const ContactForm = () => {
  return (
    <div>
      <h1 className="form-header">Frequently Asked Questions </h1>
      <h3> Why choose our services? </h3>
      <p>
        We are quick to respond and we have many happy customers! Feel free to
        call us for a <b> FREE </b> site quote and we will be within your
        location in a few business days. Feel free to reach out using the email
        below!
      </p>
      <h3> How do I get my quote? </h3>
      <p>
        Send me an email with the photos for rooms and the measurements that you
        want to change using the link below!
      </p>
      <h3> How does payment work? </h3>
      <p>
        After consulting our quotes and choosing our rates, we will charge half
        upfront and collect the rest when it's a job well done!
      </p>
      <h1 className="form-header">Contact Us!</h1>
      <a className="email-link" href="mailto:joshuakotsopoulos1@gmail.com">
        Email me at JDK Contracting
      </a>
    </div>
  );
};

export default ContactForm;
