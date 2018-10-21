#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Oct 20 13:56:39 2018

@author: neerajmac
"""


import sys
initialHighestGrade = int(sys.argv[1])
finalHighestGrade = int(sys.argv[2])
#Have this contain a companies and associated point value for 
#Math contests, Club participation, Science clubs, anything that'll improve educational prowess. 
#schoolEvents = sys.argv[4]  
initialGrade = float(sys.argv[3])
finalGrade = float(sys.argv[4])
recPoints = float(sys.argv[5])
rigor = float(sys.argv[6])
Internships = {"Google" : 20, "Amazon" : 15, "Oracle" : 10, "Apple" : 9, "Microsoft" : 23 }


# curve factor  
def calcPercentFactor(highestGrade):
    return 100/highestGrade
    

#curve factor from previous semester
initialCalcPercentFactor = calcPercentFactor(initialHighestGrade)

#curve factor for new semester
finalCalcPercentFactor = calcPercentFactor(finalHighestGrade)
   
#value of points depends on rigor of the class
def pointsValue(initialGrade, finalGrade, rigor):
    return rigor * (finalGrade*finalCalcPercentFactor - initialGrade*initialCalcPercentFactor)
                 
#intern    

def compatibleInternships(points):
    internships = []
    for el in Internships:
        if points > Internships[el]:
            internships.append(el)
    # print(internships)
    
def schoolEventsPoints(events):
    points = 0
    for el in events:
        points += events[el]
    print(points)
       
    
points = 0
points += pointsValue(initialGrade, finalGrade, rigor)
points += recPoints
       
print(str(points))
compatibleInternships(points)



    
    
#to_be_sorted = the range of grades that you will be recieving. 
#USE THIS FOR LEADERBOARD. RETURNS SORTED LIST OF GRADES.
#I can modify for dictionaries if you would like me to
# or just use ur own sort algorithms    



       
def radix_sort(to_be_sorted):
  maximum_value = max(to_be_sorted)
  max_exponent = len(str(maximum_value))
  being_sorted = to_be_sorted[:]

  for exponent in range(max_exponent):
    position = exponent + 1
    index = -position

    digits = [[] for i in range(10)]

    for number in being_sorted:
      number_as_a_string = str(number)
      try:
      	digit = number_as_a_string[index]
      except IndexError:  
      	digit = 0
      digit = int(digit)  
		
      digits[digit].append(number)

    being_sorted = []
    for numeral in digits:
      being_sorted.extend(numeral)

  return being_sorted


      






    
    

        
    



    

    
    
    
