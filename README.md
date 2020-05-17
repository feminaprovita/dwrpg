# Scattergories
Just a simple script for printing a dozen DIY Scattergories categories to the terminal.

Seed file includes official Scattergories categories, as well as numerous random
ones. I encourage you, on your local system, to to edit `seed.js` with things particular
to your family/group (mine are at the bottom, commented out below `// my family categories`).

Designed for screenshare on family zoom calls.

# How to play

1. Clone to your local system, and navigate to that folder in your terminal.
2. Set up screen to share, split between terminal window and timer (set for 3-5
minutes per round, your choice).
3. Run `node play.js` in the terminal.
4. Eyeball list to confirm there are no thematic duplicates†, and you're willing
to play with this letter‡, and start the timer.
5. Play [Scattergories](https://en.wikipedia.org/wiki/Scattergories#Gameplay)!

† This script is not intelligent; it's just a randomizer, and as such it can prevent
"Things that are cold" from coming up twice in one round, but it cannot prevent
"Fictional characters" and "Literary characters" from coming up together. Just
initiate a new game.

‡ The original game uses a 20-sided die, and as such eliminates the following letters:
QUVXYZ. I have left them in, but if you want to remove them, simply remove the `/*`
and `*/` around lines 11-14 in `play.js`.
