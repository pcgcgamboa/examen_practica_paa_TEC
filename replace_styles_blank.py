import os

file_path = r'c:\Users\isaac\Desktop\TEC\AsistenciaDATIC\examen_practica_paa_TEC\src\features\exam\question-bank\all.questions.ts'

# Replace fill blank style
search_str = 'style=\\"display: inline-block; border-bottom: 2px solid #333; width: 75.6px; margin: 0 3px;\\"'
replace_str = 'class=\\"fill-blank\\"'

try:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = content.replace(search_str, replace_str)
    
    if content != new_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print("Successfully replaced content.")
    else:
        print("No occurrences found to replace.")

except Exception as e:
    print(f"Error: {e}")
