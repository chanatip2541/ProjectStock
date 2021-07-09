import mysql.connector
mydb = mysql.connector.connect(
  host="203.154.83.54",
  user="root",
  password="1234qwer",
  
)
mycursor = mydb.cursor()

mycursor.execute("CREATE DATABASE mydatabase")