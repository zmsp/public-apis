This was build using react tempalte from https://github.com/devias-io/react-material-dashboard

I modified the project to make the pages dynamic by using public API from here https://api.publicapis.org/

Page should be a

## Installation / Running

_for dev_

```sh
git clone <repository-url>

# change into the new directory
npm install

npm start # will run the app

# Visit the app at http://localhost:3000
```

_for test_

```
npm run test
```

_for Production_

```sh
npm run build

cd build

# start a static server serving ./build dir, eg node serve/http-server or serve in express using express.static
serve -s build
```