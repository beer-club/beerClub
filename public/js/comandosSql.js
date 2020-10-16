/*Adicionar Tipo de produto*/

/*
USE beerclub;
INSERT INTO productTypes (typeCode, typeName, createdAt, updatedAt) VALUES (1, 'Cerveja', NOW(), NOW());
INSERT INTO productTypes (typeCode, typeName, createdAt, updatedAt) VALUES (2, 'Assinatura', NOW(), NOW());
INSERT INTO productTypes (typeCode, typeName, createdAt, updatedAt) VALUES (3, 'Kits', NOW(), NOW());
INSERT INTO productTypes (typeCode, typeName, createdAt, updatedAt) VALUES (4, 'Acessorios', NOW(), NOW());
SELECT * from productTypes;
*/

/*Adicionar Tipo de cerveja*/
/*
USE beerclub;
INSERT INTO kindBeers (kindCode, kindNAme, createdAt, updatedAt) VALUES (1, 'IPA', NOW(), NOW());
INSERT INTO kindBeers (kindCode, kindNAme, createdAt, updatedAt) VALUES (2, 'Trigo', NOW(), NOW());
INSERT INTO kindBeers (kindCode, kindNAme, createdAt, updatedAt) VALUES (3, 'Lager', NOW(), NOW());
SELECT * from kindBeers;
*/

/*Adicionar Produtos Cervejas*/
/*
USE beerclub;
INSERT INTO products (productCode, productName, price, imagem, kindBeers_kindCode, productTypes_typeCode, createdAt, updatedAt) VALUES (1, 'Cerveja Antuérpia American IPA 500ml', 19.50, 'https://emporiodacerveja.vtexassets.com/arquivos/ids/175135-176-176?width=176&height=176&aspect=true', 1, 1, NOW(), NOW());
INSERT INTO products (productCode, productName, price, imagem, kindBeers_kindCode, productTypes_typeCode, createdAt, updatedAt) VALUES (2, 'Cerveja Brooklyn Eats IPA 350ml', 15.90, 'https://emporiodacerveja.vtexassets.com/arquivos/ids/174343-176-176?width=176&height=176&aspect=true', 1, 1, NOW(), NOW());
INSERT INTO products (productCode, productName, price, imagem, kindBeers_kindCode, productTypes_typeCode, createdAt, updatedAt) VALUES (3, 'Cerveja Madalena IPA 355ml', 13.52, 'https://emporiodacerveja.vtexassets.com/arquivos/ids/174792-176-176?width=176&height=176&aspect=true', 1, 1, NOW(), NOW());
INSERT INTO products (productCode, productName, price, imagem, kindBeers_kindCode, productTypes_typeCode, createdAt, updatedAt) VALUES (4, 'Cerveja Goose Island Midway 355ml', 9.99, 'https://emporiodacerveja.vtexassets.com/arquivos/ids/172313-176-176?width=176&height=176&aspect=true', 1, 1, NOW(), NOW());
INSERT INTO products (productCode, productName, price, imagem, kindBeers_kindCode, productTypes_typeCode, createdAt, updatedAt) VALUES (5, 'Cerveja Brewdog Clockwork Tangerine 330ml', 25.90, 'https://emporiodacerveja.vtexassets.com/arquivos/ids/176649-176-176?width=176&height=176&aspect=true', 1, 1, NOW(), NOW());
INSERT INTO products (productCode, productName, price, imagem, kindBeers_kindCode, productTypes_typeCode, createdAt, updatedAt) VALUES (6, 'Cerveja Dom Casmurro IPA 600ml', 19.90, 'https://emporiodacerveja.vtexassets.com/arquivos/ids/175813-176-176?width=176&height=176&aspect=true', 1, 1, NOW(), NOW());
SELECT * from products;
*/

/*Adicionar Produtos Kits*/
/*
USE beerclub;
INSERT INTO products (productCode, productName, price, imagem, kindBeers_kindCode, productTypes_typeCode, createdAt, updatedAt) VALUES (7, 'Kit Colorado', 39.90, 'https://emporiodacerveja.vtexassets.com/arquivos/ids/174824-176-176?width=176&height=176&aspect=true', 1, 3, NOW(), NOW());
INSERT INTO products (productCode, productName, price, imagem, kindBeers_kindCode, productTypes_typeCode, createdAt, updatedAt) VALUES (8, 'Kit Top sellers', 63.85, 'https://emporiodacerveja.vtexassets.com/arquivos/ids/176792-176-176?width=176&height=176&aspect=true', 1, 3, NOW(), NOW());
INSERT INTO products (productCode, productName, price, imagem, kindBeers_kindCode, productTypes_typeCode, createdAt, updatedAt) VALUES (9, 'Kit Corona Blaster', 329.78, 'https://emporiodacerveja.vtexassets.com/arquivos/ids/177049-176-176?width=176&height=176&aspect=true', 1, 3, NOW(), NOW());
INSERT INTO products (productCode, productName, price, imagem, kindBeers_kindCode, productTypes_typeCode, createdAt, updatedAt) VALUES (10, 'Kit Patagonia', 49.90, 'https://emporiodacerveja.vtexassets.com/arquivos/ids/175796-176-176?width=176&height=176&aspect=true', 1, 3, NOW(), NOW());
INSERT INTO products (productCode, productName, price, imagem, kindBeers_kindCode, productTypes_typeCode, createdAt, updatedAt) VALUES (11, 'Kit Goose Island', 69.90, 'https://emporiodacerveja.vtexassets.com/arquivos/ids/175380-176-176?width=176&height=176&aspect=true', 1, 3, NOW(), NOW());
INSERT INTO products (productCode, productName, price, imagem, kindBeers_kindCode, productTypes_typeCode, createdAt, updatedAt) VALUES (12, 'Kit Madalena', 47.92, 'https://emporiodacerveja.vtexassets.com/arquivos/ids/177490-176-176?width=176&height=176&aspect=true', 1, 3, NOW(), NOW());
SELECT * from products;
*/

/*Adicionar Produtos Acessorios*/
/*
USE beerclub;
INSERT INTO products (productCode, productName, price, imagem, kindBeers_kindCode, productTypes_typeCode, createdAt, updatedAt) VALUES (13, 'Copo Budweiser FIFA', 2.90, 'https://emporiodacerveja.vtexassets.com/arquivos/ids/170057-176-176?width=176&height=176&aspect=true', 1, 4, NOW(), NOW());
INSERT INTO products (productCode, productName, price, imagem, kindBeers_kindCode, productTypes_typeCode, createdAt, updatedAt) VALUES (14, 'Camiseta Corona', 59.90, 'https://emporiodacerveja.vtexassets.com/arquivos/ids/177964-176-176?width=176&height=176&aspect=true', 1, 4, NOW(), NOW());
INSERT INTO products (productCode, productName, price, imagem, kindBeers_kindCode, productTypes_typeCode, createdAt, updatedAt) VALUES (15, 'Frigobar Colorado 37L', 1590, 'https://emporiodacerveja.vtexassets.com/arquivos/ids/173882-176-176?width=176&height=176&aspect=true', 1, 4, NOW(), NOW());
INSERT INTO products (productCode, productName, price, imagem, kindBeers_kindCode, productTypes_typeCode, createdAt, updatedAt) VALUES (16, 'Abridor Budweiser', 14.90, 'https://emporiodacerveja.vtexassets.com/arquivos/ids/169941-176-176?width=176&height=176&aspect=true', 1, 4, NOW(), NOW());
INSERT INTO products (productCode, productName, price, imagem, kindBeers_kindCode, productTypes_typeCode, createdAt, updatedAt) VALUES (17, 'Balde Budweiser', 89.90, 'https://emporiodacerveja.vtexassets.com/arquivos/ids/175292-176-176?width=176&height=176&aspect=true', 1, 4, NOW(), NOW());
INSERT INTO products (productCode, productName, price, imagem, kindBeers_kindCode, productTypes_typeCode, createdAt, updatedAt) VALUES (18, 'Balde Bohemia Aura Lager', 31.96, 'https://emporiodacerveja.vtexassets.com/arquivos/ids/175292-176-176?width=176&height=176&aspect=true', 1, 4, NOW(), NOW());
SELECT * from products;
*/


