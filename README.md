# Image Services Practical task 1

![Shapes and holes](https://images-na.ssl-images-amazon.com/images/I/51vYrk2IVLL._AC_SY450_.jpg)

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
- Googling is allowed.

# Practical task 2

You have the same problem as described in Task 1, except instead of triangle edge lengths - your function should accept triangle point coordinates.

### Example

```ts
// https://www.geogebra.org/calculator/q4jqxdt3
doesTriangleFit(
	[
		[4, 2],
		[4, 3],
		[6, 3],
	],
	[
		[1, 2],
		[4, 4],
		[7, 1],
	]
); // false
```

And just in case you get stuck - a hint that IMHO [this simple PNP algorithm](https://wrf.ecse.rpi.edu/Research/Short_Notes/pnpoly.html) can be quite handy for this.
