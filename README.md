# bounty-server
Simple node.js express server used bug bounty POCs.

**Requirements**
Must install node.js v6+ (supporting ES6)

**Install**
```
npm install
```

**Start Server:**
```
npm start
```

**Display files in /captured directory:**
```
http://localhost:9000/
```

**Example request that writes query string to file:**
```
http://localhost:9000/c/?c=my-captured-string
```