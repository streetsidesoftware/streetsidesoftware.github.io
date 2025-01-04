import Reach from 'react';

export const publishableKey = 'pk_live_51PnKbmGrYcG8NVg5hH583GvfdZi0FBx45TMymYQxpgTDcYKHUAIFW4n63G1stzqp2TXynE2fAnZc3Bpvo7L9t9f900ZDB0VHOm'; // cspell:disable-line

export const StripePricingTable = ({ tableId }) => (
  <stripe-pricing-table pricing-table-id={tableId} publishable-key={publishableKey}></stripe-pricing-table>
);

/*
<script async src="https://js.stripe.com/v3/pricing-table.js"></script>
<stripe-pricing-table pricing-table-id="prctbl_1QdZ0KGrYcG8NVg5zPI9NOgd"
publishable-key="pk_live_51PnKbmGrYcG8NVg5hH583GvfdZi0FBx45TMymYQxpgTDcYKHUAIFW4n63G1stzqp2TXynE2fAnZc3Bpvo7L9t9f900ZDB0VHOm">
</stripe-pricing-table>
*/
