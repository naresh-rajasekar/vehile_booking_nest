-- create database vehicle_booking;
-- use vehicle_booking;
-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
create table wheeltypetbl(
	id int auto_increment,
    wheelType varchar(255) not null,
    primary key(id)
);

insert into wheeltypetbl (id, wheeltype) values
(1, '2'),
(2,'4');
commit;

create table vehicletypetbl(
	id int auto_increment,
	vehicleName varchar(255),
    wheelTypeId int,
    primary key(id),
    foreign key (wheelTypeId) references wheeltypetbl(id) on delete cascade
      
);

insert into vehicletypetbl (id , vehicleName, wheelTypeId) values
(1, 'sports', 1),
(2, 'cruiser', 1),
(3, 'sedan', 2),
(4, 'suv', 2),
(5, 'hatchback', 2);
commit;
create table modelnametbl(
	id int auto_increment,
    modelName varchar(255),
    vehicleTypeId int ,
    primary key(id),
    foreign key (vehicleTypeId) references vehicletypetbl(id) on delete cascade
);

insert into modelnametbl (id, modelName, vehicleTypeId) values 
(1, 'Ducati', 1 ),
(2, 'Ktm', 1 ),
(3, 'Aprilla', 1 ),
(4,'Avengers',2),
(5,'Bobber',2),
(6,'Meteor',2),
(7, 'Honda City', 3),
(8, 'Volkswagen Virtus', 3),
(9, 'Hyundai Accent', 3),
(10, 'Hyundai Creta', 4),
(11, 'Toyota Fortuner', 4),
(12, 'Ford Explorer', 4),
(13,'Maruti Swift', 5),
(14,'Hyundai i20', 5),
(15,'Ford Fiesta', 5);
commit;