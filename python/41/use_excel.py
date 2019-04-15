from openpyxl import load_workbook

wb = load_workbook('prices.xlsx')

sheet = wb['Sheet1']
#cell = sheet(1, 1)
cell = sheet['B2']
print(cell.value)
