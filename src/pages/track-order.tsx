import { useState } from "react";
import "../app/styles/trackOrder.css";
import { toast } from "react-hot-toast";
import { Oval } from "react-loader-spinner";

const TrackOrder = () => {
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!email || !id) {
      return;
    }
    setLoading(true);

    setTimeout(() => {
      toast.error(`There is no order with ${id} id.`);
      setEmail("");
      setId("");
      setLoading(false);
    }, 500);
  };
  return (
    <div className="track-order">
      <h1>Track order</h1>
      <p>
        To track your order please enter your Order ID in the box below and
        press the &quot;Track&quot; button. This was given to you on your
        receipt and in the confirmation email you should have received.
      </p>

      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Order ID
          <input
            value={id}
            placeholder="Order ID"
            onChange={(e) => setId(e.target.value)}
          />
        </label>
        <label>
          Billing email
          <input
            value={email}
            type="email"
            placeholder="Email you used in checkout."
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button type="submit" className="buy">
          {loading ? <Oval height={25} width={25} color="#ffffff" /> : "Track"}
        </button>
      </form>
    </div>
  );
};

export default TrackOrder;
