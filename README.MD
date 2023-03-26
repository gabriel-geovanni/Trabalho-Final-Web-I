# **CSI606-2021-02 - Remoto - Trabalho Final - Resultados**

## _Aluno: Gabriel Geovanni Moreira Silva_

---

### Resumo

O projeto consiste em um serviço de reserva de salas para reunião do ICEA, ele permite o agendamento do dia e hora da salas disponíveis.

---

## Funcionalidades implementadas

- Login com autenticação google;
- Visualização das salas disponíveis
- Visualização das reservas cadastradas em casa sala
- Realização da reserva (dia e horário de uso)


---

## Funcionalidades previstas e não implementadas

- Usuário administrador para gerenciamento das salas.

- Convite por e-mail as pessoas relacionadas à reunião

---

## Principais desafios e dificuldades

As principais dificuldades encontradas no desenvolvimento do projeto foi a falta de familiaridade com o _TypeScript_ e o _React_. Tenho pouco experiência com desenvolvimento _frontend_ e isso acarretou um tempo considerável para o desenvolvimento.

---

## Instruções para instalação e execução


Para clonar e rodar essa aplicação é necessário ter o git, docker, node v18.14.2 ou superior instalados na sua máquina.

```
# Clone o repósitório
$ git clone https://github.com/gabriel-geovanni/Trabalho-Final-Web-I.git

# Acesse a pasta do repositório
$ cd atividade-pratica
```

```
# Crie o container PostgreSQL
$ sudo docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres
```

```
# Acesse o terminal do docket
$ docker exec -it pg bash

# Acesse o container PostgreSQL criado
$ psql -U root

# Então crie o banco de dados utilizando os comandos do arquivo scheme.sql
```

Servidor:

```
# Acesse a pasta server
$ cd server

# Instale as depencências
$ npm install or yarn

# Rode o servidor
$ yarn start

```
Web:

```

# Acesse a pasta web
$ cd web

# Instale as depencências
$ npm install or yarn

# Rode a web
$ yarn dev