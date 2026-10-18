import { CONTACT } from '../data/resort';
import { MessengerIcon } from './MessengerButton';

/** Persistent round Messenger button, bottom-left of every page. */
export default function FloatingMessenger() {
  return (
    <a
      className="floating-messenger"
      href={CONTACT.messenger}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Aurelia Cove on Facebook Messenger (opens in a new tab)"
    >
      <MessengerIcon size={26} />
      <span className="floating-messenger-label">Chat with us</span>
      <span className="floating-messenger-dot" aria-hidden="true" />
    </a>
  );
}
