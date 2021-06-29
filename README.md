# Image Services Practical task

Your task is to write tests for and write a function to determine if a given triangle fits in another triangle.

The function should take the dimensions of two triangles (as arrays) and checks if the first triangle fits into the second one.

### Examples

```ts
doesTriangleFit([1, 1, 1], [1, 1, 1]); // true

doesTriangleFit([1, 1, 1], [2, 2, 2]); // true

doesTriangleFit([1, 2, 3], [1, 2, 2]); // false

doesTriangleFit([1, 2, 4], [1, 2, 6]); // false
```

### Notes

- Triangle fits if it has the same or smaller size as the hole.
- The function should return false if the triangle with that dimensions is not possible.
- Googling is allowed. And just in case you get stuck - a hint that IMHO [this simple PNP algorithm](https://wrf.ecse.rpi.edu/Research/Short_Notes/pnpoly.html) can be quite handy for this.
