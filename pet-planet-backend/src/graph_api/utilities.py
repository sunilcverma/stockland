from datetime import date
from dateutil.relativedelta import relativedelta

# Utility class for common functions and calculatiuons 
class Utility(object):

# Return year of birth based on age
    @staticmethod
    def calculate_dob_year(petage):
        currYear = date.today().year
        petBirthYear=currYear-petage
        return petBirthYear
    
    # Return age based on dob
    @staticmethod
    def calculate_age_from_dob(petdob):
        today = date.today()
        age = relativedelta(today, petdob)
        return age.years
