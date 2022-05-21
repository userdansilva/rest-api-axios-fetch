# YouTube userdansilva

[Link do Vídeo](https://youtu.be/4s8uvDcE4zk)

Nesse vídeo expliquei como é realizado o consumo de uma REST API através de dois métodos: o fetch e com a lib Axios

### `Fetch`

```JS
fetch("https://domain.com/posts")
  .then(data => data.json())
  .then(data => console.log(data))
```

### `Axios`

```JS
const api = axios.create({
  baseUrl: "https://domain.com"
})

api.get("/posts")
  .then(res => res.data)
  .then(data => console.log(data))
```
