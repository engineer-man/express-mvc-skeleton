create database if not exists testdb;

use testdb;

create table posts (
    post_id int unsigned not null auto_increment,
    title varchar(128) not null,
    content text not null,
    created_at datetime not null,
    primary key (post_id)
) character set utf8mb4 collate utf8mb4_unicode_ci;

insert into posts values (default, 'First Title', 'First Content', now());
insert into posts values (default, 'Second Title', 'Second Content', now());
