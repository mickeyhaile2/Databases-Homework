# Class Database

## Submission

Below you will find a set of tasks for you to complete to consolidate and extend your learning from this week.  You will find it beneficial to complete the reading tasks before attempting some of these.

To submit this homework write the correct commands for each question here:

```sql


```

When you have finished all of the questions - open a pull request with your answers to the `Databases-Homework` repository.

## Homework

If you haven't completed all the exercises from this lesson then do that first.

### Tasks
1.  Which rooms have a rate of more than 100.00?
SELECT * FROM rooms WHERE rate > 100;
2.  List the reservations that have a checkin date this month and are for more than three nights.
SELECT * FROM reservations 
 WHERE (checkIn_date between '2023-01-01'and '2023-01-31') and (checkOut_date - checkIn_date > 3);
3.  List all customers from cities that begin with the letter 'M'.
SELECT city FROM customers 
WHERE city LIKE 'M%'
 ;

Insert some new data into the room_types and rooms tables, querying after each stage to check the data, as follows:

4.  Make a new room type of PENTHOUSE with a default rate of £185.00.
INSERT INTO room_types (room_type, def_rate) VALUES ('PENTHOUSE', '185');
5.  Add new rooms, 501 and 502 as room type PENTHOUSE and set the room rate of each to the default value (as in the new room type).
INSERT INTO rooms (room_no, rate, room_type) VALUES ('501','185','PENTHOUSE')
INSERT INTO rooms (room_no, rate, room_type) VALUES ('502','185','PENTHOUSE');
6.  Add a new room 503 as a PREMIER PLUS type similar to the other PREMIER PLUS rooms in the hotel but with a room rate of 143.00 to reflect its improved views over the city.
Insert into rooms (room_no,rate, room_type) VALUES ('503','143','PREMIER PLUS');

Using what you can learn about aggregate functions in the w3schools SQL classes (or other providers), try:

7.  The hotel manager wishes to know how many rooms were occupied any time during the previous month - find that information.
SELECT count(id) FROM reservations WHERE (checkIn_date between '2022-12-01'and '2022-12-31')


8.  Get the total number of nights that customers stayed in rooms on the second floor (rooms 201 - 299).
SELECT SUM(checkOut_date - checkIn_date) AS total_nights FROM reservations WHERE room_no between 200 and 299;
9.  How many invoices are for more than £300.00 and what is their grand total and average amount?
SELECT COUNT(total) from invoices WHERE total > 300;
SELECT SUM(total) from invoices WHERE total > 300;
10.  Bonus Question: list the number of nights stay for each floor of the hotel (floor no is the hundreds part of room number, e.g. room **3**12 is on floor **3**)
 Floor 1- 54 - select sum(checkOut_date -checkIn_date) from reservations where room_no between 100 and 199;

    Floor 2- 63 - select sum(checkOut_date -checkIn_date) from reservations where room_no between 200 and 299;

    Floor 3- 46- select sum(checkOut_date -checkIn_date) from reservations where room_no between 300 and 399;

    Floor 4- 40 - select sum(checkOut_date -checkIn_date) from reservations where room_no between 400 and 499;
