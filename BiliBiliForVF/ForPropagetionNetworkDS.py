import csv
import json

with open('CommentsFromLYX.json', 'r', encoding='utf-8') as file:
    data = json.load(file)

# 提取message字段
messages = [comment["message"] for comment in data]
# 假设这是您的数据

messages=[
    ["ID",'Label','Type','GenderBiasScore','Occupation'],
    messages
]

# 创建并写入CSV文件
with open('BiliBiliForVF/PropagationNetworkDS/Nodes.cvs', mode='w', newline='', encoding='utf-8') as file:
    writer = csv.writer(file)
    writer.writerows(messages)

print("CSV文件已成功创建。")
