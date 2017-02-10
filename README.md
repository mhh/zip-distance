# zip-distance
Calculate distance between ZIP code pairs.

# Get Started
`npm install`

# Usage
zip-distance expects input as comma-separated pairs of 5-digit ZIP codes, one pair per line, from `stdin`. For example:

```sh
$ node index.js
30303,10001
30303 to 10001: 746 miles
```

or

```sh
$ echo 00501,99950 | node index.js
00501 to 99950: 2789 miles
```
