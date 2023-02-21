There are some interesting things to note here:

1. There is a closed endpoint that returns `coeffs`.
2. Setting the operation changes some "hidden" field values.
  - You can see it in the switch/case logic in `fields.component.ts` 
  - Hidden fields are marked at the bottom of `fields.ts`
  - These values are revealed when you print results to paper.