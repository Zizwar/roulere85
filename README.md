

1- https://deno.land/#installation

2- clone: 
```sh 
git clone https://github.com/Zizwar/cveno 
```

## run
 - terminal
```sh
$ deno run --allow-net --allow-read main.ts
or
$ deno run -A --watch=static/,routes/ dev.ts
```
 - docker 
 ```sh
$ docker build -t app . && docker run -it --init -p 1993:1993 app
```
- change data cv 
 ```
 ./utils/db.json
```
```json
{
  
}
```

