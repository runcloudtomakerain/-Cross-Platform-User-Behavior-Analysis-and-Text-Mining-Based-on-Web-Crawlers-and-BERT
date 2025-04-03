import pandas as pd

# 直接从剪贴板读取表格数据（自动识别分隔符）
df = pd.read_clipboard()

# 提取名称和值列，转换为字典
cookies_dict = dict(zip(df["CURRENT_FNVAL"], df["4048"]))
print(cookies_dict)
