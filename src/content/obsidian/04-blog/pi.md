Authors: Kiman Heng, Sliden
Type: #type/blog 
Area: #area/mathematics

---
# $\pi$
$$\text{$\pi$ (pronounced pī) is one of the most well-known mathematical constant, }$$
$$\text{represents the ratio of a circle’s circumference to its diameter.}$$
$$\text{$\pi$ is an irrational number, equals to 3.1415926…}$$  
\
$$\text{In celebration of Pi Day (3.14), we have written about $\pi$}$$
$$\text{by the many things that $\pi$ equals to.}$$

# Polygons: Archimedes
Around the 250 BCE, [Archimedes](https://en.wikipedia.org/wiki/Archimedes) found an ingenious way to approximate π using polygons. He began by inscribing a regular hexagon (six-equally-sided polygon) inside a circle and then circumscribing another regular hexagon outside the same circle. 
<img src="https://raw.githubusercontent.com/Sliden101/brain/main/src/assets/09-media/polygon.webp" alt="polygon"/>

By calculating the exact circumferences and diameters of these hexagons, then divide the circumferences by the diameters, he obtained a rough approximation of π. It equals to an average of 3.14158, a five digits accuracy in today's world. 

But he didn't stop there. Archimedes continued this process with polygons of increasing sides. As he doubled the number of polygon sides, he obtained closer approximations for π.
At 1536 sides, he achieved the first six digits of π: 3.14159, a six digits accuracy in today's world.

To see how inscribing a regular polygon inside a circle help us approximate π, check out the following: [Approximating Pi with Inscribed Polygons - Wolfram](https://demonstrations.wolfram.com/ApproximatingPiWithInscribedPolygons/) 


### Modern Formula
$$\pi = \lim_{n\to +\infty} n\sin(\frac{180\textdegree}{n}) \$$
[A Geometrical Derivation of π (Pi)](https://www.iosrjournals.org/iosr-jm/papers/Vol11-issue6/Version-1/D011611922.pdf)

$$\text{$n$ is the number of sides of the polygons.}$$

For ten million sides, we obtain 3.141592653589741, a 14 digits accuracy.

# Newton’s Formula

In 1666, Newton computed 16 digits of π by constructing a geometric figure in which the value of pi is related to the numerical approximation of an integral. Newton approximated the integral by expanding a function in an infinite series, truncating the series at 22 terms, and evaluating each term by using long division. Although the formulation and general idea is accessible to calculus students, the calculations are long and tedious. Instead, you can use modern numerical methods to evaluate the integral, thus computing a 14-digit approximation to π. 

<img src="https://github.com/Sliden101/brain/blob/main/src/assets/09-media/newton.png?raw=true" alt="newton"/>

From the figure, we see that Area(OCB) = M + Area(ABC). 
Plugging in the formulas for these quantities, we getπ /24 = M + sqrt(3)/32. 
Multiplying both sides by 24 gives the equation that Newton used to approximate π:
$$π = 24*M + 3 \frac{\sqrt{3}}{4}$$

Newton approximated M to many decimal places, thus providing a decimal approximation for π. Newton used a truncated infinite series expansion to approximate M

By using modern computational techniques, you can evaluate the integral (M) numerically. If you evaluate M to high precision, you get a high-precision approximation for π. 
[Newton](https://colab.research.google.com/gist/Sliden101/90cc3c4420756218168954586e98c951/newton.ipynb)

# Probabilty: Buffon’s Needle Problem
Buffon's Needle Problem is like a game where you drop tiny needles randomly onto a floor with evenly spaced parallel lines. The challenge is to figure out how often these needles will cross one of those lines.

Imagine you're dropping spaghetti sticks on a kitchen floor with tiles. If the spaghetti is shorter than the width of the tiles, it's unlikely to cross over any lines between the tiles. But if it's longer, it might cross a line.

Mathematicians found that by counting how many times the spaghetti crosses a line compared to how many times you drop it, they can estimate the value of π. It's a bit like figuring out the size of the kitchen tiles by just dropping spaghetti sticks and seeing where they land.

This "game" helps mathematicians understand probabilities and also gives us a clever way to estimate the value of π without needing to measure circles directly.

[Buffon's needle monte carlo simulation](https://colab.research.google.com/gist/Sliden101/9ba38be686478e2ab864f357f677ff52/buffon-needle-simulation.ipynb)
<img src="https://github.com/Sliden101/brain/blob/main/src/assets/09-media/buffon.png?raw=true" alt="Buffon"/>

# Epilogue 

To all digits of π we ever see, whether it is in hundreds, trillions or zillions, they are still an approximation, because π was, still is and will always be irrational.
