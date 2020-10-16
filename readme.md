# Eagro Todo List
Aplicação para gerenciar tarefas com api com backend em Ruby on Rails e frontend com VueJS
 
 <!-- <img width="790"  src="https://github.com/alessandroprudencio/My-Lung/blob/master/preview_system.gif" /> -->

## Vamos começar!

Essas instruções fornecerão uma cópia do projeto em execução na sua máquina local, para fins de desenvolvimento e teste. Consulte me  para obter notas sobre como implantar o projeto em produção.


### Pré-requisitos

O que você precisa para instalar o software

```
node.js ^12.16.3
npm
rails ^5.1.3
ruby ^2.3.3
PostgreSQL
```

### Instalação

```
git clone https://github.com/alessandroprudencio/Eagro-Todo-List.git
```

```
cd Eagro-Todo-List/api 
```

Insira os dados de login de acesso ao seu banco de dados e o nome de seu banco  no arquivo api/config/database.yml

Agora crie o seu banco de dados com o nome escolhido anteriormente

agora o rode os comandos abaixo:

```
bundle install
```

```
rails db:migrate
```

```
rails db:seed
```

```
rails server
```

Pronto a api estara rodando...

Agora abra outro bash para iniciar o frontend

```
cd cd Eagro-Todo-List/frontend
```

```
npm install
```

```
npm run serve
```

Pronto sua aplicação estará  rodando...


# API endpoints

## GET TASKS
`http://localhost:3000/api/v1/task` 
<br/>

## GET TASK BY ID
`http://localhost:3000/api/v1/task/:id` 


## POST TASK
`http://localhost:3000/api/v1/task/
{
	"title": "Buy food: milk, bread, fruits"
}
`

## PUT TASK
`http://localhost:3000/api/v1/task/:id
{
	"title": "teste",
    "done": false
}
`

## DELETE TASK
`http://localhost:3000/api/v1/task/:id`
___


## Construído com

* [Ruby on Rails](https://rubyonrails.org/)
* [Node JS](https://nodejs.org/)
* [npm](https://www.npmjs.com/)
* [Vuejs](https://vuejs.org/)

## Contribuição

Faça um Fork do projeto
Crie uma Branch para sua Feature (git checkout -b feature/FeatureIncrivel)
Adicione suas mudanças (git add .)
Comite suas mudanças (git commit -m 'Adicionando uma Feature incrível!)
Faça o Push da Branch (git push origin feature/FeatureIncrivel)
Abra um Pull Request

## Author

* Alessandro Prudencio 
* alessandroconectado@gmail.com
* +55 (67) 99269-6705
* [Linkedin](https://www.linkedin.com/in/alessandro-prudencio/)


