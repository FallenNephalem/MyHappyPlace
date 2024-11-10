import os

def list_files(directory):
    # Проверяем, существует ли директория
    if not os.path.isdir(directory):
        print(f"Директория '{directory}' не существует.")
        return
    
    # Получаем список всех файлов и директорий в указанной папке
    files = os.listdir(directory)
    
    # Выводим только файлы (игнорируем директории)
    # for file in files:
    #     if os.path.isfile(os.path.join(directory, file)):
    #         print(file)

    print(files)

# Указываем путь к папке
folder_path = 'Assets/sprites/cards/'

# Вызываем функцию для вывода списка файлов
list_files(folder_path)
