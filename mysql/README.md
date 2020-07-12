# My SQL Guide

step by step guide for learning mysql from beginner  to advance .

## Connect to mysql in command line
```
    mysql -u [username] -p;
```
> u means username and p means password

## create a new database
```
    CREATE DATABASE  database_name;
```

## Show all available databases
```
    SHOW DATABASE;
```

## Use a database
```
    USE database_name;
```
> select the newly created database or change the current database to another database 

## Drop a database
```
    DROP DATABASE database_name;
```
## Show all tables
```
    SHOW TABLES;
```
> Show all tables in a current database.

## create new table
```
    CREATE TABLE table_name (     
    column1 datatype,
    column2 datatype,
    ...
);
```
## Drop a table
```
    DROP TABLE table_name;
```

## Add a new column into a table
```
    ALTER TABLE table_name        
	ADD column column_name datatype;
```

## Raname table name
```
    ALTER TABLE table_name
	RENAME TO new_table_name;
```
## Rename column name in table
```
    ALTER TABLE table_name
	Change column1 column2 datatype;
```
`OR` also can  be written as:
```
    ALTER TABLE table_name
	CHANGE COLUMN old_name TO new_name;
```


## Drop a column from a table:
```
    ALTER TABLE table_name	
    DROP COLUMN column_name;
```

## Change the datatype of a column in a table
```
    ALTER TABLE table_name	
    MODIFY COLUMN column_name datatype;
```
## Show all the columns and its properties of a table:
```
    DESCRIBE table_name; 
```

## Show specific column name of a table
```
    DESCRIBE table_name column_name;
```

## Add primary key in a table
```
    ALTER TABLE table_name 	
	ADD PRIMARY KEY (column_name, ... );
```

## Remove the primary key of a table
```
    ALTER TABLE table_name  
	DROP PRIMARY KEY;
```

## **Insert data** in a table with specific column name
```
    INSERT INTO table_name (column1,column2,
    column3, ... )     
    VALUES (value1, value2, value3, ... );
```
## **Insert data** in a table with all column name
```
    INSERT INTO table_name  		
	VALUES (value1, value2, value3, ... );
```

## Insert Multiple data in a table
```
    INSERT INTO table_name (column1, column2,
    column3, ... ) 
    VALUES (value1, value2, value3, ...),
    (value1, value2, value3, ...),
    (value1, value2, value3, ...),
    (value1, value2, value3, ...),
    .
    .
    . 
    );
```

## Display all table row data
```
    SELECT * FROM table_name;	
```

## Display specific column_name data from table
```
    SELECT column_name1, column_name2 FROM 
    table_name ;  
```    

## Where clause 
To display table row with specified condition
```
    SELECT * FROM table_name where condition ;
    such as:
    SELECT * FROM table_name where column_name
    = 'value' ;
```
## Update table data  row with condition
```
    UPDATE table_name		
		SET column1 = value1, column2 = value2,
        ...
			WHERE condition;
```
`What happen if you miss where condition ?`
> ALL records will be updated.

## Delete table row with condition
```
    DELETE FROM table_name WHERE condition;
```

## Delete all records from table_name
```
    DELETE FROM table_name;
```
## AND Operator
Displays a record if all the conditions separated by AND are TRUE.
```
    SELECT column1, column2, ...   	
		FROM table_name
		WHERE condition1 AND condition2 AND
        condition3 ... ; 
```

## OR Operator
Displays a record if any of the conditions separated by OR is TRUE.
```
    SELECT column1, column2, ...   	
		FROM table_name
		WHERE condition1 OR condition2 OR
        condition3 ... ; 
```

## NOT Operator
Displays a record if the condition is NOT TRUE.
```
    SELECT column1, column2, ...
		FROM table_name
		WHERE NOT condition;
```

## In Operator
Allows you to specify multiple values in a WHERE clause. It allow you to display row data using multiple value.
```
    SELECT column_name , ...
		FROM table_name
		WHERE column_name IN (value1, value2,
         ... ) ;
```
## Using both Not and In operator 
```
    SELECT column_name , ...
		FROM table_name
		WHERE column_name NOT IN (value1, value2,
         ... ) ;
```
## BETWEEN operator 
selects values within a given range. The values can be numbers, text, or dates.
```    
    SELECT column_name , ...
		FROM table_name
		WHERE column_name 
        BETWEEN value1 AND value2;
```
## ORDER BY
sort the result-set in ascending or descending order.
```
    SELECT column1, column2, ...
		FROM table_name			
		ORDER BY column1,
        column2, ... ASC|DESC;
```
> ORDER BY keyword sorts the records in ascending order by default.
## GROUP BY
GROUP BY statement groups rows that have the same values into summary rows
```bash
    SELECT column_name(s)
    FROM table_name
    WHERE condition
    GROUP BY column_name(s)
```
> Note: GROUP BY statement is often used with aggregate functions (COUNT, MAX, MIN, SUM, AVG) to group the result-set by one or more columns.
## SELECT DISTINCT 
Display only distinct (different) values.
```bash
    SELECT DISTINCT column1, 
    column2, ...
	FROM table_name;
```


