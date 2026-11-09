# Neon Snake — v1.2.0 The Shrink Update 🐍

**The Shrink Update** — official v1.2.0 build approved for release.

## Play

Open `index.html` in a modern desktop or mobile browser. No installation or internet connection is required.

- **Move:** Arrow keys or WASD (swipe or directional buttons on mobile)
- **Pause:** Space
- **Restart:** Restart button

## Mechanics

- **Food:** +1 point and +1 segment. During Boost, +2 points.
- **Normal speed:** fixed at 7.5 cells per second.
- **Boost:** fixed at 10 cells per second for 10 seconds, with a light trail and ×2 Food score. A golden bolt spawns roughly every 35 seconds of active play, lasting 8 seconds on the board. No stacking.
- **Shrink:** removes 50% of the snake's length, rounding remaining segments up, never below 3. It stays on the board for 5 seconds.
- **Shrink RNG:** checks when Food is eaten, only after the snake reaches 60 segments and meets the growth requirement. Chances per eligible Food: 3% for the first collected Shrink, 2% for the second, 1% for the third, 0.5% thereafter. Only one Shrink can be present at a time. After collecting a Shrink, the snake must grow another 30 segments before becoming eligible again (and must have at least 60 segments).
- **Pause:** freezes all in-game timers.
- **Best score:** uses a separate record from v1.1.0 because the scoring system has changed.

## Publishing

Publish the `index.html` and `README.md` files to the repository root on the `main` branch. Then create tag `v1.2.0` targeting that commit.

Hadryn Games · 2026
