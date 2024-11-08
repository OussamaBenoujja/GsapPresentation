
# HERE [Canva Presentation link](https://www.canva.com/design/DAGV0gdDBzM/V3iF8I1XSwooAogK2bDPNw/edit)

## Done by me OussamaBenoujja and Mohhamed Dadssi AbdekHak


# GSAP Animation Guide

## Introduction
GSAP (GreenSock Animation Platform) is a powerful JavaScript library for creating high-performance animations. This guide covers the most common GSAP variables and properties used for animations.

## Setup
To use GSAP, add the following CDN to your project:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.1/gsap.min.js"></script>
```

Or install it using npm:

```bash
npm install gsap
```

## Duration & Timing
- **`duration`**: Specifies the duration of the animation in seconds.
    ```javascript
    gsap.to("#box", { duration: 2, x: 100 });
    ```

- **`delay`**: Delays the start of the animation by a specified number of seconds.
    ```javascript
    gsap.to("#box", { x: 100, duration: 2, delay: 1 });
    ```

- **`repeat`**: The number of times the animation should repeat. Use `-1` for infinite loops.
    ```javascript
    gsap.to("#box", { repeat: 2, x: 100, duration: 2 });
    ```

- **`yoyo`**: When set to `true`, the animation will reverse back to the start after completing. Often used with `repeat`.
    ```javascript
    gsap.to("#box", { repeat: -1, yoyo: true, x: 100, duration: 1 });
    ```

- **`repeatDelay`**: Adds a delay before each repeat.
    ```javascript
    gsap.to("#box", { repeat: 2, repeatDelay: 1, x: 100, duration: 2 });
    ```

## Easing
- **`ease`**: Defines the easing function for the animation (e.g., `"linear"`, `"power1.out"`, `"bounce.in"`, etc.).
    ```javascript
    gsap.to("#box", { x: 100, ease: "bounce.out", duration: 2 });
    ```

- **`easeParams`**: Allows you to specify parameters for certain easing functions.
    ```javascript
    gsap.to("#box", { x: 100, ease: "elastic.out(1, 0.3)", duration: 2 });
    ```

## Animation Properties
- **`x`, `y`, `z`**: Translates the object along the X, Y, and Z axes (2D or 3D).
    ```javascript
    gsap.to("#box", { x: 200, y: 100, duration: 2 });
    ```

- **`rotation`**: Rotates the element (in degrees).
    ```javascript
    gsap.to("#box", { rotation: 45, duration: 1 });
    ```

- **`scale`**: Scales the element (either uniformly or individually on X and Y axes).
    ```javascript
    gsap.to("#box", { scale: 1.5, duration: 2 });
    ```

- **`opacity`**: Controls the opacity (transparency) of the element.
    ```javascript
    gsap.to("#box", { opacity: 0.5, duration: 2 });
    ```

- **`skewX`, `skewY`**: Skews the element along the X or Y axis.
    ```javascript
    gsap.to("#box", { skewX: 30, skewY: 15, duration: 2 });
    ```

- **`stagger`**: Stagger the start time of a group of elements.
    ```javascript
    gsap.to(".box", { x: 100, stagger: 0.1, duration: 2 });
    ```

## Positioning
- **`xPercent`, `yPercent`**: Moves the element by a percentage of its width and height.
    ```javascript
    gsap.to("#box", { xPercent: 50, yPercent: 50, duration: 2 });
    ```

- **`left`, `top`, `right`, `bottom`**: Positions the element relative to the container's edges (works with `position: absolute`).
    ```javascript
    gsap.to("#box", { left: "50%", top: "50%", duration: 2 });
    ```

## Transform Origin
- **`transformOrigin`**: Defines the origin of transformation (like rotation or scaling).
    ```javascript
    gsap.to("#box", { transformOrigin: "top left", rotation: 45, duration: 1 });
    ```

## Other Properties
- **`backgroundColor`, `color`, `borderColor`**: Animates the colors of properties.
    ```javascript
    gsap.to("#box", { backgroundColor: "#ff0000", duration: 2 });
    ```

- **`boxShadow`**: Animates the `box-shadow` CSS property.
    ```javascript
    gsap.to("#box", { boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.5)", duration: 2 });
    ```

- **`clipPath`**: Animates the `clip-path` property (for masking).
    ```javascript
    gsap.to("#box", { clipPath: "circle(50%)", duration: 2 });
    ```

- **`scrollTop`, `scrollLeft`**: Scrolls an element horizontally or vertically.
    ```javascript
    gsap.to("#container", { scrollTop: 300, duration: 2 });
    ```

## Advanced Timeline Variables
- **`onStart`**, **`onUpdate`**, **`onComplete`**: Callbacks to execute during the animation.
    ```javascript
    gsap.to("#box", { x: 100, duration: 2, onStart: function() { console.log("Start!"); } });
    ```

- **`paused`**: Determines whether the animation starts paused (useful for manual control).
    ```javascript
    gsap.to("#box", { x: 100, duration: 2, paused: true });
    ```

- **`immediateRender`**: Controls whether the animation renders immediately after being created.
    ```javascript
    gsap.to("#box", { x: 100, duration: 2, immediateRender: false });
    ```

- **`overwrite`**: Determines how animations should behave if they overwrite other animations (options include `'auto'`, `'none'`, and `'all'`).
    ```javascript
    gsap.to("#box", { x: 100, duration: 2, overwrite: 'auto' });
    ```

## Other Useful Timeline Controls
- **`repeatDelay`**: Delay between repeats.
- **`paused`**: Start the timeline paused and control it manually.
- **`progress`**: Defines the progress of the animation (from 0 to 1).
    ```javascript
    tl.progress(0.5);  // Sets the timeline progress to halfway.
    ```

- **`timeScale`**: Adjusts the speed of the animation timeline.
    ```javascript
    tl.timeScale(2);  // Speeds up the animation.
    ```

- **`seek`**: Moves the timeline to a specific point in time.
    ```javascript
    tl.seek(1);  // Move to 1 second in the timeline.
    ```
# GSAP Timeline Guide

## Introduction
A **Timeline** in GSAP (GreenSock Animation Platform) allows you to sequence and control multiple animations together. It provides an easy way to create complex animations with synchronized timing, delays, and callbacks.

## Creating a Timeline
To create a new timeline, use `gsap.timeline()`. You can then chain multiple animations to it using the `.to()`, `.from()`, and `.fromTo()` methods.

```javascript
const tl = gsap.timeline(); // Create a new timeline

tl.to("#box", { x: 100, duration: 1 })  // Move box to x=100 over 1 second
  .to("#box", { y: 100, duration: 1 })  // Move box to y=100 over 1 second
  .to("#box", { rotation: 360, duration: 1 });  // Rotate box 360 degrees over 1 second
```

In this example, the `#box` will:
1. Move horizontally to `x: 100`,
2. Move vertically to `y: 100`,
3. Rotate 360 degrees.

## Adding Delays Between Animations
You can add delays between animations using the `delay` property.

```javascript
const tl = gsap.timeline();

tl.to("#box", { x: 100, duration: 1 })
  .to("#box", { y: 100, duration: 1, delay: 0.5 })  // Adds a delay of 0.5 seconds
  .to("#box", { rotation: 360, duration: 1 });
```

In this case, the second animation (moving vertically) starts after a 0.5-second delay.

## Controlling the Timeline
You can control the timeline in several ways:

- **Pause**: Stops the timeline at its current position.
  ```javascript
  tl.pause(); // Pauses the timeline
  ```

- **Play**: Starts or resumes the timeline.
  ```javascript
  tl.play(); // Plays the timeline
  ```

- **Reverse**: Reverses the timeline from its current position.
  ```javascript
  tl.reverse(); // Reverses the timeline
  ```

- **Seek**: Jumps to a specific point in the timeline.
  ```javascript
  tl.seek(1);  // Jump to 1 second in the timeline
  ```

- **TimeScale**: Adjusts the speed of the timeline (e.g., make it 2x faster).
  ```javascript
  tl.timeScale(2);  // Speeds up the timeline
  ```

## Callback Functions
Timelines allow you to add callbacks to trigger functions at specific points in the animation.

- **onStart**: Runs when the animation starts.
- **onUpdate**: Runs continuously during the animation.
- **onComplete**: Runs when the animation finishes.

```javascript
const tl = gsap.timeline({
  onStart: () => console.log("Animation started"),
  onComplete: () => console.log("Animation completed")
});

tl.to("#box", { x: 100, duration: 1 })
  .to("#box", { y: 100, duration: 1 });
```

## Staggering Animations
You can stagger animations for multiple elements using the `stagger` property. This adds a delay between each element's animation.

```javascript
const tl = gsap.timeline();

tl.to(".box", { x: 100, stagger: 0.2, duration: 1 }); // Stagger animations with 0.2s delay
```

In this example, all `.box` elements will move to `x: 100`, but each one will have a 0.2-second delay before starting.

## Adding Labels
Labels allow you to mark specific points in the timeline. You can jump to these points later or add animations relative to them.

```javascript
const tl = gsap.timeline();

tl.to("#box", { x: 100, duration: 1 });
tl.add("middle");  // Add label at this point
tl.to("#box", { y: 100, duration: 1 });

tl.to("#box", { rotation: 360, duration: 1 }, "middle"); // Start animation from the "middle" label
```

## Example of Full Timeline Usage
```javascript
const tl = gsap.timeline({ repeat: -1, yoyo: true }); // Infinite loop with yoyo effect

tl.to("#box", { x: 200, duration: 1 })
  .to("#box", { y: 200, duration: 1 })
  .to("#box", { rotation: 360, duration: 1 })
  .to("#box", { opacity: 0, duration: 1 });
```

### Explanation:
1. The box moves to `x: 200`,
2. Then moves to `y: 200`,
3. Rotates 360 degrees,
4. Fades out (opacity goes to 0).

The animation then repeats infinitely with a "yoyo" effect, meaning it reverses after completing each cycle.

## Conclusion
GSAP Timelines make it easy to manage complex animations by allowing you to control multiple animations in sequence, apply delays, add labels, and even synchronize animations with precise control. Timelines provide a cleaner and more maintainable way to create animations, especially when working with multiple elements or when needing to coordinate complex movements.
