import Reach from 'react';

export const publishableKey = 'pk_live_51PnKbmGrYcG8NVg5hH583GvfdZi0FBx45TMymYQxpgTDcYKHUAIFW4n63G1stzqp2TXynE2fAnZc3Bpvo7L9t9f900ZDB0VHOm'; // cspell:disable-line

export const StripeBuyButton = ({ buyButtonId }) => (
  <stripe-buy-button buy-button-id={buyButtonId} publishable-key={publishableKey}></stripe-buy-button>
);
