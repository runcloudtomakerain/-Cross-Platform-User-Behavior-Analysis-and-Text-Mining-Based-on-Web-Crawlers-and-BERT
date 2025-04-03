import json
import jieba
from collections import defaultdict, Counter


# 加载自定义词典（添加虚拟人相关词汇）
jieba.load_userdict("custom_dict.txt")

# 读取评论数据
with open("commentsFromCYWLAndLYX.json", "r", encoding="utf-8") as f:
    comments = json.load(f)
    words = [word for comment in comments for word in jieba.lcut(comment["message"])]

# # 统计词频
# word_counts = Counter(words)
#
# # 输出按词频降序排列的结果
# for word, count in word_counts.most_common():
#     print(f"{word}: {count}")

# 初始化节点与边列表
nodes = []
edges = []

# 关键词提取（示例：基于人工规则，可替换为BERT分类）
gender_keywords = {
    "形象类": ["身高", "颜值", "身材", "妆容","样貌","女神","女孩","耐看","好看","外貌","建模","皮肤","优雅","美女","素颜","美颜"],
    "情感类": ["喜欢", "反感", "理想型", "刻板印象","红娘","定制","眼缘","结婚","爱","配偶","脱单","男朋友","老婆","女友","男友"],
    "职业类": ["主播","化妆","定制","编制","老师","coser"],
    "性别类":["男女","女生","男生","男性","女性","女孩子","女孩"]
}

# 构建网络
user_gender_count = defaultdict(lambda: defaultdict(int))  # 统计用户性别-关键词频率

for comment in comments:
    user_id = f"User_{comment['mid']}"
    user_sex = comment['sex']
    nodes.append((user_id, "User", {"sex": user_sex}))  # 使用列表存储节点

    # 用户-虚拟人边
    edges.append((user_id, "Virtual_柳叶熙", 1))

    # 用户-关键词边
    words = jieba.lcut(comment["message"])
    for word in words:
        for category, keys in gender_keywords.items():
            if word in keys:
                keyword_id = f"Keyword_{word}"
                nodes.append((keyword_id, "Keyword", {"type": category, "polarity": "中性"}))  # 极性可细化
                edges.append((user_id, keyword_id, 1))
                user_gender_count[user_sex][keyword_id] += 1

# 导出为Gephi格式（CSV）
with open("nodesCYWL.csv", "w", encoding="utf-8") as f:
    f.write("Id,Label,Type,Sex,Category\n")
    for node in nodes:
        node_id, node_type, attributes = node
        if node_type == "User":
            f.write(f"{node_id},{node_id},{node_type},{attributes['sex']},\n")
        else:
            f.write(f"{node_id},{node_id},{node_type},,{attributes['type']}\n")

with open("edgesCYWL.csv", "w", encoding="utf-8") as f:
    f.write("Source,Target,Weight\n")
    for edge in edges:
        f.write(f"{edge[0]},{edge[1]},{edge[2]}\n")
