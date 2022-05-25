create database blame;

\c blame;

create table postagem(
    codigo uuid primary key,
    autor VARCHAR(30) NOT NULL,
    descricao VARCHAR(100) NOT NULL,
    imagem VARCHAR(100) NOT NULL
);

insert into postagem values(
    '0b31dcf5-dddf-4639-8f43-b9989b7cf1a3',
    'pedro',
    'lorem ipsum dolor asimet',
    'https://picsum.photos/800/800?random=1'
);1

select * from postagem;

delete from postagem where id = '0b31dcf5-dddf-4639-8f43-b9989b7cf1a3'; 