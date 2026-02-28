import os

file_path = r'c:\Users\isaac\Desktop\TEC\AsistenciaDATIC\examen_practica_paa_TEC\src\features\exam\question-bank\all.questions.ts'
# The content in the file is inside a string, so quotes are escaped.
search_str = 'style=\\"background: linear-gradient(to bottom, #e8e8e8 0%, #ffffff 100%); border: 1px solid #ccc; border-radius: 8px; padding: 20px; margin: 15px 0; box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2); font-style: italic;\\"'
replace_str = 'class=\\"citation-box\\"'

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
        # Print a snippet to debug
        start = content.find('style=\\"background')
        if start != -1:
            print("Found partial match:")
            print(content[start:start+200])
        else:
            print("Could not find start of style string")

except Exception as e:
    print(f"Error: {e}")
