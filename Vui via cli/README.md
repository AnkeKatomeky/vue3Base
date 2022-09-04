# modal-project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

this.$refs - referense for any item with ref="something"
```
<input type="text" ref="name" /> - here a atr
this.$refs.name - ist a ref
```

Build Docker
```
docker build -t docker.placeholder.pro/pairgame:latest -t docker.placeholder.pro/pairgame:<version> .
docker push docker.placeholder.pro/pairgame:latest
docker push docker.placeholder.pro/pairgame:<version>
```

Run Docker
```
docker run -it -p 8080:80 --rm --name pairgame docker.placeholder.pro/pairgame:latest
```