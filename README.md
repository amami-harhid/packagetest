# packagetest
github package public test

# make .npmrc

make .npmrc  

```:.npmrc
@amami-harhid:registry=https://npm.pkg.github.com/
```

# build
change directory to index.html directory

```
npx parcel index.html --open --dist-dir /dist
```