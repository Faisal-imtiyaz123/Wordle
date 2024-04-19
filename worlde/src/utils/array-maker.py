# Open the file in read mode
with open('words.txt', 'r') as file:
    # Read the lines of the file into a list
    lines = file.readlines()

# Initialize an empty list to store the words
words = []

# Iterate over the lines and strip whitespace from each line
for line in lines:
    # Append the stripped line to the words list
    words.append(line.strip())

# Print the list of words
print(words)
