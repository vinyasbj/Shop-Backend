
# blocking io
puts "Task 1"
sleep(2) # time taken for DB operation
puts "Task 2"
sleep(1) # time taken for network call
puts "Task 3"